<template>
  <div class="new-album container">
    <h2>CREATE A NEW ALBUM</h2>
    <form class="form" ref="myNewAlbumForm" name="myForm" role="form" method="POST" enctype="multipart/form-data" @submit.prevent="onUpload">
        <div class="form-group">
            <input class="form-control" type="text" name="name" placeholder="album name" v-model="mediaName" required>
        </div>
        <div  class="form-group">
            <label for="image">Image</label>
            <input ref="newAlbumFileInput" style="display: none" type="file" @change="onFileSelected" id="image" name="image" accept="image/*" required>
            <button class="btn" type="button" @click="$refs.newAlbumFileInput.click()" >Pick Image</button>
        </div>
        <!-- <div class="form-group">
            <label>Quality : <p>avoid setting the quality above 40, 10 is recommended</p></label>
            <input class="form-control" type="number" name="quality" placeholder="" v-model="quality" min=1>
        </div>
        <div class="form-group">
            <input class="form-control" type="number" name="price" placeholder="price" v-model="price" min="0.01" step="0.01">
        </div> -->
        <div class="form-group">
            <textarea class="form-control mb-1 shadow-sm" name="description" placeholder="description" v-model="description" rows="3"></textarea>
        </div>
        <div class="form-group">
            <button class="btn submit-button" type="submit">
                <span class="loading-spinner" v-if="loadingTxt"></span>
                <span v-if="!loadingTxt" class=" btn-text">Upload</span> &nbsp;
            </button> 
            <!--LOADING MESSAGE-->
            <div v-if="loadingTxt">
                <p class="mb-8 text-primary">Uploading...</p>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import url from '../Api';

export default {
    name: 'NewUpload',
    data () {
        return {
            mediaName: '',
            selectedFile: null,
            quality: 25,
            price: '',
            description: '',
            loadingTxt: false,
        }
    },
    methods: {
        onFileSelected (event) {
            this.selectedFile = event.target.files[0];
        },
        onUpload() {
            this.loadingTxt = true
            let myForm = this.$refs.myNewAlbumForm;
            let fd = new FormData(myForm);
            axios.post(url+'/newalbum', fd, { withCredentials: true })
            .then(res => {
                console.log("newAlbum.vue form response",res);
                this.mediaName = '';
                this.quality = '';
                this.price = '';
                this.description = '';
                this.loadingTxt = false
                this.$router.go()
            }).catch((error) => {
                if (error.response.data) {
                    alert(`The upload was unsuccessfull \n status code : ${error.response.status} \n Error text : ${error.response.data}`);
                }else {
                    alert(`The upload was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`);
                }
            });
        }
    }

}
</script>

<style scoped>

* {
    font-family: 'Poppins', sans-serif;
}

.container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: start;
}

h2 {
    margin: 2vh;
}

.container .form {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;  
}

.form .form-group {
    margin: 2vh;
}

.form-group .form-control {
    border: none;
    border-bottom: 1px solid black;
    box-shadow: 0px 8px 7px -10px #111;
    width: 70%;
}

.btn {
    margin-left: 1vw;
    color: white;
    background-color: black;
    border: 1px solid black;
    border-radius: 0px;
    width: 110px;
    height: 38px;
    cursor: pointer;
}

.loading-spinner{
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 165px;
    left: 115px;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: black;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}

</style>