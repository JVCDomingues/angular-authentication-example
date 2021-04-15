import { User } from './User';

export interface Projects {
  projects: Project[];
  user: User;
}

export interface Project {
  _id: number;
  name: string;
  description: string;
}