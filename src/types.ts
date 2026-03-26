export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  impact?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  bullets?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  bullets?: string[];
}
