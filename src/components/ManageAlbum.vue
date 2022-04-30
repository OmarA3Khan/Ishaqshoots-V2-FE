<template>
  <div class="container">
    <h1>MANAGE ALBUMS</h1>
    <div 
      v-for="album in albums.events" 
      :key="album.etag" 
      class="card">
      <div class="card-header">
        <img
          :src="album.image"
          :alt="album._id"
          :data-original="album._id" />
      </div>
      <div class="card-body">
        <span class=""><strong>ALBUM TITLE</strong>&#xa0;&#xa0;: &#xa0;{{album.name}}</span>
        <p>
          <strong>ALBUM DESCRIPTION : </strong>{{album.description}}
        </p>
        <form class="form" ref="addPhotoForm" role="form" method="POST" enctype="multipart/form-data" @submit.prevent="addPhotoToAlbum(album._id)">
          <div  class="form-group">
            <label for="image"> Add images To This Album</label>
            <input ref="addImagesToAlbumInput" @change="handleFileChange" style="display: none" type="file" id="image" name="image" accept="image/*" multiple>
            <button class="addBtn" type="button" @click="$refs.addImagesToAlbumInput.click(), emitPhoto(album)"><span>&#x2b;</span></button>
            <button class="btn" :disabled="selectedFiles.length == []">Upload</button>
          </div>
        </form>
        <div class="row">
          <button class="btn btn-add" @click="addVideo(), emitPhoto(album)">Add a video</button>
          <button class="btn btn-edit" @click="edit(), emitPhoto(album)">EDIT</button>
          <button class="btn btn-delete" @click="deleteAlbum(album._id)">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '../Api';

export default {
    name: 'ManageAlbum',
    data() {
      return {
        albums: [],
        selectedFiles: [],
        btnDisabled: true,
      }
    },
    created () {
      let apiURL = `${url}/index`;
      axios.get(apiURL).then((res) => {
        this.albums = res.data;
      });
    },
    methods: {
      handleFileChange(event) {
        for (let i = 0; i < event.target.files.length; i++){
          this.selectedFiles.push(event.target.files[i].name)
        }
      },
      edit() {
        this.$emit('editAlbum');
      },
      emitPhoto(photo){
        this.$emit('photo', photo);
      },
      addVideo() {
        this.$emit('addVideo');
      },
      deleteAlbum(albumId) {
        if (confirm("Are you sure you want to delete the entire album? \nThis will delete all the media in the album and the album cover photo")){
          axios.delete(`${url}/index/${albumId}`, { withCredentials: true })
          .then(
            this.$router.go()
          ).catch((error) => {
            if (error.response.data) {
              alert(`The delete was unsuccessfull \n status code : ${error.response.data} \n status text : ${error.response.statusText}`); // => the response payload }});
            }else {
              alert(`The delete was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`); // => the response payload }});
            }
          });
        }
      },
      addPhotoToAlbum(id) {
        this.$emit('selectedFiles', this.selectedFiles);
        let myForm = this.$refs.addPhotoForm;
        let fd = new FormData(myForm);
        axios.post(`${url}/index/${id}`, fd)
        .then(res => {
            console.log(res)
            this.$emit('uploadCompleted');
            this.$router.go()
        }).catch((error) => {
            if (error.response) {
              alert(`The upload was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText} \n error data : ${error.response.data}`); // => the response payload }});
            }
        });
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

.form {
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.form-group {
  display: flex;
}

.addBtn {
  background-color: white; /* white */
  border: 2px solid rgba(52, 119, 235, 0.7); /* blue */
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  color: blue;
  padding: 0.5vh 0.8vw;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.3s;
  margin-left: 2vw;
}

.addBtn:hover {
  background-color: rgba(52, 119, 235, 1);
  color: white;
}

.addBtn span{
  font-size: 2.5vh;
}

.btn {
  border-radius: 5px;
  position: relative;
  color: black;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  transition-duration: 0.3s;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  padding: 0.5vh 0.8vw;
  margin: 1vh 1vw;
}

.btn:hover {
  color: white;
  background-color: grey;
  border-color: grey;
}

.btn:disabled {
  pointer-events: none;
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.btn-edit {
  background-color: white;
  border: 2px solid rgba(255, 122, 0, 0.7);
  color: #FF7A00;
}

.btn-edit:hover {
  background-color: #FF7A00;
  color: white;
}

.btn-delete {
  background-color: white;
  border: 2px solid rgba(255, 0, 0, 0.7);
  color: rgb(247, 90, 62);
}

.btn-delete:hover {
  background-color: rgb(250, 57, 22);
  color: white;
}

</style>