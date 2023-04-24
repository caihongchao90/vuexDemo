import Vuex from 'vuex';

import main from "./module/main.js"
// 创建一个新的 store 实例
const store = new Vuex.Store({
    namespaced: true,
    state:{
        count:0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
          ]
    },
    mutations:{
        increment (state,payload) {
            state.count +=payload.amount
        },
    },
    getters: {
        getTodoById:(state)=>(id)=> {
            return state.todos.find(todo => todo.id === id)
        }
    },
    actions:{
        incrementAsync ({ commit },payload) {
            setTimeout(() => {
              commit('increment',payload)
            }, 1000)
          }
    },
    modules:{
        main,
    },
})

export default store;
