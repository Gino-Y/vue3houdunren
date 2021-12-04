const app = Vue.createApp({
    data(){
        return{
            name:'Gino',
            num:1,
            error:''
            // event:'mouseenter'
        }
    },
    watch:{
        num(newValue, oldValue){
            console.log(newValue, oldValue)
            this.error = newValue == 0 ? '不能小于0' : newValue == 10 ? '不能超过10' : ''
        },
    },
    methods: {
        add(event){
            if(this.num <10) this.num++
        },
        desc(event){
            if(this.num > 0) this.num--
        },
        go(event,title){
            // event.preventDefault()
            alert(title)
            
        },
    
    },
})

const vm =  app.mount('#app')
