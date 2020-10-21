const BACKEND = "http://127.0.0.1:3001/";

export const fetchMnemonic = (phrase, bookmark, artist, order) => {
  if(!artist){
    artist = 'any'
  }
  return fetch(BACKEND + `query/${phrase}/${bookmark}/artist/${artist}/order/${order}`)
  .then(r => r.json())
}
