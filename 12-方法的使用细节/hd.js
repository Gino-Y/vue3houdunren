const app = Vue.createApp({
    data(){
        return{
            name:'Gino',
            id:'hd',
            // id:null,
            // di:undefined
            n:1,
        }
    },
})

const vm =  app.mount('#app')

setTimeout(()=>{
    vm.id = 'houdunren'
}, 2000)

