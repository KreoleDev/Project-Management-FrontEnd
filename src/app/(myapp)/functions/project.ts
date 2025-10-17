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
    promoterGender: "Masculino",
    promotingCompany: "Freexauto, Lda",
    activity: "Aluguer de Carros, Vendas e Reparação de Veículos",
    investment: 373229,
    employment: 24,
    sector: "Serviços",
    location: "Achada Grande - Praia",
    island: "Santiago",
    capitalOrigin: "Portugal",
    investmentOrigin: "Portugal",
    nif: 12345678955,
    buiPlatformStage: "Aprovado",
    approvalYear: "2015-02-03",
    certificateNumber: "No. 002/CRI/2015",
    publicationDateBo: "2015-06-01",
    referenceBo: "BO/2015/002",
    email: "freexauto@freexauto.com",
    phone: "351231442932",
    status: "Em Funcionamento",
    createdAt: "2015-04-15T10:00:00Z",
    updatedAt: "2024-10-10T12:00:00Z",
    phases: [
      {
        id: "p1",
        phaseName: "Desenvolvimento",
        phaseOrder: 1,
        requirements: "Estudo de Viabilidade, Aprovação das Autoridades",
        status: "Concluído",
        completionPercentage: 100,
        startedAt: "2014-01-10",
        completedAt: "2014-12-15",
        createdAt: "2014-01-10",
        indicators: {
          projectPrepared: true,
          projectApproved: true,
          licensingCompleted: true
        }
      },
      {
        id: "p2",
        phaseName: "Implementation",
        phaseOrder: 2,
        completionPercentage: 100,
        status: "Concluído",
        requirements: "Construção do Espaço, Instalação de Equipamentos, Inspeção Final",
        startedAt: "2015-01-01",
        completedAt: "2015-06-01",
        createdAt: "2015-01-01",
        indicators: {
          constructionProgress: "100%",
          equipmentInstallation: true,
          inspectionCompleted: true,
          operationLicenseGranted: true
        }
      }
    ],
    documents: [
      {
        name: "Feasibility Study.pdf",
        description: "Detailed analysis of the project's feasibility."
      },
      {
        name: "Environmental Report.pdf",
        description: "Assessment of the project's environmental impact."
      },
      {
        name: "Financial Plan.pdf",
        description: "Comprehensive financial plan for Freexauto."
      }
    ],
    comments: ["Proposta enviada.", "Aguardando decisão de financiamento.", "Visita ao local agendada para a próxima semana."]
  },
  {
    id: "2",
    processNumber: "152",
    buiNumber: "BUI-2024-002",
    projectName: "Hotel Paradise",
    promoter: "Maria Silva",
    promoterGender: "Feminino",
    promotingCompany: "Paradise Hotels, SA",
    activity: "Hospitalidade e Turismo",
    investment: 2500000,
    employment: 85,
    sector: "Turismo",
    location: "Santa Maria - Sal",
    island: "Sal",
    capitalOrigin: "Cabo Verde",
    investmentOrigin: "Cabo Verde",
    nif: 1234566789,
    buiPlatformStage: "Aprovado",
    approvalYear: "2024-02-03",
    certificateNumber: "No. 004/CRI/2024",
    publicationDateBo: "2024-03-22",
    referenceBo: "BO/2024/004",
    email: "info@paradisehotels.cv",
    phone: "238123456",
    status: "Em Desenvolvimento",
    createdAt: "2024-03-01T09:00:00Z",
    updatedAt: "2025-02-10T15:00:00Z",
    phases: [
      {
        id: "p3",
        phaseName: "Financiamento",
        phaseOrder: 1,
        status: "Pendente",
        completionPercentage: 100,
        requirements: "Aprovação do Financiamento",
        startedAt: "2023-05-01",
        completedAt: "2023-08-10",
        createdAt: "2023-05-01",
        indicators: {
          fundingDecision: "Aprovado",
          bankNegotiation: "Concluído",
          creditContracting: "Concluído"
        }
      },
      {
        id: "p4",
        phaseName: "Implementação",
        phaseOrder: 2,
        status: "Em Progresso",
        requirements: "Construção do Hotel, Instalação de Equipamentos",
        completionPercentage: 65,
        startedAt: "2024-01-01",
        createdAt: "2024-01-01",
        indicators: {
          constructionProgress: "31-70%",
          equipmentInstallation: false,
          inspectionCompleted: false
        }
      }
    ],
    documents: [
        {
            name: "Projeto_Arquitetonico.pdf",
            description: "Projeto arquitetônico detalhado."
        },
        {
            name: "Plano_de_Negocios.pdf",
            description: "Plano de negócios completo para o Hotel Paradise."
        },
        {
            name: "Estudo_de_Impacto_Ambiental.pdf",
            description: "Análise dos impactos ambientais do projeto."
        }
    ],
    comments: ["Projeto inicial aprovado.", "Aguardando liberação ambiental."]
  },
  {
    id: "3",
    processNumber: "153",
    buiNumber: "BUI-2024-003",
    projectName: "Mindelo Solar Energy",
    promoter: "João Santos",
    promoterGender: "Masculino",
    promotingCompany: "Green Energy CV",
    activity: "Energia Renovável",
    investment: 1200000,
    employment: 15,
    sector: "Energia",
    location: "Mindelo",
    island: "São Vicente",
    capitalOrigin: "Portugal",
    investmentOrigin: "Portugal",
    nif: 123456789,
    buiPlatformStage: "Em Análise",
    approvalYear: "2024-02-03",
    certificateNumber: "No. 005/CRI/2024",
    publicationDateBo: "2024-07-15",
    referenceBo: "BO/2024/005",
    email: "joao@greenenergy.cv",
    phone: "238987654",
    status: "Em Implementação",
    createdAt: "2024-07-01T08:00:00Z",
    updatedAt: "2025-01-15T10:00:00Z",
    phases: [
      {
        id: "p5",
        phaseName: "Desenvolvimento",
        phaseOrder: 1,
        status: "Em Finalização",
        requirements: "Aprovação do Local, Licença Ambiental",
        completionPercentage: 100,
        startedAt: "2023-12-10",
        completedAt: "2024-01-30",
        createdAt: "2023-12-10",
        indicators: {
          projectPrepared: true,
          projectApproved: true,
          licensingCompleted: true
        }
      },
      {
        id: "p6",
        phaseName: "Funding",
        phaseOrder: 2,
        status: "Em Financiamento",
        requirements: "Aprovação do Financiamento",
        completionPercentage: 40,
        startedAt: "2024-02-01",
        createdAt: "2024-02-01",
        indicators: {
          fundingDecision: "Pendente",
          bankNegotiation: "Em Progresso",
          creditContracting: "Não Iniciado"
        }
      }
    ],
    documents: [
      {
        name: "Relatório de Viabilidade.pdf",
        description: "Relatório detalhado sobre a viabilidade do projeto de energia solar em Mindelo."
      },
      {
        name: "Relatório de Viabilidade.pdf",
        description: "Relatório detalhado sobre a viabilidade do projeto de energia solar em Mindelo."
      },
      {
        name: "Relatório Ambiental.pdf",
        description: "Relatório sobre os impactos ambientais do projeto de energia solar em Mindelo."
      }
    ],
    comments: ["Proposta inicial enviada.", "Aguardando decisão de financiamento.", "Visita ao local agendada para a próxima semana."]
  }
];
