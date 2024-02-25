import useSWR from 'swr';

import {
  createUtilitiesData,
  deleteUtilitiesData,
  fetchIndividualUtilityData,
  fetchUtilitiesAllData,
  updateUtilitiesData,
} from '@/api/Utilities';
import { utilitiesDataType } from '@/types/utilitiesData.type';

export const useAllUtilitiesData = () => {
  const { data: allUtilitiesData, isLoading: isLoadingAllUtilitiesData } = useSWR(
    'utilities',
    fetchUtilitiesAllData,
  );
  return { allUtilitiesData, isLoadingAllUtilitiesData };
};

export const useUtilitiesDataSL = () => {
  const {
    data: utilitiesDataSL,
    isLoading: isLoadingUtilitiesDataSL,
    mutate: mutateSL,
  } = useSWR('sl', () => fetchIndividualUtilityData('sl'));

  const createDataSL = async (displayName: string) => {
    await createUtilitiesData('sl', { displayName });
    mutateSL();
  };

  const updateDataSL = async (request: utilitiesDataType) => {
    await updateUtilitiesData('sl', request);
    mutateSL();
  };

  const deleteDataSL = async (uid: string) => {
    await deleteUtilitiesData('sl', uid);
    mutateSL();
  };

  return {
    utilitiesDataSL,
    isLoadingUtilitiesDataSL,
    mutateSL,
    createDataSL,
    updateDataSL,
    deleteDataSL,
  };
};

export const useUtilitiesDataSkill = () => {
  const {
    data: utilitiesDataSkill,
    isLoading: isLoadingUtilitiesDataSkill,
    mutate: mutateSkill,
  } = useSWR('skill', () => fetchIndividualUtilityData('skill'));

  const createDataSkill = async (displayName: string) => {
    await createUtilitiesData('skill', { displayName });
    mutateSkill();
  };

  const updateDataSkill = async (request: utilitiesDataType) => {
    await updateUtilitiesData('skill', request);
    mutateSkill();
  };
  const deleteDataSkill = async (uid: string) => {
    await deleteUtilitiesData('skill', uid);
    mutateSkill();
  };

  return {
    utilitiesDataSkill,
    isLoadingUtilitiesDataSkill,
    mutateSkill,
    createDataSkill,
    updateDataSkill,
    deleteDataSkill,
  };
};

export const useUtilitiesDataQualification = () => {
  const {
    data: utilitiesDataQualification,
    isLoading: isLoadingUtilitiesDataQualification,
    mutate: mutateQuantification,
  } = useSWR('qualification', () => fetchIndividualUtilityData('qualification'));

  const createDataQualification = async (displayName: string) => {
    await createUtilitiesData('qualification', { displayName });
    mutateQuantification();
  };
  const updateDataQualification = async (request: utilitiesDataType) => {
    await updateUtilitiesData('qualification', request);
    mutateQuantification();
  };
  const deleteDataQualification = async (uid: string) => {
    await deleteUtilitiesData('qualification', uid);
    mutateQuantification();
  };

  return {
    utilitiesDataQualification,
    isLoadingUtilitiesDataQualification,
    mutateQuantification,
    createDataQualification,
    updateDataQualification,
    deleteDataQualification,
  };
};

export const useUtilitiesDataManager = () => {
  const {
    data: utilitiesDataManager,
    isLoading: isLoadingUtilitiesDataManager,
    mutate: mutateManager,
  } = useSWR('manager', () => fetchIndividualUtilityData('manager'));

  const createDataManager = async (displayName: string) => {
    await createUtilitiesData('manager', { displayName });
    mutateManager();
  };
  const updateDataManager = async (request: utilitiesDataType) => {
    await createUtilitiesData('manager', request);
    mutateManager();
  };
  const deleteDataManager = async (uid: string) => {
    await deleteUtilitiesData('manager', uid);
    mutateManager();
  };

  return {
    utilitiesDataManager,
    isLoadingUtilitiesDataManager,
    mutateManager,
    createDataManager,
    updateDataManager,
    deleteDataManager,
  };
};
