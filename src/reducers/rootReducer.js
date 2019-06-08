const initState = {
  posts: [
    {id: 1 , title: 'Lorem ipsum.' , body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quibusdam aliquam.'},
    {id: 2 , title: 'Lorem ipsum.' , body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quibusdam aliquam.'},
    {id: 3 , title: 'Lorem ipsum.' , body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quibusdam aliquam.'}
  ]
}

const rootReducer = (state = initState , action) => {
  if(action.type === "DELETE_POST"){
    let newpost = state.posts.filter(post => {
      return post.id !== action.id
    });
    return {
      ...state,
      posts: newpost
    }
  }
  return state;
}

export default rootReducer;
