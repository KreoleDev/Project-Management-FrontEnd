export interface Project {
  id: string;
  processNumber: string;
  buiNumber: string;
  projectName: string;
  promoter: string;
  promoterGender: string;
  promotingCompany?: string;
  activity?: string;
  investment?: number;
  employment?: number;
  sector?: string;
  location?: string;
  island?: string;
  capitalOrigin?: string;
  investmentOrigin?: string;
  nif?: number;
  buiPlatformStage?: string;
  approvalYear?: string;
  certificateNumber?: string;
  publicationDateBo?: string;
  referenceBo?: string;
  email?: string;
  phone?: string;
  status: string ;
  statusDesc?: string ;
  progress?: number;
  updatedAt: string;
  createdAt: string;
  phases?: ProjectPhase[];
  documents?: Documents[];
  comments?: string[];
}

export interface Documents{
    name: string;
    description?: string;
}


export interface ProjectPhase {
  id: string;
  phaseName: string;
  phaseNameDesc: string;
  phaseOrder: number;
  requirements?: string;
  completionPercentage: number;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
  indicators?: PhaseIndicators;
  status?: string
}

export interface PhaseIndicators {
  // Development indicators
  projectPrepared?: boolean;
  projectApproved?: boolean;
  licensingCompleted?: boolean;

  // Funding indicators
  fundingDecision?: "Pendente" | "Aprovado" | "Rejeitado";
  bankNegotiation?: "Não Iniciado" | "Em Progresso" | "Concluído";
  creditContracting?: "Não Iniciado" | "Em Progresso" | "Concluído";

  // Implementation indicators
  constructionProgress?: "1-30%" | "31-70%" | "71-99%" | "100%";
  equipmentInstallation?: boolean;
  inspectionCompleted?: boolean;
  operationLicenseGranted?: boolean;

  // Operational indicators
  investmentMade?: number;
  businessVolume?: number;
  jobsPlanned?: number;
  jobsCreated?: number;
  reinvestmentPlan?: string;
  reinvestmentTerm?: "Curto Prazo" | "Médio Prazo" | "Longo Prazo";
}



export interface PaginatedResponse<T> {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
    first: boolean;
    content: T[];
}
