export const getDataUser = async() => {

    const ApiRequest = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
})
    const ApiRequestPromise =await ApiRequest.json();
    return ApiRequestPromise;
}

export const DataUser=()=> getDataUser();