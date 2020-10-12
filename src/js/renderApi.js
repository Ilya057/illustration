import refs from "./refs.js";
import fetch from "./fetch.js";
import apiService from "./apiService";
import template from "../template/template.hbs";
import debounce from "lodash.debounce";
refs.userInput.addEventListener(
  "input",
  debounce(event => {
    event.preventDefault();
    apiService._searchQ = event.target.value;
    refs.galleryList.innerHTML = '';
    // console.log(event.target.value);
    renderApi();
  }, 1000));

  function renderApi() {
    apiService.getFetch().then((data) => render(data.hits));
  }

console.log(refs.data);
function render(data) {
  const item = template(data);
  refs.galleryList.insertAdjacentHTML("beforebegin", item);
}

