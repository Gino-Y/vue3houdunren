const app = Vue.createApp({
    data(){
        return{
            name:'Gino',
            num:1,
            error:''
            // event:'mouseenter'
        }
    },
    methods: {
        add(event){
            this.error = ''
            if(this.num <10){
                this.num++
            }else{
                this.error = '不能超过10'
            }
        },
        desc(event){
            this.error = ''
            if(this.num > 0){
                this.num--
            }else{
                this.error = '不能小于0'
            }
        },
        go(event,title){
            // event.preventDefault()
            alert(title)
            
        },
    
    },
})

const vm =  app.mount('#app')
