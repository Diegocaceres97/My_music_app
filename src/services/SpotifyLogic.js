export const getTokenFromURL = () =>{
    return window.location.hash
    //retorna la parte de un ancla URL a partir de la #
    .substring(1).split("&")
    //substring extrae el primer caracter en este caso e imprime
    //el resto de la cadena hasta el final
    .reduce((initial, item) =>{
        //#accessToken = clave&name=js
        //ejecuta una funcion reductora sobre cada elemento del array
       // y da como resultado un solo valor array dentro arrays
        let parts = item.split("=")
        //decodeURIComponent decodifica el sitio web
        initial[parts[0]] = decodeURIComponent(parts[1])
        //en este caso del primer array
        return initial
    },{})
}


const clientID = "a4c271e80a7a44cb862b630c53527f5c";
const redirectURL = "http://localhost:3000/principal";
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
