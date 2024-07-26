<template>
  <ul>
    {{ videos.length }}
  </ul>
</template>

<script>
export default {
  name: 'VideoList', //name of component
  props: { //list of properties (data) we are expecting to receive from parent
    videos: Array //prop and data type it is expecting
  }
}
</script>



<style>

</style>