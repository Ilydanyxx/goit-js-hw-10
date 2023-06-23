import Notiflix from "notiflix";
import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";
const loader = document.querySelector(".loader")
const select = document.querySelector(".breed-select")
const catInfo = document.querySelector(".cat-info")
const error = document.querySelector(".error")


error.style.visibility = "hidden";
loader.setAttribute('style', 'width: 48px; height: 48px; border: 5px solid #FFF; border - bottom - color: transparent; border - radius: 50 %; display: inline - block; box - sizing: border - box; animation: rotation 1s linear infinite; @keyframes rotation { 0 % { transform: rotate(0deg); }   100 % { transform: rotate(360deg); } }' )
fetchBreeds()
    .then(breeds => {
        const options = breeds.map(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            
            return option;
            
        })

        console.log(options);
        select.append(...options)
        select.style.display = "block"
        loader.style.display = "none"
        new SlimSelect({
            select: ".breed-select",
        })
        
    })
    .catch(() => {
        Notiflix.Notify.info(
            "Oops! Something went wrong! Try reloading the page!"
        )
        loader.style.display = "none";
    });
    

select.addEventListener("change", () => {
    const breedId = select.value;
    const name = select.target;
    fetchCatByBreed(breedId)
        .then(breeds => {
            const url = breeds[0].url;
            const img = document.createElement('img');
            img.src = url;
            img.width = 300;
            const breedNameEl = document.createElement('h2');
            breedNameEl.textContent = breeds[0].breeds[0].name;
              const descriptionEl = document.createElement('p');
            descriptionEl.textContent = breeds[0].breeds[0].description;
             const temperamentEl = document.createElement('p');
            temperamentEl.textContent = breeds[0].breeds[0].temperament;
            catInfo.innerHTML = '';
             catInfo.appendChild(img);
            catInfo.appendChild(breedNameEl);
            catInfo.appendChild(descriptionEl);
            catInfo.appendChild(temperamentEl);
        })
        .catch(() => {
        Notiflix.Notify.info(
            "Oops! Something went wrong! Try reloading the page!"
        )
        loader.style.display = "none";
    });
        

})
