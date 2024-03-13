export interface IPostSignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface IPostSignUpResponse {
  name: string;
  email: string;
  hashedPassword: string;
}
