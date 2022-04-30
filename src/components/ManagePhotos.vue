<template>
  <div class="container">
    <h1>MANAGE PHOTOS</h1>
    <div 
      class="card"
      v-for="photo in images.allMedia" 
      :key="photo.etag">
      <div class="card-header">
        <img 
          :src="photo.image"
          :alt="photo._id"
          :data-original="photo._id" />
      </div>
      <div class="card-body">
        <span class=""><strong>PHOTO TITLE</strong>&#xa0;&#xa0;: &#xa0;{{photo.name}}</span>
        <p>
          PHOTO DESCRIPTION : {{photo.description}}
        </p>
        <div class="row">
          <button class="editBtn" @click="emitPhoto(photo), edit()">EDIT</button>
          <button class="deleteBtn" @click="deletePhoto(photo)">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '../Api';

export default {
  name: 'ManagePhotos',
  data() {
    return {
      images: [],
      imagesArray: null,
    }
  },
  created () {
      let apiURL = `${url}/index/imgs`;
      axios.get(apiURL).then((res) => {
      this.images = res.data;
    });
  },
  methods: {
    emitPhoto(photo){
      this.$emit('photo', photo)
    },
    edit() {
      this.$emit('editPhoto');
    },
    deletePhoto(photo) {
      const photoToDelete = {
        id: photo._id,
        src: photo.image
      }
      this.$emit('photoToDelete', photoToDelete)
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

.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.card-body p {
  font-size: 13px;
  margin-bottom: 1vh;
}

.row {
  display: flex;
  flex-direction: row;
}

.editBtn {
  background-color: white;
  border: 2px solid rgba(255, 122, 0, 0.7);
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  color: #FF7A00;
  padding: 0.5vh 0.8vw;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.3s;
  margin: 1vh 5vw 1vh 0;
}

.editBtn:hover {
  background-color: #FF7A00;
  color: white;
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
  margin: 1vh 0 1vh 5vw;
}

.deleteBtn:hover {
  background-color: rgb(250, 57, 22);
  color: white;
}

</style>