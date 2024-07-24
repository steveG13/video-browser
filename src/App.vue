<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar'; //import searchbar component
export default { //declaring a component which can be registered and reused later
  name: 'App', //name of component
  components: { //list of all components used in this component
    SearchBar
  },
  data () {
    return {}
  },
  methods: {
    //references event.target.value - renamed as searchTerm, from onInput method on SearchBar.vue. The second argument of that function is passed in as the first argument of this function
    onTermChange(searchTerm) {
      console.log(searchTerm)
    }
  }
}
</script>
