export interface AppCardProps {
  id?: number;
  title: string;
  image: string;
  url?: string;
  description: string;
}

export type ProconsState = {
  pro: string[];
  cons: string[];
}

export type TotalRepeated = {
  [number: string]: number
}

export type TotalState = { 
  total: number;
  numbers: string[];
  repeated: TotalRepeated;
}