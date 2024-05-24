import authService, {
  ILoginParams,
  IRegisterParams,
} from "@/services/auth.service";

import { AxiosResponse } from "axios";
import { IUser } from "@/interfaces/User.interface";
import { defineStore } from "pinia";

interface AuthState {
  user: IUser | null;
  token: string | null;
}

type authFunc = () => string;

export const useUserStore = defineStore("user", {
  state: (): AuthState => ({
    user: null,
    token: null,
  }),
  persist: {
    enabled: true,
  },
  actions: {
    async login(params: ILoginParams): Promise<IUser | undefined> {
      try {
        const response: AxiosResponse<IUser> = await authService.login(params);
        if (response) {
          const token = (response?.headers?.getAuthorization as authFunc)();
          localStorage.setItem("TOKEN-TL", token);
          this.user = response.data;
          return this.user;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async signup(params: IRegisterParams): Promise<void> {
      try {
        const response: AxiosResponse<IUser> = await authService.signup(params);
        this.user = response.data;
      } catch (error) {
        console.error(error); // TODO- WARNING MESSAGES
      }
    },

    logout() {
      this.user = null;
    },
  },
  getters: {
    userName: (state) => state.user?.name,
  },
});
