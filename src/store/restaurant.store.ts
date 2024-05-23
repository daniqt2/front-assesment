import restaurantService, { IListParams } from "../services/restaurant.service";

import { IRestaurant } from "@/interfaces/Restaurant.interface";
import { defineStore } from "pinia";

interface RestaurantState {
  restaurants: IRestaurant[];
  selectedRestaurant: IRestaurant | null;
  totalRestaurants: number;
  pagination: { page: number; limit: number };
}

export const useRestaurantStore = defineStore("restaurant", {
  state: (): RestaurantState => ({
    restaurants: [],
    selectedRestaurant: null,
    totalRestaurants: 0,
    pagination: { page: 1, limit: 10 },
  }),
  persist: {
    enabled: true,
  },
  actions: {
    async getRestaurants(params?: IListParams) {
      try {
        if (this.restaurants.length && params?.page === this.pagination.page)
          return;
        const response = await restaurantService.list(params);
        this.pagination.page = params?.page || 1;
        this.restaurants.push(...response.data.restaurantList);
        this.totalRestaurants = response.data.total;
      } catch (error) {
        console.error(error);
      }
    },

    async getRestaurant(id: string) {
      try {
        const response = await restaurantService.detail(id);
        this.selectedRestaurant = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async createRestaurant(restaurant: Partial<IRestaurant>) {
      try {
        const response = await restaurantService.create(restaurant);
        this.restaurants.push(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
    },

    async updateRestaurant(id: string, restaurant: Partial<IRestaurant>) {
      try {
        const response = await restaurantService.update(id, restaurant);
        const index = this.restaurants.findIndex((r) => r._id === id);
        if (index !== -1) {
          this.restaurants[index] = response.data;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteRestaurant(id: string) {
      try {
        await restaurantService.delete(id);
        this.restaurants = this.restaurants.filter((r) => r._id !== id);
      } catch (error) {
        console.error(error);
      }
    },

    async createComment(id: string, comment: string) {
      try {
        await restaurantService.createComment(id, comment);
        // TODO - update comments
      } catch (error) {
        console.error(error);
      }
    },

    clearSelected() {
      this.selectedRestaurant = null;
    },
  },
});
