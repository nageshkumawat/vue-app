<template>
    <div>
        <RouterLink to="/logout" v-if="isLoggedIn"  class="btn btn-danger" >Logout</RouterLink>
        <!-- <RouterLink to="/login"  v-else class="btn btn-success">Login</RouterLink> -->
        <button @click="login" v-else class="btn btn-success">Login</button>
    </div>
</template>
<script>
// import { useCounterStore } from '@/stores/counter'
import { useStore } from '@/stores/isAuth'
// alert(localStorage.getItem('user'))
export default {
    data() {
        return {
            isLoggedIn:useStore().isLoggedIn,
            user:useStore().user
        } 
    },
    methods:{
        login(){
            let nUser = {user_name:'nagesh',password:'Nagesh@123'}
            localStorage.setItem('user',JSON.stringify(nUser))
            // console.log(localStorage.getItem('user'))
            useStore().setUser(nUser)
            // this.$router.push({path:'/login'})
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>