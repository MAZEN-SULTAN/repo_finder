import { cardElement } from "./elements";

export const setSearchResult = (data) => {
    let result = "";

    if (data?.length === 0) {
        result = "<p> No Data Found</p>"
    }
    else if(data === null) {
         result="";
    } else if (data.length) {
 data.map (item => {
    result +=`
<article class="card">
<img class="img" loading="lazy" src="${item.avatar_url}"/>
<h2 class="name">${item.login} </h2>
</article>
`
 });
}

 cardElement.innerHTML = result;
};