interface UserSummary {
  label: string;
  value: string;
  id: string;
}

interface UserProfile {
  summary: UserSummary[];
}
