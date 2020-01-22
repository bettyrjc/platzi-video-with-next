export const setFavorite = payload => ({
  type: 'SET_FAVORITE', 
  payload
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload
})

export const loginRequest = (payload, history) => ({
  type: 'LOGIN_REQUEST',
  payload,
}
);
export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload
})
export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload
})
export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload
})
export const searchVideo = payload => ({
  type: 'SEARCH_VIDEO',
  payload
})