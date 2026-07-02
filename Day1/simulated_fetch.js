function fetchUser() {

    return new Promise((resolve) => {

        console.log("Fetching user data...");

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Rahul",
                role: "Developer"
            });}, 2000);

    });

}

fetchUser()
    .then((user) => {console.log("User received:");console.log(user);})
    .catch((error) => {console.log(error);});