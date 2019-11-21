export const authenticate = auth => {
  console.log(auth);
  if (auth) {
    localStorage.setItem('currentUser', auth);
  }
}

export const isLoggedIn = () => (
  localStorage.getItem('currentUser')
);

export const logout = () => {
  if (isLoggedIn) {
    localStorage.removeItem('currentUser');
  }
}