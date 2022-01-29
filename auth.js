const register = function(username) {

    console.log(`User ${username} has been register`);
}

const login = function(username) {
     console.log(`User ${username} has been login`);
}

//if more than one function has to exports just create object of all function
// then export as object  
module.exports = {
    register: register,
    login: login
};