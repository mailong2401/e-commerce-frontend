import api from "../client";
import type {
  SendOtpResponse,
  RegisterResponse,
} from "../types/auth.types";

export const authApi = {
  sendOtp: (email: string, username: string) =>
    api.post<SendOtpResponse>("/api/auth/send-otp", { email, username }),

  register: (lastName: string, firstName: string, username: string, email: string, password: string, phone: string, otp: string) =>
    api.post<RegisterResponse>("/api/auth/register",
      {
        lastName,
        firstName,
        username,
        email,
        password,
        phone,
        otp
      }),
  checkEmail: (email: string) =>
    api.get("/api/auth/check-email", {
      params: { email },
    }),
  checkUsername: (username: string) =>
    api.get("/api/auth/check-username", {
      params: {
        username
      },
    }),
};

export const { sendOtp, register, } = authApi;
