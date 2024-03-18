import { LoadElement } from "./elements";
import { setSearchResult } from "./setSearchResult";

export default function ( loadedState) {
    LoadElement.classList.toggle("hidden", !loadedState);
    loadedState && setSearchResult(null);
}