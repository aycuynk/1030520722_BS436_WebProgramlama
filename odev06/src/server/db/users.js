const users = new Map();


getUser = (id) => users.get(id);

verifyUser = (id, password) => {

    const user = getUser(id);

    if(!user){
        return false;
    }

    return user.password === password;
}

createUser = (id, password) => {

    if(getUser(id)){
        return false;
    }

    const user = {
        id: id,
        password: password,
        victories: 0,
        defeats: 0
    };

    users.set(id, user);
    return true;
}

resetAllUsers = () => users.clear();

reportEndOfGame = (userId, isVictory) => {

    const user = getUser(userId);
    if(! user){
        throw "Invalid userId: " + userId;
    }

    if(isVictory) {
        user.victories++;
    } else {
        user.defeats++;
    }
}

module.exports = {getUser, verifyUser, createUser, resetAllUsers, reportEndOfGame};
