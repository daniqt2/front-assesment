import { AxiosResponse } from "axios";
import { IRestaurant } from "@/interfaces/Restaurant.interface";
import httpService from "./api.service";

const RESTAURANT_URL = "restaurant/";

export interface IListParams {
  limit?: number;
  page?: number;
}

interface IRestaurantResponse {
  restaurantList: IRestaurant[];
  total: number;
}

const restaurantService = {
  list(params?: IListParams): Promise<AxiosResponse<IRestaurantResponse>> {
    return httpService.get<IRestaurantResponse>(`${RESTAURANT_URL}list`, {
      params: params ?? { limit: 10, page: 1 },
    });
  },

  detail(id: string): Promise<AxiosResponse<IRestaurant>> {
    return httpService.get<IRestaurant>(`${RESTAURANT_URL}detail/${id}`);
  },

  create(
    restaurant: Partial<IRestaurant>
  ): Promise<AxiosResponse<IRestaurant>> {
    return httpService.post<IRestaurant>(
      `${RESTAURANT_URL}create/`,
      restaurant
    );
  },

  update(
    id: string,
    restaurant: Partial<IRestaurant>
  ): Promise<AxiosResponse<IRestaurant>> {
    return httpService.put<IRestaurant>(`${RESTAURANT_URL}${id}`, restaurant);
  },

  delete(id: string): Promise<AxiosResponse<void>> {
    return httpService.delete<void>(`${RESTAURANT_URL}${id}`);
  },

  createComment(
    id: string,
    params: { comment: string; rating: number }
  ): Promise<AxiosResponse<void>> {
    return httpService.post<void>(`${RESTAURANT_URL}${id}/comment`, params);
  },
};

export default restaurantService;
