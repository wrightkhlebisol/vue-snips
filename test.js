Vue.config.devtools = true;

Vue.component('wright-modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
    `,
    methods: {
        toggleModal(){
            
        }
    }

})

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
        name: 'Caleb'
    },
    methods: {
        
    },
    watchers: {

    },
    computed: {

    }
})