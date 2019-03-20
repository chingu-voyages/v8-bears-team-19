// Mock API until we have the server running
import axios from 'axios';

const API_URL = 'http://localhost:8080';

// Sample data

export const getRecipe = (id) => {
    // return axios.get(`/api/recipe/${id}`).then(res => res.data())
    axios.get(API_URL + `/api/recipe/${id}`);
    return [ {id: 0, title: "Hot CheeseStake", likes: 5, author: 'Mr.SharpKnife'} ];
};

export const getRecipes = (ids) => {
    axios.get(API_URL + `/api/recipe`, { ids: ids });
    return [
        {id: 0, title: "Hot CheeseStake", likes: 5, author: 'Mr.SharpKnife'},
        {id: 1, title: "FruitShake", likes: 15, author: 'Gordon Ramsay'},
        {id: 2, title: "Shakshuka", likes: 15, author: 'Mr.Shaky'},
        {id: 3, title: "Fruit Salad", likes: 5, author: 'Mr.SharpKnife'},
    ];
};


// Aside from title,
// we could also add to this call the ingredients, parent recipes, etc...
export const addRecipe = (title, description, author) => {
    console.warn('TODO: remove author from addRecipe API call');
    return axios.post(API_URL + `/api/recipe/add`, { title, description, author });
};

export const removeRecipe = (id) => {
    axios.delete(API_URL + `/api/recipe/${id}/remove`);
    return API_URL + `/api/recipe/${id}/remove`;
};

export const modifyRecipe = (id, newData) => {
    axios.put(API_URL + `/api/recipe/${id}`);
    return API_URL + `/api/recipe/${id}`;
};

export const likeRecipe = (id) => {
    axios.post(API_URL + `/api/recipe/${id}/like`);
    return API_URL + `/api/recipe/${id}/like`;
};

/*
    This API call is important to track each time a recipe has been shared.
 */
export const shareRecipe = (id) => {
    axios.get(API_URL + `/api/recipe/${id}/share`);
    return API_URL + `/api/recipe/${id}/share`;
};

/*
    Forking a recipe means making a copy of an already existing recipe,
    give it a new name and share the whole tree of changes to track
    the history of the recipe and his branches
*/
export const forkRecipes = (id, newName) => {
    axios.post(API_URL + `/api/recipe/${id}/fork`, { name: newName });
    return API_URL + `/api/recipe/${id}/fork`;
};