export function fetchBreeds() {
    return fetch("https://api.thecatapi.com/v1/breeds?api_key=live_FpNqr14ibuI6LbhtLTKWF3gfHUtTBhClGk1engkIBHBe6ltG25VfJpyrkvqzuXmO").then(
        (response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    );
}

export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_FpNqr14ibuI6LbhtLTKWF3gfHUtTBhClGk1engkIBHBe6ltG25VfJpyrkvqzuXmO`).then(
        (response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    );
}

