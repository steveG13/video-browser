<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" v-bind:src="thumbnailUrl"/>
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>

</template>

<script>
export default {
  name: 'VideoListItem', //name of component
  props: { //get data from other component
    video: {} //get video data from videoList
  },
  computed: { //put thumbnail URL into a variable to use in template
    thumbnailUrl () {
      return this.video.snippet.thumbnails.default.url; //this path can be found in dev tools by navigating to thumbnail
    },
  },
  methods: {
    onVideoSelect () {
      this.$emit('videoSelect', this.video); //emits vue specific event to videoList
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}


</style>