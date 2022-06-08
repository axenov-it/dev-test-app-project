export interface UserInterface {
  id: number;
  name: string;
  company: string;
  city: string;
  account: string;
  ip: string;
}

export type FieldTypes = 'name' | 'company' | 'city' | 'account';

export type SortTypes = 'asc' | 'desc';
