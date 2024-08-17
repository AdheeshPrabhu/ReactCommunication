export const checkIfLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("loggedInUser");
};
