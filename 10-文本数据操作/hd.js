const app = Vue.createApp({
    data(){
        return{
            name:'Gino',
            html:`<div style="color:red">houdunren.com</div>`
        }
    },
})

const vm =  app.mount('#app')

console.log(vm.$data.name)

//定时器
setTimeout(()=>{
    vm.$data.name='锦财'
}, 3000)