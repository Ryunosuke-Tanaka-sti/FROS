import { SearchManager, SearchQualification, SearchSkill } from '@/types/search.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchSearchSkill = async (ids?: string) => {
  if (!ids) {
    const res = await axiosClient.get<SearchSkill>('/api/search');
    return res.data;
  }
  const res = await axiosClient.get<SearchSkill>(`/api/search?ids=${ids}`);
  return res.data;
};

export const fetchSearchManager = async (ids?: string) => {
  if (!ids) {
    const res = await axiosClient.get<SearchManager>('/api/search/managers');
    return res.data;
  }
  const res = await axiosClient.get<SearchManager>(`/api/search/managers?ids=${ids}`);
  return res.data;
};

export const fetchSearchQualification = async (ids?: string) => {
  if (!ids) {
    const res = await axiosClient.get<SearchQualification>('/api/search/qualifications');
    return res.data;
  }
  const res = await axiosClient.get<SearchQualification>(`/api/search/qualifications?ids=${ids}`);
  return res.data;
};
