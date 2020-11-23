
const BACKEND = "http://127.0.0.1:3001/";

export const fetchMnemonic = (phrase, current_song_index, artist, order) => {
  if(!artist){
    artist = 'any'
  }
  return fetch(BACKEND + `query/${phrase}/${current_song_index}/artist/${artist}/order/${order}`)
  .then(r => {
    console.log(`fetchMnemonic fetch returned with status ${r.status}`)
    return r.json()
  })
}

export const loginUser = (user_params) => {
  console.log(`Logging in user ${user_params.email}...`)
  return fetch( BACKEND + 'login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user_params)
  })
  .then( r => {
    console.log(`loginUser fetch returned with status ${r.status}`)
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
    console.log(`registerUser fetch returned with status ${r.status}`)
    return r.json()
  })
}

export const stayLoggedIn = () => {
  return fetch( BACKEND + 'stay_logged_in', {
    headers: {
      "Authorization": localStorage.token
    }
  })
  .then(r => {
    console.log(`stayLoggedIn fetch returned with status ${r.status}`)
    return r.json()
  })
}

export const saveBookmark = (playlist_id, song_id, input_phrase, matching_phrase, youtube_id)=>{
  
  let bookmark_params = {
    playlist_id: playlist_id,
    song_id: song_id,
    input_phrase: input_phrase,
    matching_phrase: matching_phrase,
    youtube_id: youtube_id
  }
  return fetch(BACKEND + "bookmarks", {
    method: "POST",
    headers: {
      "Authorization": localStorage.token,
      "content-type": "application/json"
    },
    body: JSON.stringify(bookmark_params),
  })
  .then((r) => {
    console.log(`saveBookmark fetch returned with status ${r.status}`)
    return r.json();
  });
}

export const getPlaylist = (playlist_id) => {
  return fetch( BACKEND + `playlists/${playlist_id}`, {
    headers: {
      "Authorization": localStorage.token
    }
  })
  .then(r => {
    console.log(`getPlaylist fetch returned with status ${r.status}`);
    return r.json()
  })
}
export const getSong = (song_id) => {
  return fetch( BACKEND + `songs/${song_id}`)
  .then(r => {
    console.log(`getSong fetch returned with status ${r.status}`);
    return r.json()
  })
}

export const createPlaylist = (playlist_params)=>{
  return fetch(BACKEND + 'playlists', {
    method: "POST",
    headers: {
      "Authorization": localStorage.token,
      "content-type": "application/json"
    },
    body: JSON.stringify(playlist_params),
  })
  .then((r) => {
  console.log(`createPlaylist fetch returned with status ${r.status}`);
  return r.json();
  });
}

export const editPlaylist = (playlist_params, playlist_id) =>{
  return fetch(BACKEND + `playlists/${playlist_id}`, {
    method: "PUT",
    headers: {
      Authorization: localStorage.token,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      playlist_id: playlist_id,
      playlist_params: playlist_params}),
  }).then((response) => {
    console.log(`updated playlist with a status of${response.status}`);
    return response.json()
  });
}

export const deleteBookmark = (bookmark_id)=>{
  return fetch(BACKEND + `bookmarks/${bookmark_id}`, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.token,
    },
  })
  .then(r => r.json())
}

export const deletePlaylist = (playlist_id)=>{
  return fetch(BACKEND + `playlists/${playlist_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.token
    }
  })
  .then(r => r.json())
}

export const getAllArtists = () => {
  return fetch(BACKEND + 'artists')
  .then(r => r.json())
}