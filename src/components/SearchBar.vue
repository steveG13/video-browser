<template>
    <div>
        <input @input="onInput"/>
<!--      @input refers to input event which is defined in methods-->
    </div>
</template>

<script>
export default { //declaring a component which can be registered and reused later (used in app.vue via import)
    name: 'SearchBar', //name of component
  data () {
    return {}
  },
    methods: {
      onInput: function (event) {
        this.$emit('termChange', event.target.value); //emit event when search term changes
      }
    }
};
</script>

<style>
</style>