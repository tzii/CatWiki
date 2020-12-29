const url = "https://cat-wikii.herokuapp.com/";

export function getTopSearched() {
  return fetch(url + "api/topsearched").then((res) => res.json());
}

export function getBreed(id: string) {
  return fetch(url + "api/breeds/" + id).then((res) => res.json());
}

export function getAllBreeds() {
  return fetch(url + "api/breeds").then((res) => res.json());
}
