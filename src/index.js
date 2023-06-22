import axios from "axios";
import Notiflix from "notiflix";
axios.defaults.headers.common["x-api-key"] = "live_FpNqr14ibuI6LbhtLTKWF3gfHUtTBhClGk1engkIBHBe6ltG25VfJpyrkvqzuXmO";

import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";
const loader = document.querySelector(".loader")
const select = document.querySelector(".breed-select")
const catInfo = document.querySelector(".cat-info")
fetchBreeds()
    .then(breeds => {
        const options = breeds.map(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            
            return option;
            
        })
        console.log(options);
        options.forEach(option => {
            select.appendChild(option);
        });
        select.style.display = "block"
        loader.style.display = "none"
        new SlimSelect({
            select: ".breed-select",
        })
    })
    .catch(() => {
        Notiflix.Notify.info(
            "Oops"
        )
        loader.style.display = "none";
    });

select.addEventListener("change", () => {
    const breedId = select.id;
    fetchCatByBreed(breedId)
    .then(
    function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body}) => {
        return `<li>
          <img src=""
          <h2 class="name-option">${title}</h2>
          <p class="description">${id}</p>
          <p class="character">${body}</p>
        </li>`;
    })
    .join("");
            catInfo.innerHTML = markup;
    
        }
    )
})