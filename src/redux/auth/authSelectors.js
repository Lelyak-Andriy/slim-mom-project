const isAuthenticated = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.username;

const getUserId = state => state.auth.user.id;

const getUserData = state => state.auth.user.userData;

// eslint-disable-next-line
export default { isAuthenticated, getUserName, getUserId, getUserData};
