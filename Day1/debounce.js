
// Debounce function
function debounce(callback, delay) 
{
    let timer;

    return function (...args) {

        
        clearTimeout(timer);

    
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}


function search(query) {
    console.log("Searching for:", query);
}


const debouncedSearch = debounce(search, 1000);


debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Jav");
debouncedSearch("Java");
debouncedSearch("Javas");
debouncedSearch("Javasc");
debouncedSearch("Javascript");