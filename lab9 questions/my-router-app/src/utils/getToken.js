
const getToken = () => {
    let value = localStorage.getItem('token');

    if (value == null) {
        return false;
    } else {
        return true;
    }
}

export default getToken;