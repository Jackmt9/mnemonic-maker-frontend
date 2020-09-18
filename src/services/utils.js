const BACKEND = "http://127.0.0.1:3001/";

export const fetchMnemonic = (phrase) => {
  return fetch(BACKEND + "mnemonic", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(phrase),
  }).then((r) => r.json());
};

export const fetchLogin = (user) => {
  return fetch(BACKEND + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((r) => r.json());
};
export const fetchRegister = (user) => {
  return fetch(BACKEND + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((r) => r.json());
};

export const fetchDeleteUser = (token) => {
  return fetch(BACKEND + "register", {
    method: "DELETE",
    headers: {
        Authorization: `Bearer + ${token}`,
    },
  }).then((r) => r.json());
};

// export const saveMnemonic = (phrase, token) => {
//   return fetch(BACKEND + "mnemonic", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer + ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(phrase),
//   }).then((r) => r.json());
// };
