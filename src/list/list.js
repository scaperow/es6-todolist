import template from './list.html';
import './list.less';
import Component from '../component.js';

class List extends Component {

    constructor(element) {
        super(element, template);
        const textNode = this.selfNode.querySelector("input[type=\"text\"]");

        textNode.addEventListener('keydown', ($event) => {
            if ($event.keyCode === 13) {
                // 添加新的待办事项
                this.addTodo(textNode.value);
                textNode.value = '';
            }
        });

        this.list = ['提交代码', '打卡', '超市', 'LOL'];
        this.showTodo(this.list);

    }

    showTodo(list) {
        const htmls = list.map((item, index) => {
            return `
            <li> 
                <input e-index=${index} type="checkbox" />
                <span>${item}</span>
                <button e-index=${index} class="remove-button">删除</button>
            </li>
            `;
        });

        this.selfNode.querySelector('ul').innerHTML = htmls.join('');
        this.selfNode.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.addEventListener('change', ($event) => {
                if ($event.target.checked) {
                    const index = $event.target.getAttribute('e-index');

                    // 已完成
                    $event.target.parentElement.setAttribute('class', 'done');
                    setTimeout(() => {
                        $event.target.parentElement.remove();

                        this.list.splice(index, 1);
                    }, 1000);
                } else {
                    $event.target.parentElement.setAttribute('class', '');
                }
            });
        });
        this.selfNode.querySelectorAll('.remove-button').forEach((button) => {
            button.addEventListener('click', ($event) => {
                const index = $event.target.getAttribute('e-index');
                this.list.splice(index, 1);

                this.showTodo(this.list);
            });
        })

    }

    addTodo(context) {
        if (context) {
            this.list.push(context);
            this.showTodo(this.list);
        }
    }

    search(keyword) {
        let results = [];
        this.list.forEach((item) => {
            if (item.indexOf(keyword) >= 0) {
                results.push(item);
            }
        });

        this.showTodo(results);
    }


}

export default List;