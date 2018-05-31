export default class Component {
    constructor(tag, template) {
        this.tag = tag;
        this.eventHandlers = {};
        this.render(template);
    }

    render(template) {
        if (!this.selfNode) {
            this.selfNode = document.createElement('div');
            this.selfNode.innerHTML = template;
        }

        this.tag.innerHTML = '';
        this.tag.appendChild(this.selfNode);
    }

    $on(eventName, callback) {
        if (!this.eventHandlers.hasOwnProperty(eventName)) {
            this.eventHandlers[eventName] = [];
        }

        this.eventHandlers[eventName].push(callback);
    }

    $emit(eventName, params) {
        if (this.eventHandlers.hasOwnProperty(eventName)) {
            this.eventHandlers[eventName].forEach((callback) => {
                callback(params);
            });
        }
    }

}