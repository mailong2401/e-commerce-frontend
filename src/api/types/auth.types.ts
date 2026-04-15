export interface SendOtpRequest {
  email: string;
  username: string;
}

export interface SendOtpResponse {
  status: number;
  success: string;
  expiresIn?: number;
}

export interface RegisterRequest {
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  otp: string;
}

export interface RegisterResponse {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  address: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface CheckEmailResponse {
  exists: boolean
}
export interface CheckUsernameResponse {
  exists: boolean
}
