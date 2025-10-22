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
  situation?: Situation[];
}

export interface Documents{
    name: string;
    description?: string;
}

export interface Situation {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    status: string;
    statusDesc: string;
}


export interface ProjectPhase {
  id: string;
  phaseName: string;
  phaseNameDesc: string;
  completionPercentage: number;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
  indicators?: PhaseIndicators;
  status?: string
}

export interface PhaseIndicators {
  // Development indicators
  projectElaboration?: boolean;
  projectApproval?: boolean;
  licensing?: boolean;

  // Funding indicators
  fundingDecision?: boolean;
  bankNegotiation?: boolean;
  creditContracting?: boolean;

  // Implementation indicators
  constructionProgress?: string;
  equipmentInstallation?: boolean;
  inspectionAndLicensing?: boolean;

  // Operational indicators
  investmentMade?: number;
  businessVolume?: number;
  jobsPlanned?: number;
  jobsCreated?: number;
  reinvestmentPlan?: string;
  reinvestmentDesc?: string;
  island?: string;
  sector?: string;
  term?: string;
  reason?: string;
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
