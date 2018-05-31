import template from './search-bar.html';
import './search-bar.less';
import Component from '../component.js';

class SearchBar extends Component {

    constructor(element) {
        super(element, template);

        this.selfNode.querySelector(".search-button").addEventListener('keyup', ($event, b) => {
            this.$emit('search', {
                keyword: this.selfNode.querySelector(".search-button").value
            });
        });

    }
}

export default SearchBar;