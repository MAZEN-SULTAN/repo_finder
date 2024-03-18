import getMessage from "./getMessage";
import setmessage from "./setmessage";
import { setSearchResult } from "./setSearchResult";
import setLoadElement from "./setLoadElment";

const User_API = "http://api.github.com/search/users?q="


export const performSearch = (searchTrem, isUserSelected) => {
    getMessage() && setmessage("");
    const typeQuery = isUserSelected ? '+type:user' : '+type:org';

if (!searchTrem.trim()) {
    setmessage("No result please try again");
    return;
}
    setLoadElement(true);
    fetch (`${User_API}${searchTrem}${typeQuery}`)
    .then(result => result.json())
    .then (response => setSearchResult(response.items))
    .finally(() => setLoadElement(false));
}