export interface UserProfile {
  id: string;
  name: string;
  email: string;
  skills: string[];
  experienceYears: number;
  preferredLocations: string[];
  preferredIndustries: string[];
  expectedSalaryMin: number;
  expectedSalaryMax: number;
  currentPlan?: SubscriptionPlan;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  requiredSkills: string[];
  industry: string;
  description: string;
  postedDate?: string;
  applicationDeadline?: string;
  minExperienceYears?: number;
}

export interface MatchResult {
  job: Job;
  score: number;
  reasons: string[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  type: 'freemium' | 'subscription' | 'usage-based';
}

export interface Transaction {
  id: string;
  userId: string;
  planId: string;
  amount: number;
  currency: string;
  date: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface AppState {
  user: UserProfile | null;
  jobs: Job[];
  matches: MatchResult[];
  loading: boolean;
  error: string | null;
}
