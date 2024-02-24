import {
  createUtilitiesDataType,
  utilitiesAllDataType,
  utilitiesDataType,
} from '@/types/utilitiesData.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchUtilitiesAllData = async () => {
  const res = await axiosClient.get<utilitiesAllDataType[]>('/api/utilities');
  return res.data;
};

type utilitiesTargets = 'sl' | 'skill' | 'qualification' | 'manager';

export const fetchIndividualUtilityData = async (target: utilitiesTargets) => {
  const res = await axiosClient.get<utilitiesDataType[]>(`/api/utilities/${target}`);
  return res.data;
};

export const createUtilitiesData = async (
  target: utilitiesTargets,
  data: createUtilitiesDataType,
) => {
  await axiosClient.post(`/api/utilities/${target}`, data);
};

export const updateUtilitiesData = async (target: utilitiesTargets, data: utilitiesDataType) => {
  await axiosClient.put(`/api/utilities/${target}/${data.uid}`, data);
};

export const deleteUtilitiesData = async (target: utilitiesTargets, uid: string) => {
  await axiosClient.delete(`/api/utilities/${target}/${uid}`);
};
