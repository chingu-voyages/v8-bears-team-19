// Mock API until we have the server running

const axios = {
    get: (path) => console.log('GET call to ' + path),
    put: (path) => console.log('PUT call to ' + path)
}

// Sample data

export const getRecipe = (id) => {
    // return axios.get(`/api/recipe/${id}`).then(res => res.data())
    axios.get(`/api/recipe/${id}`)
    return [ {id: 0, title: "Hot CheeseStake", likes: 5, author: 'Mr.SharpKnife'} ]
}

export const getRecipes = (ids) => {
    axios.get(`/api/recipe`, { ids: ids })
    return [
        {id: 0, title: "Hot CheeseStake", likes: 5, author: 'Mr.SharpKnife'},
        {id: 1, title: "FruitShake", likes: 15, author: 'Gordon Ramsay'},
        {id: 2, title: "Shakshuka", likes: 15, author: 'Mr.Shaky'},
        {id: 3, title: "Fruit Salad", likes: 5, author: 'Mr.SharpKnife'},
    ]
}


// Aside from title,
// we could also add to this call the ingredients, parent recipes, etc...
export const addRecipe = (title) => {
    axios.put(`/api/recipe/add`, { title: title })
    return '/api/recipe/add'
}

export const removeRecipe = (id) => {
    axios.get(`/api/recipe/${id}/remove`)
    return `/api/recipe/${id}/remove`
}

export const modifyRecipe = (id, newData) => {
    axios.get(`/api/recipe/${id}/modify`)
    return `/api/recipe/${id}/modify`
}

export const likeRecipe = (id) => {
    axios.get(`/api/recipe/${id}/like`)
    return `/api/recipe/${id}/like`
}

/*
    This API call is important to track each time a recipe has been shared.
 */
export const shareRecipe = (id) => {
    axios.get(`/api/recipe/${id}/share`)
    return `/api/recipe/${id}/share`
}

/*
    Forking a recipe means making a copy of an already existing recipe,
    give it a new name and share the whole tree of changes to track
    the history of the recipe and his branches
*/
export const forkRecipes = (id, newName) => {
    axios.get(`/api/recipe/${id}/fork`, { name: newName })
    return `/api/recipe/${id}/fork`
}