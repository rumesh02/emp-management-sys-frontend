//save users to local storage
export function setUserToStorage(user) {
    localStorage.setItem("authUser", JSON.stringify(user));
}

//get user from local storage
export function getUserFromStorage() {
    const user = localStorage.getItem("authUser");
    return user ? JSON.parse(user) : null;
}

//remove user from local storage
export function removeUserFromStorage() {
    localStorage.removeItem("authUser");
}