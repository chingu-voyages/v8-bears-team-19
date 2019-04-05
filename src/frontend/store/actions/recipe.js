import {
  GET_RECIPE,
  GET_RECIPES,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILED,
  REMOVE_RECIPE,
  MODIFY_RECIPE,
  LIKE_RECIPE,
  SHARE_RECIPE,
  FORK_RECIPE,
} from '../../constants';

import * as API from '../../api';

// We structure the action like this so we can make async calls thanks to ReactThunk
export const getRecipe = (id) => (dispatch) => {
  const result = API.getRecipe(id);
  dispatch({
    type: GET_RECIPE,
    payload: result
  });
  /* Once we use promises, we can do this:

  API.getRecipe(id).then(res => {
    dispatch({
      type: GET_RECIPE,
      payload: res.data()
    });
  })

  */
};

export const getRecipes = (ids) => (dispatch) => {
  const result = API.getRecipes(ids);
  dispatch({
    type: GET_RECIPES,
    payload: result
  });
};

export const addRecipe = (title, description, author) => (dispatch) => {
  API.addRecipe(title, description, author)
    .then(res => {
      dispatch({
        type: ADD_RECIPE_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_RECIPE_FAILED,
        payload: err
      });
    });
};

export const removeRecipe = (id) => (dispatch) => {
  API.removeRecipe(id);
  dispatch({
    type: REMOVE_RECIPE,
    payload: id
  });
};

export const modifyRecipe = (id, newData) => (dispatch) => {
  API.modifyRecipe(id, newData);
  dispatch({
    type: MODIFY_RECIPE,
    payload: { id, newData }
  });
};

export const likeRecipe = (id) => (dispatch) => {
  API.likeRecipe(id);
  dispatch({
    type: LIKE_RECIPE,
    payload: id
  });
};

export const shareRecipe = (id) => (dispatch) => {
  API.shareRecipe(id);
  dispatch({
    type: SHARE_RECIPE,
    payload: id
  });
};

export const forkRecipes = (id, newName) => (dispatch) => {
  API.forkRecipes(id, newName);
  dispatch({
    type: FORK_RECIPE,
    payload: { id, newName }
  });
};