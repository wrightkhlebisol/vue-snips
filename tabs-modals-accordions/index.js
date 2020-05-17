Vue.component('wright-tabs', {
    data(){
        return {
            tabs: []
        }
    },
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                    <a @click="selectTab(tab)" :href="tab.href">{{tab.name}}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
                // console.log(tab.selected)
            });
            // console.log(tab.selected = true)
        }
    }
})

Vue.component('wright-tab', {
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,
    props: {
        name: {required: true},
        selected: {default: false}
    },
    data(){
        return {
            isActive : this.selected
        }
    },
    computed: {
        href(){
            return '#' + this.name.split(' ').join('-').toLowerCase();
        }
    }
})

Vue.component('wright-modal', {
    data(){
        return {}
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