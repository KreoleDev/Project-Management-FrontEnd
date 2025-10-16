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
  approvalYear?: number;
  certificateNumber?: string;
  publicationDateBo?: string;
  referenceBo?: string;
  email?: string;
  phone?: string;
  status: ProjectStatus;
}

export type ProjectStatus =
  | "In Development"
  | "Seeking Funding"
  | "Under Implementation"
  | "Operational"
  | "Approved"
  | "Rejected";

export interface ProjectPhase {
  id: number;
  projectId: number;
  phaseName: string;
  phaseOrder: number;
  requirements?: string;
  completionPercentage: number;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
  indicators?: PhaseIndicators;
}

export interface PhaseIndicators {
  // Development indicators
  projectPrepared?: boolean;
  projectApproved?: boolean;
  licensingCompleted?: boolean;

  // Funding indicators
  fundingDecision?: "Pending" | "Approved" | "Rejected";
  bankNegotiation?: "Not Started" | "In Progress" | "Completed";
  creditContracting?: "Not Started" | "In Progress" | "Completed";

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
  reinvestmentTerm?: "Short Term" | "Medium Term" | "Long Term";
}

export interface ProjectDocument {
  id: number;
  projectId: number;
  documentName: string;
  documentType?: string;
  filePath?: string;
  uploadedAt: string;
}

export interface ProjectComment {
  id: number;
  projectId: number;
  comment: string;
  createdAt: string;
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
