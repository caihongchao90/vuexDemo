<template>
  <span>count = {{ count }}，count1 = {{ count1 }}，</span>
  <!-- <span>countAlias = {{ countAlias }}</span> <br> -->
  <span>countPlusLocalState = {{ countPlusLocalState }}</span> <br>
  <button @click="plus">按钮</button>
  <button @click="getchildren">vuex子模块属性</button><br>
  <span>main_count = {{ main_count }}  main_count1 = {{ main_count1 }}</span>

</template>

<script>
import { mapState } from 'vuex'
export default{
  name:'App',
  data(){
    return{
      localCount:40,
    }
  },
  computed:
  mapState({
    //子组件属性访问
    main_count:state=>state.main.main_count,
    //子组件属性访问
    main_count1(){
      return this.$store.state.main.main_count
    },
    // 在组件中访问vuex状态的几种方法
    count1(){
      return this.$store.state.count
    },
    count: state => state.count,
    countAlias: 'count',
    //组件和vuex状态一起派生出某个值
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  // {
  //   //子组件属性访问
  //   main_count1(){
  //     return this.$store.state.main.main_count
  //   },
  //   // 在组件中访问vuex状态的几种方法
  //   count1(){
  //     return this.$store.state.count
  //   },
  //   //组件和vuex状态一起派生出某个值
  //   countPlusLocalState () {
  //     return this.$store.state.count + this.localCount
  //   }
  // },
  
  methods :{
    getchildren(){
      //这种方法修改，模块中名字相同的方法都会执行
      // console.log(this.$store.commit('increment',{
      //   amount:7
      // }))
      //访问 state
      console.log(this.$store.state['main']['main_count'])
      //访问 getter
      console.log("this.$store.getters.getMain_count()",this.$store.getters['main/getMain_count'](3))
      //访问 mutations
      this.$store.commit("main/main_increment",{
        amount:1
      })
      this.$store.commit({
        type:"main/main_increment",
        amount:1
      })
    },
    plus(){
      //actions异步操作触发
      this.$store.dispatch('incrementAsync',{
        amount: 1
      })
      //提交状态变更的两种方法
      this.$store.commit({
        type:'increment',
        amount:1
      })
      this.$store.commit("increment",{
        amount:1
      })
      //获取数据的方法
      console.log("this.$store.doneTodos",this.$store.getters.getTodoById(2));
      console.log("this.$store,this.$store.state.count",this.$store,this.$store.state.count)
    }
  }
}
</script>

<style scoped>
</style>
