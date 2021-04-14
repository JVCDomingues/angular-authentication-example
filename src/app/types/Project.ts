import { User } from './User';

export interface Projects {
  projects: Project;
  user: User;
}

interface Project {
  _id: number;
  name: string;
  description: string;
}