export interface LatLng {
  lat: number;
  lng: number;
}

export interface IReview {
  owner: {
    name: string;
  };
  comment: string;
  rating: number;
}

export interface IRestaurant {
  _id: string;
  name: string;
  owner: string;
  address: string;
  latlng: LatLng;
  image: string;
  reviews: IReview[];
  createdAt: string;
  updatedAt: string;
  avgRating: number;
  description?: string;
}
