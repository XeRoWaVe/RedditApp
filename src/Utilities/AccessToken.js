const client_id = '';
const redirect_url = 'http://localhost:5173/'
const randomString = 'GOLIATHONLINE'
let accessToken;

const getAccessToken = () => {
    if (accessToken) {
        return accessToken;
    }

    
}


window.location.href = `https://www.reddit.com/api/v1/authorize?client_id=${client_id}&response_type=code&
state=${randomString}&redirect_uri=${redirect_url}&duration=360000&scope=SCOPE_STRING`