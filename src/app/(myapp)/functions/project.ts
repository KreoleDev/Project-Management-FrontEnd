import { apiClient } from '../lib/api-client';
import { PaginatedResponse, Project } from '../types/commons';
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
    if (sector) filtered = filtered.filter((p) => p.sector === sector);
    if (island) filtered = filtered.filter((p) => p.island === island);
    if (status) filtered = filtered.filter((p) => p.status === status);
    if (search)
      filtered = filtered.filter((p) => p.projectName.toLowerCase().includes(search.toLowerCase()));

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
      ([_, value]) => value != null && value !== '',
    ),
  );

  const query = igrpBuildQueryString(filteredParams);
  const response = await apiClient.get<PaginatedResponse<Project>>(
    `/api/project${query.toString()}`,
  );

  if (!response.data) {
    throw new Error(response.error ?? 'Unknown error fetching projects');
  }

  return response.data;
}

export async function createOrUpdateProject(project: Record<string, unknown>): Promise<Project> {
  if (USE_MOCK) {
    if (project.id) {
      const index = sampleProjects.findIndex((p) => p.id === project.id);
      if (index !== -1) {
        sampleProjects[index] = { ...sampleProjects[index], ...project } as Project;
        return sampleProjects[index];
      }
      throw new Error('Mock project not found');
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
    const response = await apiClient.put<Project>(`/api/project?uuid=${project.id}`, project);
    if (!response.data) throw new Error('Failed to update project');
    return response.data;
  } else {
    const response = await apiClient.post<Project>('/api/project', project);
    if (!response.data) throw new Error('Failed to create project');
    return response.data;
  }
}

export async function getProject(uuid: string): Promise<Project> {
  if (USE_MOCK) {
    const project = sampleProjects.find((p) => p.id === uuid);
    if (!project) throw new Error('Mock project not found');
    return project;
  }

  const response = await apiClient.get<Project>(`/api/project?uuid=${uuid}`);
  if (!response.data) throw new Error('Project not found');
  return response.data;
}

export async function deleteProject(uuid: string): Promise<void> {
  if (USE_MOCK) {
    const index = sampleProjects.findIndex((p) => p.id === uuid);
    if (index !== -1) sampleProjects.splice(index, 1);
    return;
  }

  const response = await apiClient.delete(`/api/project?uuid=${uuid}`);
  if (response.error) throw new Error(response.error);
}

// use for mock data during development

export const sampleProjects: Project[] = [
  {
    id: '1',
    processNumber: '151',
    buiNumber: 'BUI-2015-001',
    projectName: 'Freexauto',
    promoter: 'Carlos Graça',
    promoterGender: 'Masculino',
    promotingCompany: 'Freexauto, Lda',
    activity: 'Serviços automotivos',
    investment: 373229,
    employment: 24,
    sector: 'Serviços',
    location: 'Achada Grande - Praia',
    island: 'Santiago',
    capitalOrigin: 'Misto',
    investmentOrigin: 'Privado',
    nif: 12345678955,
    buiPlatformStage: 'Aprovado',
    approvalYear: '2015-02-03',
    certificateNumber: 'No. 002/CRI/2015',
    publicationDateBo: '2015-06-01',
    referenceBo: 'BO/2015/002',
    email: 'freexauto@freexauto.com',
    phone: '351231442932',
    status: 'Em_Funcionamento',
    statusDesc: 'Em Funcionamento',
    progress: 100,
    createdAt: '2015-04-15T10:00:00Z',
    updatedAt: '2024-10-10T12:00:00Z',
    phases: [
      {
        id: 'p1',
        phaseName: 'desenvolvimento',
        phaseNameDesc: 'Desenvolvimento',
        status: 'Concluído',
        completionPercentage: 100,
        startedAt: '2014-01-10',
        completedAt: '2014-12-15',
        createdAt: '2014-01-10',
        indicators: {
          projectElaboration: true,
          projectApproval: true,
          licensing: false,
        },
      },
      {
        id: 'p2',
        phaseName: 'implementacao',
        phaseNameDesc: 'Implementação',
        completionPercentage: 100,
        status: 'Concluído',
        startedAt: '2015-01-01',
        completedAt: '2015-06-01',
        createdAt: '2015-01-01',
        indicators: {
           equipmentInstallation: true,
          inspectionAndLicensing: false,
        },
      },
      {
        id: 'p3',
        phaseName: 'funcionamento',
        phaseNameDesc: 'Funcionamento',
        status: 'Ativo',
        completionPercentage: 100,
        createdAt: '2015-07-01',
        indicators: {
          investmentMade: 373229,
          businessVolume: 150000,
          jobsPlanned: 24,
          jobsCreated: 24,
          reinvestmentDesc:'sim',
          reinvestmentPlan: 'Sim',
          island: 'Santiago',
          sector: 'Serviços',
          term: 'Médio Prazo',
        },
      },
    ],
    documents: [
      { name: 'Feasibility Study.pdf', description: 'Estudo de viabilidade.' },
      { name: 'Environmental Report.pdf', description: 'Relatório ambiental.' },
    ],
    comments: ['Projeto em funcionamento estável.'],
  },

  {
    id: '2',
    processNumber: '152',
    buiNumber: 'BUI-2024-002',
    projectName: 'Hotel Paradise',
    promoter: 'Maria Silva',
    promoterGender: 'Feminino',
    promotingCompany: 'Paradise Hotels, SA',
    activity: 'Turismo e Hospitalidade',
    investment: 2500000,
    employment: 85,
    sector: 'Turismo',
    location: 'Santa Maria - Sal',
    island: 'Sal',
    capitalOrigin: 'Nacional',
    investmentOrigin: 'Privado',
    nif: 1234566789,
    buiPlatformStage: 'Aprovado',
    approvalYear: '2024-02-03',
    certificateNumber: 'No. 004/CRI/2024',
    publicationDateBo: '2024-03-22',
    referenceBo: 'BO/2024/004',
    email: 'info@paradisehotels.cv',
    phone: '238123456',
    status: 'Em_Implementação',
    statusDesc: 'Em Implementação',
    progress: 70,
    createdAt: '2024-03-01T09:00:00Z',
    updatedAt: '2025-02-10T15:00:00Z',
    phases: [
      {
        id: 'p1',
        phaseName: 'financiamento',
        phaseNameDesc: 'Financiamento',
        status: 'Concluído',
        completionPercentage: 100,
        indicators: {
          fundingDecision: true,
          bankNegotiation: true,
          creditContracting: false,
        },
        startedAt: '2023-05-01',
        completedAt: '2023-08-10',
        createdAt: '2023-05-01',
      },
      {
        id: 'p2',
        phaseName: 'implementacao',
        phaseNameDesc: 'Implementação',
        status: 'Em Progresso',
        completionPercentage: 70,
        startedAt: '2024-01-01',
        createdAt: '2024-01-01',
        indicators: {
          constructionProgress: '71-99%',
          equipmentInstallation: false,
          inspectionAndLicensing: false,
        },
      },
    ],
    documents: [
      { name: 'Projeto_Arquitetonico.pdf', description: 'Projeto detalhado.' },
      { name: 'Plano_de_Negocios.pdf', description: 'Plano de negócios.' },
    ],
    comments: ['Hotel em fase final de construção.'],
  },

  {
    id: '3',
    processNumber: '153',
    buiNumber: 'BUI-2024-003',
    projectName: 'Mindelo Solar Energy',
    promoter: 'João Santos',
    promoterGender: 'Masculino',
    promotingCompany: 'Green Energy CV',
    activity: 'Energia Renovável',
    investment: 1200000,
    employment: 15,
    sector: 'Energia',
    location: 'Mindelo',
    island: 'São Vicente',
    capitalOrigin: 'Estrangeiro',
    investmentOrigin: 'Privado',
    nif: 123456789,
    buiPlatformStage: 'Em Análise',
    approvalYear: '2024-02-03',
    certificateNumber: 'No. 005/CRI/2024',
    publicationDateBo: '2024-07-15',
    referenceBo: 'BO/2024/005',
    email: 'joao@greenenergy.cv',
    phone: '238987654',
    status: 'Em_Funcionamento',
    statusDesc: 'Em Funcionamento',
    progress: 40,
    createdAt: '2024-07-01T08:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
    phases: [
      {
        id: 'p1',
        phaseName: 'funcionamento',
        phaseNameDesc: 'Funcionamento',
        status: 'Concluído',
        completionPercentage: 100,
        startedAt: '2024-01-01',
        createdAt: '2024-01-01',
        indicators: {
          investmentMade: 23011,
          businessVolume: 150000,
          jobsPlanned: 24,
          jobsCreated: 24,
          reinvestmentDesc:'nao',
          reinvestmentPlan: 'Não',
          reason: 'Ajustes técnicos em curso',
        },
      },
      {
        id: 'p2',
        phaseName: 'financiamento',
        phaseNameDesc: 'Financiamento',
        status: 'Em Progresso',
        completionPercentage: 40,
        startedAt: '2024-01-01',
        createdAt: '2024-01-01',
        indicators: {
          fundingDecision: true,
          bankNegotiation: false,
          creditContracting: false,
        },
      },
    ],
    documents: [
      { name: 'Relatório de Viabilidade.pdf', description: 'Relatório técnico.' },
      { name: 'Relatório Ambiental.pdf', description: 'Relatório ambiental.' },
    ],
    comments: ['Aguardando aprovação de financiamento.'],
  },
];


export function getStatusProject(project: any) {
  const color =
    project.statusDesc === 'Em Funcionamento'
      ? 'bg-green-100 text-green-800'
      : project.statusDesc === 'Em Implementação'
        ? 'bg-blue-100 text-blue-800'
        : project.statusDesc === 'Em Procura de Financiamento'
          ? 'bg-orange-100 text-orange-800'
          : 'bg-gray-100 text-gray-800';

  return { bgClass: color, label: project.statusDesc };
}
