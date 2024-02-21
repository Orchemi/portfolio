export interface IPostLoginRequest {
  email: string;
  password: string;
}

export interface IPostLoginResponse {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
}
