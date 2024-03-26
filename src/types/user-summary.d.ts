interface UserSummary {
  label: string;
  value: string;
  id: string;
}

interface UserProfile {
  generalInformation: string;
  summary: UserSummary[];
  userTags: string[];
}
