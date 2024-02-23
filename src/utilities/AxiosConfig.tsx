/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { useAuthenticated } from '@/hooks/useAuth';

export const axiosClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

type Props = {
  children: React.ReactNode;
};

export const AxiosConfig = (props: Props) => {
  const { children } = props;

  const { showBoundary } = useErrorBoundary();
  const { idToken } = useAuthenticated();
  const [isTokenSet, setIsTokenSet] = useState<boolean>(false);

  useEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers['google-certification'] = `${idToken}`;

        return config;
      },
      (error: AxiosError) => showBoundary(error),
    );
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        console.error('error');

        showBoundary(error);
        return Promise.reject(error);
      },
    );
    if (idToken) setIsTokenSet(true);

    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
      axiosClient.interceptors.request.eject(requestInterceptor);
    };
  }, [idToken]);

  if (!isTokenSet) return <div>loading</div>;
  return <>{children}</>;
};
