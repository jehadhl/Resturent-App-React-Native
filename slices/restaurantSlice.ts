import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  restaurant: any;
}

const initialState: CounterState = {
  restaurant: {
    id: null,
    title: null,
    imgUrl: null,
    rating: null,
    genre: null,
    address: null,
    description: null,
    dishes: null,
    lng: null,
    lat: null,
  },
};

export const resturantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setResturant } = resturantSlice.actions;

export const selectedRestaurant = (state: any) => state.restaurant.restaurant;

export default resturantSlice.reducer;
