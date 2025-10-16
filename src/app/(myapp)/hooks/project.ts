import { useQuery } from "@tanstack/react-query";
import { Project, PaginatedResponse } from "../types/commons";
import { getProjects, getProject} from "../functions/project";


export const useProject = ({
sector,
island,
status,
search
}:{
    sector?: string,
    island?: string,
    status?: string,
    search?: string
}) => {
  return useQuery<PaginatedResponse<Project>>({
    queryKey: ['project', sector, island, status, search],
    queryFn: () => getProjects({
      sector,
      island,
      status,
      search
    })
  });
};

export function useDetailProject(uuid: string) {
  return useQuery({
    queryKey: ['project', uuid],
    queryFn: async () => {
        console.log("Fetching project with uuid:", uuid);
        const data = await getProject(uuid);
        console.log("data:", data);
      return data;
    }
  });
}





