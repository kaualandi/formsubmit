export interface SubmissionInfor {
  label: string;
  value: string;
}

export interface SubmissionData {
  subject: string;
  name: string;
  infors: SubmissionInfor[];
}