const clientID = "a4c271e80a7a44cb862b630c53527f5c";
const redirectURL = "http://localhost:3000/";
const scopes = ["user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",
"user-library-read",
"user-follow-read",
"user-library-modify"
]

export const loginURL = `https://accounts.spotify.com/authorize?client_id=${clientID}
&response_type=token&redirect_uri=${redirectURL}&scope=${scopes.join("%20")}
&show_dialog=true`;
