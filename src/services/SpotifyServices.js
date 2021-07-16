const Api = "https://api.spotify.com/v1";
const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
};
//Obtener los datos del usuario
export const getDataUser = async() => {

    const ApiRequest = await fetch(`${Api}/me`, {
        method: 'GET', headers: header
})
    const ApiRequestPromise =await ApiRequest.json();
    return ApiRequestPromise;
}

export const DataUser=()=> getDataUser();

//Obtener una PlayList especifica
const  getPlayList = async () => {
    
    const ApiRequest = await fetch(`${Api}/playlists/1hX0yEOMQE9v2G8xt3hp7w/tracks`, {
            method: 'GET', headers: header
    })
        const ApiRequestPromise = await ApiRequest.json();
        let APItemsList = ApiRequestPromise.items.map(item => item.track);
        return APItemsList;
}

export const PlayList = () => getPlayList();

//Obtener la lista de favoritos del usuario
const  getSavedTracks = async () => {
    
    const ApiRequest = await fetch(`${Api}/me/tracks`, {
            method: 'GET', headers: header
    })
        const ApiRequestPromise = await ApiRequest.json();
        let APItemsList = ApiRequestPromise.items.map(item => item.track);
        return APItemsList;
}

export const FavoriteTracks = () => getSavedTracks();