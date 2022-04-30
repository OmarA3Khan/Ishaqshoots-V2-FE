<template>
  <div class="container">
        <div class="sideBarLeft">
            <div class="sideBarContent">
                <ul>
                    <li><router-link to="/portfolio">HOME</router-link></li>
                    <li><router-link to="/admin/newalbum">NEW ALBUM</router-link></li>
                    <li><router-link to="/admin/managealbum">MANAGE ALBUMS</router-link></li>
                    <li><router-link to="/admin/managephotos">MANAGE PHOTOS</router-link></li>
                    <li><router-link to="/admin/managevideos">MANAGE VIDEOS</router-link></li>
                    <li><router-link to="/admin/manageabout">EDIT ABOUT ME</router-link></li>
                    <li><router-link to="/admin/faq">MANAGE FAQ</router-link></li>
                    <li class="btn-info" @click="info">INFO</li>
                    <li class="btn-logout" @click="logout">LOGOUT</li>
                </ul>
            </div>
        </div>
        <div 
          class="adminOptions"
          :class="{'adminOptionsSize-s' : sideBarSize == 's','adminOptionsSize-m' : sideBarSize == 'm','adminOptionsSize-l' : sideBarSize == 'l'}">
          <router-view 
            @addVideo="addVideo"
            @editAlbum="handleEditAlbum"
            @editPhoto="editPhoto"
            @photo="handlePhotoEmit"
            @selectedFiles="handleSelectedFiles"
            @uploadCompleted="loadingTxt = false"
            @photoToDelete="handlePhotosToDelete"
            @faqForm="handleShowFaqForm">
          </router-view>
      </div>
      <div
        class="sideBarRight"
        :class="{'sideBarSize-s' : sideBarSize == 's','sideBarSize-m' : sideBarSize == 'm','sideBarSize-l' : sideBarSize == 'l'}">
        <button class="btn btn-toggle" @click="toggleSideBar" ><span v-if="sideBarSize == 's'">&#8592;</span><span v-else>&#8594;</span></button>
        <div class="editAlbum"
            v-if="editAlbum">
            <h3>Edit <span v-if="photo.album">Album</span><span v-if="photo.photo">Photo</span></h3>
            <div class="img-wrapper">
                <img :src="selectedImage" />
            </div>
            <div class="albumDetails">
                <h4><span v-if="photo.album">Album</span><span v-if="photo.photo">Photo</span> TITLE : <span class="grey">{{selectedImageTitle}}</span></h4>
                <p><span v-if="photo.album">Album</span><span v-if="photo.photo">Photo</span> Description : <span class="grey">{{selectedImageDescription}}</span></p>
            </div>
            <form class="form" ref="myEditAlbumForm" role="form" method="POST" @submit.prevent="onUpload">
                <div  class="form-group">
                    <label for="image">Change Image ? </label>
                    <input ref="editAlbumFileInput" style="display: none" type="file" id="image" name="image" accept="image/*" >
                    <button class="btn" type="button" @click="$refs.editAlbumFileInput.click()">Pick an Image</button>
                </div>
                <!--NAME -->
                <input type="text" name="title" placeholder="Name" :value="selectedImageTitle" />
                <!--DESCRIPTION-->
                <textarea name="description" rows="5" placeholder="Description" :value="selectedImageDescription"></textarea>
                <!--SUBMIT BUTTON-->
                <div class="btn-and-msg">
                    <button class="btn submit-button" type="submit">
                        <span class="loading-spinner" v-if="loadingTxt"></span>
                        <span v-if="!loadingTxt" class=" btn-text">Confirm</span> &nbsp;
                    </button> 
                    <!--LOADING MESSAGE-->
                    <div v-if="loadingTxt">
                        <p class="">Updating...</p>
                    </div>
                </div>
            </form>
        </div>
        <div v-else-if="embedVid"
            class="embed-vid">
            <h3>Embed a Video</h3>
            <form class="form" ref="addVidForm" role="form" method="POST" @submit.prevent="onUploadVid">
                <!--NAME -->
                <input type="text" name="videoId" placeholder="embed video id eg: Xxe9iyQPGTI" />
                <!--SUBMIT BUTTON-->
                <div class="btn-and-msg">
                    <button class="btn submit-button" type="submit">
                        <span class="loading-spinner" v-if="loadingTxt"></span>
                        <span v-if="!loadingTxt" class="btn-text">Confirm</span> &nbsp;
                        <span v-if="!loadingTxt" class="btn-arrow"> &#x27F6;</span>
                    </button> 
                    <!--LOADING MESSAGE-->
                    <div v-if="loadingTxt">
                        <p class="">Updating...</p>
                    </div>
                </div>
            </form>
        </div>
        <div class="deletePhotos" v-else-if="showPhotosToDelete">
            <div>
                <h3>Photos Selected to delete: </h3>
                <ul class="deletePhotoList">
                    <li  
                    v-for="(photo) in deletePhotosList" 
                    :key="photo.etag"
                    class="deletePhotoWrapper">
                        <img
                            class="deletePhoto"
                            :src="photo.src" />
                            <button class="btn" @click="removePhotoFromDeleteList(photo.id)">remove</button>
                    </li>
                </ul>
                <div>Total images selected to delete: {{deletePhotosList.length}} </div>
                <button v-if="!deleteAll" class="btn" @click="deleteSelectedPhotos">Delete All</button>
                <div v-if="loadingTxt">
                    <p class="">Deleting...</p>
                </div>
            </div>
        </div>
        <div v-else-if="showFaqForm" class="faqForm">
            <h3> {{createNewFaq ? 'Create' : 'Edit'}} {{createNewFaq ? 'New' : ''}} Faq</h3>
            <form class="form" ref="faqForm" role="form" method="POST" @submit.prevent="faqController">
                <!--NAME -->
                <input class="faqInput" type="text" name="question" placeholder="Question" :value="editFaq ? faqToEdit.question : null" />
                <textarea class="faqTextarea" name="answer" rows="10" placeholder="Answer" :value="editFaq ? faqToEdit.answer : null"></textarea>
                <!--SUBMIT BUTTON-->
                <div class="btn-and-msg">
                    <button class="btn submit-button" type="submit">
                        <span class="loading-spinner" v-if="loadingTxt"></span>
                        <span v-if="!loadingTxt" class="btn-text">Confirm</span> &nbsp;
                        <span v-if="!loadingTxt" class="btn-arrow"> &#x27F6;</span>
                    </button> 
                    <!--LOADING MESSAGE-->
                    <div v-if="loadingTxt">
                        <p class="">Updating...</p>
                    </div>
                </div>
            </form>
        </div>
        <div class="info" v-else>
            <div class="mediaInfo">
                <h3>Total no. of media: </h3><p>{{mediaCount}}</p>
                <h3>Total no. of albums: </h3><p>{{albumCount}}</p>
                <h3>Total no. of photos: </h3><p>{{photoCount}}</p>
                <h3>Total no. of videos: </h3><p>{{videoCount}}</p>
                <h3>Total no. of faq: </h3><p>{{faqCount}}</p>
            </div>
            <div class="uploadInfo">
                <h2 class="uploadInfoHeader">Upload info</h2>
                <h4 class="selectedAlbum">Selected Album: </h4>
                <span>{{photo.name}}</span>
                <h4 class="selectedFilesLength">No. of files selected: </h4>
                <span v-if="selectedFiles" > {{selectedFiles.length}}</span>
                <h4 class="imagesSelected" >Images selected: </h4>
                <ul>
                    <li
                        v-for="(file, idx) in selectedFiles" 
                        :key="file.etag"
                        class="selectedFiles">
                        {{idx + 1}}: {{file}}
                    </li>
                </ul>
                <div class="loadingIcon">
                    <span class="loading-spinner" v-if="loadingTxt"></span>
                    <span v-if="loadingTxt" class="btn-text">Uploading ...</span>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '../Api';

export default {
    name: 'Admin',
    data() {
        return {
            photo: '',
            sideBarSize : 'm',
            selectedImage: '',
            selectedImageTitle: '',
            selectedImageDescription: '',
            selectedFiles: null,
            loadingTxt: false,
            editAlbum: false,
            embedVid: false,
            showPhotosToDelete: false,
            deletePhotosList: [],
            deleteAll: false,
            showFaqForm: false,
            createNewFaq: false,
            editFaq: false,
            faqToEdit: null,
            mediaCount: 0,
            albumCount: 0,
            photoCount: 0,
            videoCount: 0,
            faqCount: 0,
        }
    },
    created () {    
        // let apiURL = `http://localhost:5000/api/`;
        axios.get(url + '/allmediacount').then((res) => {
            this.mediaCount = res.data.allMedia;
        });
        axios.get(url + '/allphotocount').then((res) => {
            this.photoCount = res.data.allMedia;
        });
        axios.get(url + '/allvideocount').then((res) => {
            this.videoCount = res.data.allMedia;
        });
        axios.get(url + '/allalbumcount').then((res) => {
            this.albumCount = res.data.allMedia;
        });
        axios.get(url + '/allfaqcount').then((res) => {
            this.faqCount = res.data.allMedia;
        });
    },
    methods: {
        toggleSideBar() {
            if(this.sideBarSize == "m"){
                this.sideBarSize = 's'
            }else {
                this.sideBarSize = 'm'
            }
        },
        handlePhotoEmit(value) {
            this.photo = value;
            this.selectedImage = value.image;
            this.selectedImageTitle = value.name,
            this.selectedImageDescription = value.description
            this.sideBarSize = 'l'
        },
        handleSelectedFiles (value) {
            this.loadingTxt = true
            this.selectedFiles = value;
        },
        handleEditAlbum() {
            this.embedVid = false;
            this.showPhotosToDelete = false
            this.showFaqForm = false
            this.editAlbum = true;
        },
        editPhoto() {
            this.embedVid = false;
            this.showPhotosToDelete = false
            this.showFaqForm = false
            this.editAlbum = true;
        },
        addVideo() {
            this.showPhotosToDelete = false
            this.editAlbum = false;
            this.showFaqForm = false
            this.embedVid = true;
        },
        onUpload() {
            this.loadingTxt = true;
            let myForm = this.$refs.myEditAlbumForm;
            let fd = new FormData(myForm);
            axios.put(`${url}/index/${this.photo._id}`, fd, { withCredentials: true })
            .then(res => {
                console.log("edit form response",res);
                this.loadingTxt = false;
                this.$router.go()
            }).catch((error) => {
                if (error.response) {
                    this.loadingTxt = false;
                    if(error.response.data){
                        alert(`The upload was unsuccessfull \n ERROR : ${error.response.data} \n status text : ${error.response.statusText}`); // => the response payload }});
                    }else{
                        alert(`The upload was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`); // => the response payload }});
                    }
                }
            });
        },
        onUploadVid() {
            this.loadingTxt = true;
            let myForm = this.$refs.addVidForm;
            let fd = new FormData(myForm);
            axios.post(`${url}/index/${this.photo._id}`, fd, { withCredentials: true })
            .then(res => {
                console.log("Embed video response",res);
                this.loadingTxt = false;
                this.$router.go()
            }).catch((error) => {
                if (error.response.data) {
                    this.loadingTxt = false;
                    alert(`The upload was unsuccessfull \n ERROR : ${error.response.data} \n status text : ${error.response.statusText}`);
                }else {
                    alert(`The upload was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`);
                }
            });
        },
        logout() {
            axios.get(`${url}/logout`, { withCredentials: true })
            .then(res => {
                console.log("logout form response",res);
                this.$store.dispatch('setToken', null)
                this.$router.push({ name: 'Portfolio' });
            }).catch((error) => {
                if (error.response) {
                    alert(`The Logout was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`);
                }
            });
        },
        info() {
            this.embedVid = false;
            this.showPhotosToDelete = false
            this.showFaqForm = false
            this.editAlbum = false;
            this.sideBarSize = 'm'
        },
        handlePhotosToDelete(value) {
            this.editAlbum = false
            this.embedVid = false
            this.showFaqForm = false
            this.showPhotosToDelete = true
            this.sideBarSize = 'l'

            if (this.deletePhotosList.length > 0) {
                let duplicate = false
                for (let i = 0; i < this.deletePhotosList.length; i++) {
                    if (this.deletePhotosList[i].id == value.id) {
                        duplicate = true
                        alert("You have already selected this image")
                        break
                    }
                }
                if (!duplicate) {
                    this.deletePhotosList.push(value)
                }
            }else {
                this.deletePhotosList.push(value)
            }
        },
        deleteSelectedPhotos() {
            this.loadingTxt = true
            this.deleteAll = true
            if(!this.deletePhotosList.length){
                return alert("No images have been selected to delete")
            }
            this.deletePhotosList.forEach((photo) => {
                axios.delete(`${url}/index/${photo.id}/photo`, { withCredentials: true })
                .then(res => {
                    console.log("deletephoto server side response",res);
                    this.loadingTxt = false
                    this.$router.go()
                }).catch((error) => {
                    if(error.response.data){
                        alert(`The delete was unsuccessfull \n ERROR : ${error.response.data} \n status text : ${error.response.statusText}`);
                    }else{
                        alert(`The delete was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`);
                    }
                });
            })
            this.deleteAll = false
        },
        removePhotoFromDeleteList(id) {
            let found = false
            for (let i = 0; i < this.deletePhotosList.length; i++) {
                if(this.deletePhotosList[i].id == id) {
                    this.deletePhotosList.splice(i, 1)
                    found = true
                }
            }
            if(!found) {
                alert("An error occured: \n couldn't find the item")
            }
        },
        handleShowFaqForm(value) {
            this.editAlbum = false
            this.embedVid = false
            this.showPhotosToDelete = false
            this.showFaqForm = true
            this.sideBarSize = 'l'
            if (value.option) {
                this.createNewFaq = false
                this.editFaq = true
                this.faqToEdit = value.faq
            }else {
                this.editFaq = false
                this.createNewFaq = true
                this.faqToEdit = null
            }
        },
        faqController() {
            this.loadingTxt = true;
            let faqForm = this.$refs.faqForm;
            const body = {
                "question": faqForm.question.value,
                "answer": faqForm.answer.value
            }
            if(this.createNewFaq){
                axios.post(`${url}/faq`, body, { withCredentials: true })
                .then(res => {
                    console.log("Create Faq response",res);
                    this.loadingTxt = false;
                    this.editFaq = false
                    this.createNewFaq = false
                    this.faqToEdit = null
                    this.$router.go()
                }).catch((error) => {
                    if (error.response.data) {
                        this.loadingTxt = false;
                        alert(`The upload was unsuccessfull \n ERROR : ${error.response.data} \n status text : ${error.response.statusText}`); // => the response payload }});
                    }else {
                        alert(`The upload was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`); // => the response payload }});
                    }
                });
            }else if (this.editFaq){
                axios.put(`${url}/faq/${this.faqToEdit._id}`, body, { withCredentials: true })
                .then(res => {
                    console.log("Create Faq response",res);
                    this.loadingTxt = false;
                    this.editFaq = false
                    this.createNewFaq = false
                    this.faqToEdit = null
                    this.$router.go()
                }).catch((error) => {
                    if (error.response.data) {
                        this.loadingTxt = false;
                        alert(`The upload was unsuccessfull \n ERROR : ${error.response.data} \n status text : ${error.response.statusText}`); // => the response payload }});
                    }else {
                        alert(`The upload was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`); // => the response payload }});
                    }
                });
            }else {
                alert("from faq controller: something's wrong")
            }
        },
    }
}
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
}

.container .sideBarLeft, .container .sideBarRight{
    /* width: 15vw; */
    position: sticky;
    top: 0;
    height: 100vh;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 10px rgb(0 0 0 / 20%);
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
}

.sideBarLeft .sideBarContent {
    display: flex;
    flex-direction: column;
}

ul {
    display: flex;
    flex-direction: column;
}

a {
    padding: 10px;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    cursor: pointer;
}

 a:hover {
    color: grey;
 }

 a.router-link-active {
   position: relative;
   display: inline-block;
   color: grey;
 }

a.router-link-active::before {
  width: 45%;
  content: '';
  position: absolute;
  left: 27%;
  top: 45%;
  transition: .3s;
  border-bottom: 2px solid #FF7A00;
  -webkit-transform: skewY(-450deg);
  transform: skewY(-45deg);
}

li {
    list-style: none;
    margin: 4vh;
}

.router-link-exact-active{
  color:lightgray;
}

.sideBarContent .btn-logout,.sideBarContent .btn-info {
  list-style: none;
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 14px;
  color: black;
  cursor: pointer;
}

.sideBarContent .btn-logout:hover, .sideBarContent .btn-info:hover{
  color: grey;
}

.adminOptionsSize-s{
    width: 83vw;
}

.adminOptionsSize-m{
    width: 70vw;
}

.adminOptionsSize-l{
    width: 55vw;
}

.sideBarRight{
    overflow-y: scroll;
}

.sideBarSize-s{
    width: 4vw;
}

.sideBarSize-m{
    width: 15vw;
}

.sideBarSize-l{
    width: 30vw;
}

.editAlbum {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
}

.sideBarSize-s .editAlbum {
    display: none;
}

.img-wrapper {
    margin-bottom: 2vh;
    max-width: 80%;
    overflow: hidden;
}

.img-wrapper img {
    max-width: 100%;
}

.grey {
    font-family: 'Cormorant Garamond', serif;
    color: grey;
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

.btn-toggle {
    position: relative;
    align-self: flex-start;
    left: -30px;
    font-size: 1vw;
    background-color: grey;
    color: white;
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

.deletePhotoWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100px;
    height: auto;
    margin: .5vh;
}

.deletePhotoWrapper .btn {
    max-height: 28px;
}

.deletePhoto {
    width: 100%;
    height: 100%;
}

.uploadInfoHeader,
.selectedAlbum,
.selectedFilesLength {
    margin: 1vh;
}

.imagesSelected {
    margin-top: 2vh;
}

.selectedFiles {
    margin: 1vh;
}

.info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

form {
    margin: 2vh 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.faqForm {
    width: 90%;
}

.form input, .faqInput {
    border: 1px solid black;
}

.form input, .form textarea, .faqTextarea {
    border-radius: 4px;
    margin: 1vh 0 1vh 0;
    width: 100%;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
}

.form input:focus,
.faqInput:focus,
.form textarea:focus,
.faqTextarea:focus {
    outline: none;
}

</style>