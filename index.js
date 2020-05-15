Vue.config.devtools = true;

Vue.component('wright-tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li class="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    mounted() {
        console.log(this.$children);
    },
})

Vue.component('wright-tab', {
    template: `
        <div>
            <slot></slot>
        </div>
    `,
})

Vue.component('wright-modal', {
    data(){
        
    },
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
            <wright-message title="Modal Head" body="Modal Body"></wright-message>
            </div>
        </div>
        <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
    </div>
    `,
    methods: {
    }

});

Vue.component('wright-message', {
    data(){
        return {
            hide: true
        }
    },
    props: ['title', 'body'],
    template: `
    <article class="message">
        <div class="message-header">
            <p>{{title}}</p>
            <button class="delete" @click="hideMessage" aria-label="delete"></button>
        </div>
        <div class="message-body" v-show="hide">
            {{body}}
        </div>
    </article>`,
    methods: {
        hideMessage(){
            this.hide = !this.hide;
        }
    }
})

new Vue({
    el: '#app',
    data: {
        showModal: false
    },
    methods: {
        
    },
    watchers: {

    },
    computed: {

    }
})