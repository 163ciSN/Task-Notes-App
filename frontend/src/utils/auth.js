/* ===========================
   Save Token
=========================== */

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

/* ===========================
   Get Token
=========================== */

export const getToken = () => {
  return localStorage.getItem("token");
};

/* ===========================
   Remove Token
=========================== */

export const logoutUser = () => {
  localStorage.removeItem("token");
};

/* ===========================
   Login Status
=========================== */

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};