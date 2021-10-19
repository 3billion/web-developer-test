import { createSlice } from "@reduxjs/toolkit";
import { actionIsLoading } from "../../redux/modules/isLoading";
import { animalApi } from "../../shared/api";

const animal = createSlice({
  name: "animal",
  initialState: {
    animal: [],
    like: [],
    dislike: [],
  },
  reducers: {
    actionSetUpdata: (state, action) => {
      state.animal = action.payload;
    },
    actionLikeClick: (state, action) => {
      const id = action.payload;
      const find = state.like.find((each) => each == id) ? true : false;
      if (find) {
        const newArr = state.like.filter((each) => each !== id);
        state.like = newArr;
        return;
      }
      state.like.push(id);
      const newArr = state.dislike.filter((each) => each !== id);
      state.dislike = newArr;
    },
    actionDislikeClick: (state, action) => {
      const id = action.payload;
      const find = state.dislike.find((each) => each == id) ? true : false;
      if (find) {
        const newArr = state.dislike.filter((each) => each !== id);
        state.dislike = newArr;
        return;
      }
      state.dislike.push(id);
      const newArr = state.like.filter((each) => each !== id);
      state.like = newArr;
    },
  },
});

export const actionGetData =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      dispatch(actionIsLoading());
      const getData = await animalApi.getAll();

      dispatch(actionSetUpdata(getData.data));
      dispatch(actionIsLoading());
    } catch (error) {
      window.alert(error.message);
      dispatch(actionIsLoading());
    }
  };

export const { actionSetUpdata, actionLikeClick, actionDislikeClick } =
  animal.actions;

export default animal;
