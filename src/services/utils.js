const BACKEND = "http://127.0.0.1:3001/";

export const fetchMnemonic = (phrase) => {
  return fetch(BACKEND + `query/${phrase}`)
  .then(r => r.json())
}