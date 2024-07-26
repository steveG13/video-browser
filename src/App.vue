<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList v-bind:videos="videos"></VideoList>
    </div>
</template>

<script>
import axios from 'axios'; //import axios library
import SearchBar from './components/SearchBar'; //import searchbar component
import VideoList from './components/VideoList'; //import videoList component

// eslint-disable-next-line no-unused-vars
const API_KEY = 'AIzaSyC6fMOxJO_Wlz1Fb7Vl-dL9fahV8EF4E3k'; //create new variable for API key
export default { //declaring a component which can be registered and reused later
  name: 'App', //name of component
  components: { //list of all components used in this component
    VideoList,
    SearchBar
  },

  data() { //function to return data object
    return {
      videos: [], //list of videos
    };
  },

  methods: {
    //references event.target.value - renamed as searchTerm, from onInput method on SearchBar.vue. The second argument of that function is passed in as the first argument of this function
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', { //make call to axios youtube api
        params: //add params about our request
            {
              key: API_KEY, //api password
              type: 'video', //searching youtube api for video only
              part: 'snippet', //tells api what type of info we want to get back - snippet just returns small piece of info
              q: searchTerm //term we are searching api with (q is short for query)
            }
      }).then(response => {
        this.videos = response.data.items;//update videos list based on search
      });
    }
  }
}
</script>
