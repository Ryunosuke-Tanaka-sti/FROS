import useSWR from 'swr';

import { fetchSearchManager, fetchSearchQualification, fetchSearchSkill } from '@/api/Search';

export const useSearchSkills = (ids?: string) => {
  const {
    data: searchSkillData,
    isLoading: isLoadingSearchData,
    isValidating: isValidatingSearchData,
    mutate,
  } = useSWR([`searchSkills`], () => fetchSearchSkill(ids), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const mutateSearchSkill = (ids?: string) => {
    mutate(fetchSearchSkill(ids));
  };
  return { searchSkillData, isLoadingSearchData, isValidatingSearchData, mutateSearchSkill };
};

export const useSearchQualification = (ids?: string) => {
  const {
    data: searchQualificationData,
    isLoading: isLoadingSearchData,
    mutate,
  } = useSWR([`searchQualification`], () => fetchSearchQualification(ids), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const mutateSearchQualification = (ids?: string) => {
    mutate(fetchSearchQualification(ids));
  };
  return { searchQualificationData, isLoadingSearchData, mutateSearchQualification };
};

export const useSearchManager = (ids?: string) => {
  const {
    data: searchManagerData,
    isLoading: isLoadingSearchData,
    mutate,
  } = useSWR([`searchManager`], () => fetchSearchManager(ids), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const mutateSearchManager = (ids?: string) => {
    mutate(fetchSearchManager(ids));
  };
  return { searchManagerData, isLoadingSearchData, mutateSearchManager };
};
