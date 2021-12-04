Vue.createApp({
    data(){
        return{
            lessons: window.lessons,
        }
    },
    template:`
    <div>
    houdunren.com -
    {{title}}
    </div>`
}).mount('#app')