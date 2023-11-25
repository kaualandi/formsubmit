export interface SubmissionInfor {
  label: string;
  value: string;
}

export interface SubmissionData {
  subject: string;
  infors: SubmissionInfor[];
}