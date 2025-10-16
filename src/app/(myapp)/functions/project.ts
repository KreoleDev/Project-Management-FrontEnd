import { number } from "zod/v4-mini";
import { apiClient } from "../lib/api-client";
import { PaginatedResponse, Project } from "../types/commons";
import { igrpBuildQueryString } from '@igrp/framework-next';

const USE_MOCK = true;

export async function getProjects({
  sector,
  island,
  status,
  search,
}: {
  sector?: string;
  island?: string;
  status?: string;
  search?: string;
}): Promise<PaginatedResponse<Project>> {
  if (USE_MOCK) {
    let filtered = [...sampleProjects];
    if (sector) filtered = filtered.filter(p => p.sector === sector);
    if (island) filtered = filtered.filter(p => p.island === island);
    if (status) filtered = filtered.filter(p => p.status === status);
    if (search) filtered = filtered.filter(p =>
      p.projectName.toLowerCase().includes(search.toLowerCase())
    );

    return {
      pageNumber: 1,
      pageSize: filtered.length,
      totalElements: filtered.length,
      totalPages: 1,
      last: true,
      first: true,
      content: filtered,
    };
  }

  const searchParams: { name?: string } = {};
  if (search) searchParams.name = search;

  const filteredParams = Object.fromEntries(
    Object.entries({ sector, island, status, ...searchParams }).filter(
      ([_, value]) => value != null && value !== ""
    )
  );

  const query = igrpBuildQueryString(filteredParams);
  const response = await apiClient.get<PaginatedResponse<Project>>(
    `/api/project${query.toString()}`
  );

  if (!response.data) {
    throw new Error(response.error ?? "Unknown error fetching projects");
  }

  return response.data;
}

export async function createOrUpdateProject(
  project: Record<string, unknown>
): Promise<Project> {
  if (USE_MOCK) {
    if (project.id) {
      const index = sampleProjects.findIndex(p => p.id === project.id);
      if (index !== -1) {
        sampleProjects[index] = { ...sampleProjects[index], ...project } as Project;
        return sampleProjects[index];
      }
      throw new Error("Mock project not found");
    } else {
      const newProject = {
        ...project,
        id: (sampleProjects.length + 1).toString(),
      } as Project;
      sampleProjects.push(newProject);
      return newProject;
    }
  }

  if (project.id) {
    const response = await apiClient.put<Project>(
      `/api/project?uuid=${project.id}`,
      project
    );
    if (!response.data) throw new Error("Failed to update project");
    return response.data;
  } else {
    const response = await apiClient.post<Project>("/api/project", project);
    if (!response.data) throw new Error("Failed to create project");
    return response.data;
  }
}

export async function getProject(uuid: string): Promise<Project> {
  if (USE_MOCK) {
    const project = sampleProjects.find(p => p.id === uuid);
    if (!project) throw new Error("Mock project not found");
    return project;
  }

  const response = await apiClient.get<Project>(`/api/project?uuid=${uuid}`);
  if (!response.data) throw new Error("Project not found");
  return response.data;
}

export async function deleteProject(uuid: string): Promise<void> {
  if (USE_MOCK) {
    const index = sampleProjects.findIndex(p => p.id === uuid);
    if (index !== -1) sampleProjects.splice(index, 1);
    return;
  }

  const response = await apiClient.delete(`/api/project?uuid=${uuid}`);
  if (response.error) throw new Error(response.error);
}

// use for mock data during development

export const sampleProjects: Project[] = [
  {
    id: "1",
    processNumber: "151",
    buiNumber: "BUI-2015-001",
    projectName: "Freexauto",
    promoter: "Carlos Graça",
    promoterGender: "Male",
    promotingCompany: "Freexauto, Lda",
    activity: "Car Rental, Sales and Vehicle Repair",
    investment: 373229,
    employment: 24,
    sector: "Services",
    location: "Achada Grande - Praia",
    island: "Santiago",
    capitalOrigin: "Portugal",
    investmentOrigin: "Portugal",
    nif: 12345678955,
    buiPlatformStage: "Approved",
    approvalYear: 2015,
    certificateNumber: "No. 002/CRI/2015",
    email: "freexauto@freexauto.com",
    phone: "351231442932",
    status: "Operational",
  },
  {
    id: "2",
    processNumber: "152",
    buiNumber: "BUI-2024-002",
    projectName: "Hotel Paradise",
    promoter: "Maria Silva",
    promoterGender: "Female",
    promotingCompany: "Paradise Hotels, SA",
    activity: "Hospitality and Tourism",
    investment: 2500000,
    employment: 85,
    sector: "Tourism",
    location: "Santa Maria - Sal",
    island: "Sal",
    capitalOrigin: "Cape Verde",
    investmentOrigin: "Cape Verde",
    nif: 1234566789,
    buiPlatformStage: "Under Review",
    approvalYear: 2024,
    email: "info@paradisehotels.cv",
    phone: "238123456",
    status: "Under Implementation",
  },
  {
    id: "3",
    processNumber: "153",
    buiNumber: "BUI-2024-003",
    projectName: "Mindelo Solar Energy",
    promoter: "João Santos",
    promoterGender: "Male",
    promotingCompany: "Green Energy CV",
    activity: "Renewable Energy",
    investment: 1200000,
    employment: 15,
    sector: "Energy",
    location: "Mindelo",
    island: "São Vicente",
    capitalOrigin: "Portugal",
    investmentOrigin: "Portugal",
    nif: 123456789,
    buiPlatformStage: "Pending",
    approvalYear: 2024,
    email: "joao@greenenergy.cv",
    phone: "238987654",
    status: "Seeking Funding",
  },
];
