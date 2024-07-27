<template>
  <ul class="list-group col-md-4">
    <VideoListItem v-for="video in videos" v-bind:video="video" :key="video.etag" @videoSelect="onVideoSelect"></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem'; //import video list item component
export default {
  name: 'VideoList', //name of component
  components: {
    VideoListItem //wire in as component
  },
  props: { //list of properties (data) we are expecting to receive from parent
    videos: Array, //prop and data type it is expecting
  },
  methods: {
    onVideoSelect (video) {
      this.$emit('videoSelect', video); //takes video from event emitted from videoList and emits vue specific event to app.vue
    }
  }
}
</script>

<style scoped>

</style>



<style>

</style>