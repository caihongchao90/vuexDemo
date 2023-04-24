const main = {
    namespaced: true,
    state:{
        main_count:0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: false }
          ]
    },
    mutations:{
        main_increment (state,payload) {
            state.main_count +=payload.amount
        },
    },
    getters:{
        getMain_count:state=>id=>{
            return state.todos.find(todo => todo.id === id)
        }
    }
}
export default main