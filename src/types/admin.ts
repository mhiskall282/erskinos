export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface Order {
  id: string;
  total: number;
  status: string;
}