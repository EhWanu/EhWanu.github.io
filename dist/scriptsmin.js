let pokemonRepository=function(){let e=[],t="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(t){"object"==typeof t&&"name"in t?e.push(t):console.log("pokemon is not correct")}function o(e){pokemonRepository.loadDetails(e).then(function(){!function(e){let t=$(".modal-body"),n=$(".modal-title");$("modal-header"),$("#pokemon-id"),n.empty(),t.empty();let o=document.createElement("p");o.innerText=`ID: ${e.id}`;let i=document.createElement("img");i.setAttribute("src",e.imageUrl),i.classList.add("pokepic");let a=document.createElement("p");a.innerText=`Height: ${e.height} units`;let l=document.createElement("p");l.innerText=`Type: ${e.types}`,n.append(e.name),t.append(o),t.append(i),t.append(a),t.append(l)}(e)})}return{add:n,getAll:function(){return e},addListItem:function(e){let t=document.querySelector(".list-group"),n=document.createElement("button");n.innerText=e.name,n.classList.add("text-capitalize"),n.classList.add("btn-light","btn-outline-secondary","btn-lg","btn-custom"),n.setAttribute("data-toggle","modal"),n.setAttribute("data-bs-name",e.name),n.setAttribute("data-target","#pokemonModal"),t.appendChild(n),n.addEventListener("click",function(t){o(e)})},loadList:function(){return fetch(t).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){n({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:function(e){let t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.other.dream_world.front_default,e.height=t.height,e.id=t.id,e.types=[],t.types.forEach(function(t){e.types.push(t.type.name)})}).catch(function(e){console.error(e)})},showDetails:o}}();function showLoadMessage(){let e=document.createElement("img");e.src="img/loading.gif",e.classList.add("load-message"),document.querySelector("body").appendChild(e)}function hideLoadMessage(){let e=document.querySelector("load-message");e.parentElement.removeChild(e)}function pokemonSearch(){var e,t,n;for(e=document.querySelector("#pokemon-search").value.toUpperCase(),t=document.getElementById("me").getElementsByTagName("button"),n=0;n<t.length;n++)(t[n].textContent||t[n].innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none"}pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})}),window.addEventListener("keydown",function(e){"13"==e.keyCode&&e.preventDefault()});