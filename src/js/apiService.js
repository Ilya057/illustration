import refs from './refs'

const apiKey = "18623535-3dfe12338cff51b53bb378ee3";

export default {
  _searchQ: '',
  getFetch() {
    let url = `https://pixabay.com/api/videos/?key=${apiKey}&q=${this._searchQ}`;
  return fetch(url).then(res => res.json())
    },
    get search(){
      return this._searchQ
    },
    set search(newSearch) {
      this._search = newSearch
    }

}