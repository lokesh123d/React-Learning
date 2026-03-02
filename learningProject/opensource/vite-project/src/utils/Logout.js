

function logout(){
    localStorage.removeItem('token');
    return true;
};

export default logout;