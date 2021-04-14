export interface UserAuthenticated {
  user: User;
  token: string;
}

export interface User {
  createdAt: string;
  email: string;
  name: string;  
}