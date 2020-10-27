const BACKEND = "http://127.0.0.1:3001/";

export const fetchMnemonic = (phrase, bookmark, artist, order) => {
  if(!artist){
    artist = 'any'
  }
  return fetch(BACKEND + `query/${phrase}/${bookmark}/artist/${artist}/order/${order}`)
  .then(r => r.json())
}

export const loginUser = (user_params) => {
  console.log(`Logging in user ${user_params.email}...`)

  return fetch( BACKEND + 'users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user_params)
  })
  .then( r => {
    console.log(`Login fetch returned with status ${r.status}`)
    return r.json() 
  })
}

export const registerUser = (user_params) => {
  console.log(`Registering user ${user_params.email}...`)
  return fetch( BACKEND + 'users', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user_params)
  })
  .then(r => {
    console.log(`Register fetch returned with status ${r.status}`)
    return r.json()
  })
}