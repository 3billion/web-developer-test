import { createSlice } from "@reduxjs/toolkit";

const animal = createSlice({
  name: "animal",
  initialState: {
    animal: [],
    like: [],
    dislike: [],
  },
  reducers: {},
});

export const {} = animal.actions;

export default animal;
