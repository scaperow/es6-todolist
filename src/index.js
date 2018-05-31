
import SearchBar from './search-bar/search-bar.js';
import List from './list/list.js';
import template from './index.html';
import style from './app.less';

document.getElementById('app').innerHTML = template;

const searchBarTag = document.querySelector('.search-bar');
const listTag = document.querySelector('.list');
const mainSearchBar = new SearchBar(searchBarTag);
const list = new List(listTag);
mainSearchBar.$on('search', (params) => {
   list.search(params.keyword);
});
