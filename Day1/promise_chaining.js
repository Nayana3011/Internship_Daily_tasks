function login() 
{
    return new Promise((resolve) => {setTimeout(() => {console.log("User logged in");resolve();}, 1000);});
}

function getProfile() 
{
    return new Promise((resolve) => {setTimeout(() => {console.log("Profile loaded");resolve();}, 1000);});
}

function getMessages()
{
    return new Promise((resolve) => {setTimeout(() => {console.log("Messages are loaded");resolve();}, 1000);});
}

// Function for Promise Chaining
login()
    .then(getProfile)
    .then(getMessages)
    .then(() => {console.log("All tasks are completed!");})
    .catch((error) => {console.log("Error:", error);});