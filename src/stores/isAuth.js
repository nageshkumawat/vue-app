import { defineStore } from 'pinia'

export const useStore = defineStore({
    id:'isAuth',
    state:() =>{
        return {
            isLoggedIn:false,
            user:{}
        }
    },
    actions:{
        setData(val){
            this.isLoggedIn = val
        },
        setUser(val){
            this.user = val
        }
    }
}) 