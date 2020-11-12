
const BACKEND = "http://127.0.0.1:3001/";

export const fetchMnemonic = (phrase, current_song_index, artist, order) => {
  console.log('fetching', artist)
  if(!artist){
    artist = 'any'
  }
  if(artist == "perfect"){
    console.log('perfect')
    return fetch(
      BACKEND +
        `query/${phrase}/${current_song_index}/artist/${artist}/order/${order}/perfect`
    ).then((r) =>  {r.json()
    console.log(r)
    }
    );
  }
  else{
  return fetch(BACKEND + `query/${phrase}/${current_song_index}/artist/${artist}/order/${order}`)
  .then(r => r.json())
  }
}

export const loginUser = (user_params) => {
  console.log(`Logging in user ${user_params.email}...`)
  return fetch( BACKEND + 'login', {
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

export const stayLoggedIn = () => {
  return fetch( BACKEND + 'stay_logged_in', {
    headers: {
      "Authorization": localStorage.token
    }
  })
  .then(r => r.json())
}

export const saveBookmark = (playlist_id, song_id, input_phrase, matching_phrase)=>{
  let bookmark_params = {
    playlist_id: playlist_id,
    song_id: song_id,
    input_phrase: input_phrase,
    matching_phrase: matching_phrase
  }
  
    console.log("bookmark params:",bookmark_params)
      return fetch(BACKEND + "bookmarks", {
        method: "POST",
        headers: {
          "Authorization": localStorage.token,
          "content-type": "application/json"
        },
        body: JSON.stringify(bookmark_params),
      }).then((r) => {
        console.log('params', r)
        console.log(`Register fetch returned with status ${r.status}`);
        return r.json();
      });
}

export const getPlaylist = (playlist_id) => {
  return fetch( BACKEND + `playlists/${playlist_id}`, {
    headers: {
      "Authorization": localStorage.token
    }
  })
  .then(r => r.json())
}
export const getSong = (song_id) => {
  console.log('getting song', song_id)
  return fetch( BACKEND + `songs/${song_id}`)
  .then(r => r.json())
}

export const getYoutubeUrl = (full_title) => {
  console.log("getting song", full_title);
  return fetch(BACKEND + `tune_to_tube/${full_title}`)
  .then(r => r.json());
};

export const createPlaylist = (playlist_params)=>{
console.log(playlist_params)
return fetch(BACKEND + 'playlists', {
        method: "POST",
        headers: {
          "Authorization": localStorage.token,
          "content-type": "application/json"
        },
        body: JSON.stringify(playlist_params),
      }).then((r) => {
        console.log(`Register fetch returned with status ${r.status}`);
        return r.json();
      });
}