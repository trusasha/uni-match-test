interface UserSummary {
  label: string;
  value: string;
  id: string;
}

interface UserCompany {
  name: string;
  location: string;
  logo: string;
}

interface UserProfile {
  id: string;
  generalInformation: string;
  summary: UserSummary[];
  userTags: string[];
  company: UserCompany;
  matching: number;
  savedCount: string;
  videoUrl: string;
}
