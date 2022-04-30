<template>
  <div class="container">
    <h1>MANAGE VIDEOS</h1>
    <div 
      class="card"
      v-for="video in videos.allMedia" 
      :key="video.etag">
      <div class="card-header">
        <iframe
          height="100%"
          width="100%"
          :src="videoUrl(video.videoId)" allowfullscreen/>
      </div>
      <div class="card-body">
        <div class="row">
          <button class="deleteBtn" @click="deleteAlbum(video._id)">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '../Api';

export default {
  name: 'ManageVideo',
  data() {
    return {
      videos: []
    }
  },
  created () {
      let apiURL = `${url}/index/vids`;
      axios.get(apiURL).then((res) => {
      this.videos = res.data;
    });
  },
  methods: {
    emitVideo(video){
      this.$emit('photo', video)
    },
    deleteAlbum(video) {
      axios.delete(`${url}/index/${video}/photo`, { withCredentials: true })
      .then(res => {
        console.log("deletephoto server side response",res);
        this.$router.go()
      }).catch((error) => {
        if (error.response.data) {
          alert(`The delete was unsuccessfull \n status code : ${error.response.data} \n status text : ${error.response.statusText}`); // => the response payload }});
        }else {
            alert(`The delete was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`); // => the response payload }});
          }
      });
    },
    videoUrl(value) {
      return 'https://www.youtube.com/embed/'+value+'?modestbranding=0&showinfo=0&rel=0';
    },
  }
}
</script>

<style scoped>

.container {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

h1 {
  margin: 5vh 0;
  width: 100%;
}

.card {
  margin: 1vw;
  background-color: #fff;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 26vw;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.row {
  display: flex;
  flex-direction: row;
}

.deleteBtn {
  background-color: white;
  border: 2px solid rgba(255, 0, 0, 0.7);
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  color: rgb(247, 90, 62);
  padding: 0.5vh 0.8vw;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.3s;
}

.deleteBtn:hover {
  background-color: rgb(250, 57, 22);
  color: white;
}

</style>