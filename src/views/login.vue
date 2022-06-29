<template>
    <div>
        <button @click="resetUser" class="btn btn-warning">Reset</button>
        {{user}}
    </div>
</template>
<script>
import { useStore } from '../stores/isAuth'
export default {
    data(){
        return{
            user:localStorage.getItem('user')
        }
    },
    methods:{
        resetUser(){
            console.log('sdsds')
            useStore().setUser({})
            this.user = {}
            // console.log(useStore().user)
        }
    }
}

</script>