import { AxiosResponse } from "axios";
import { IUser } from "@/interfaces/User.interface";
import httpService from "./api.service";
import { useUserStore } from "@/store/user.store";

const AUTH_URL = "auth/";

export interface IRegisterParams {
  email: string;
  password: string;
  name: string;
}

export interface ILoginParams {
  email: string;
  password: string;
}

const authService = {
  async signup(params: IRegisterParams): Promise<AxiosResponse> {
    return await httpService.post(`${AUTH_URL}signup`, params);
  },
  async login(params: ILoginParams): Promise<AxiosResponse> {
    return await httpService.post(`${AUTH_URL}login`, params);
  },
  async refreshToken(): Promise<AxiosResponse> {
    return await httpService.get(`${AUTH_URL}refresh-token/`);
  },
};

export default authService;
