import { useQuery } from '@tanstack/react-query';
import { Project, PaginatedResponse } from '../types/commons';
import { getProjects, getProject } from '../functions/project';
import {
  projectStatus,
  capitalOrigin,
  investmentOrigin,
  sector,
  island,
  promoterGender,
  buiPlatformStage,
  phaseName,
  inWork,
  reinvestmentPlan,
  term,
  situationStatus,
} from '../functions/configuration';

export const useProject = ({
  sector,
  island,
  status,
  search,
}: {
  sector?: string;
  island?: string;
  status?: string;
  search?: string;
}) => {
  return useQuery<PaginatedResponse<Project>>({
    queryKey: ['project', sector, island, status, search],
    queryFn: () =>
      getProjects({
        sector,
        island,
        status,
        search,
      }),
  });
};

export function useDetailProject(uuid: string) {
  return useQuery({
    queryKey: ['project', uuid],
    queryFn: async () => {
      console.log('Fetching project with uuid:', uuid);
      const data = await getProject(uuid);
      return data;
    },
  });
}

export const useProjectConfiguration = () => {
  const projectStatusOptions = projectStatus();
  const capitalOriginOptions = capitalOrigin();
  const investmentOriginOptions = investmentOrigin();
  const sectorOptions = sector();
  const islandOptions = island();
  const promoterGenderOptions = promoterGender();
  const buiPlatformStageOptions = buiPlatformStage();
  const phaseNameOptions = phaseName();
  const inWorkOptions = inWork();
  const reinvestmentPlanOptions = reinvestmentPlan();
  const termOptions = term();
  const situationStatusOptions = situationStatus();
  return {
    projectStatusOptions,
    capitalOriginOptions,
    investmentOriginOptions,
    sectorOptions,
    islandOptions,
    promoterGenderOptions,
    buiPlatformStageOptions,
    phaseNameOptions,
    inWorkOptions,
    reinvestmentPlanOptions,
    termOptions,
    situationStatusOptions,
  };
};
