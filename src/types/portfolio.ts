export interface Project {
  id: string;
  title: string;
  domain: string;
  technologies: string[];
  introduction: string;
  problemStatement: string[];
  existingSystem: string[];
  proposedSystemSolution: string[];
  advantages: string[];
  futureInnovations: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface EducationItem {
  id: string;
  level: string;
  institution: string;
  location: string;
  yearOfPassing: string;
  score?: string;
  medium?: string;
  educationType?: string;
}

export type CertificateGroup = 'NPTEL' | 'IEEE Conference' | 'Other Certificates';

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  group: CertificateGroup;
  honorBadge?: string;
  issueDate?: string;
  imageUrl?: string;
  credentialUrl?: string;
  paperTitle?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
