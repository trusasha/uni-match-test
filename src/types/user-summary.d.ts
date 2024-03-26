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
  generalInformation: string;
  summary: UserSummary[];
  userTags: string[];
  company: UserCompany;
  matching: number;
}
