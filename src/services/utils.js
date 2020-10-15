const BACKEND = "http://127.0.0.1:3001/";

export const fetchMnemonic = (phrase, bookmark) => {
  return fetch(BACKEND + `query/${phrase}/${bookmark}`)
  .then(r => r.json())
}
