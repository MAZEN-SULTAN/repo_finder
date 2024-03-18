
import {searchInput , cardElement, buttonElement,UserInput} from "./scripts/elements";
import { performSearch } from "./scripts/performSearch";
import setmessage from "./scripts/setmessage";
import getMessage from "./scripts/getMessage";
import { setSearchResult} from "./scripts/setSearchResult";


buttonElement.addEventListener('click', (e) => {
    e.preventDefault();
    performSearch(searchInput.value,UserInput.checked);
})