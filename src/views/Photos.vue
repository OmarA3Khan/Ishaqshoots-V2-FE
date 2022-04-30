<template>
  <div class="photos container-fluid">
    <Navbar />
    <div
      v-if="images.photos[0].name"
      class="header">
      <h1>
        {{images.photos[0].name}}
        <hr>
      </h1>
      <p v-if="images.photos[0].description">{{images.photos[0].description}}</p>
    </div>
    <div
      class="photo-gallery">
      <div
        v-for="(photo,idx) in images.photos"
        :key="idx"
        class="photo-img-container">
        <img
          v-if="!photo.video"
          @click="setSelectedImage(photo.image,idx)"
          class=""
          :src="photo.image"
          :alt="photo._id"
          original="photo._id" />
        <div v-if="!photo.video" class="text-block">
          <h4><strong> {{photo.name}} </strong></h4>
        </div>
        <iframe
          v-else
          height="100%"
          width="100%"
          :src="videoUrl(photo.videoId)" allowfullscreen />
      </div>
    </div>
    <div
      class="myModal"
      :class="{'open' : selectedimage.src}">
      <span @click="selectedimage.src = null"
        class="close-icon">
          &#x292B;
      </span>
      <span
        @click="findPreviousImage" 
        class="left-arrow">
          &#10094;
      </span>
      <img
        class="full-img"
        :class="{'open' : selectedimage.src}"
        :src="selectedimage.src">
      <span
        @click="findNextImage" 
        class="right-arrow">
          &#10095;
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from '../components/Navbar'
import url from '../Api';

export default {
  name: 'PhotoGallery',
  data() {
    return {
      images: { images: [] },
      selectedimage: {
        src: null,
        idx: null
      },
      totalImageCount: 0,
    }
  },
  async created () {
    let apiURL = `${url}/index/album/${this.$route.params.id}`;
    await axios.get(apiURL).then((res) => {
      this.images = res.data;
    });
    this.coverPhoto = this.$route.query.myprop;
  },
  components: {
    Navbar,
  },
  methods: {
    setSelectedImage(e, idx) {
      this.selectedimage.src = e;
      this.selectedimage.idx = idx;
    },
    videoUrl(value) {
      return 'https://www.youtube.com/embed/'+value+'?modestbranding=0&showinfo=0&rel=0';
    },
    findNextImage() {
      let startIdx = this.selectedimage.idx == this.images.photos.length - 1 ? 0 : this.selectedimage.idx + 1;
      for(let i = startIdx; i < this.images.photos.length; i++){
        if(this.images.photos[i].image){
          this.selectedimage.src = this.images.photos[i].image;
          this.selectedimage.idx = i;
          break
        }
        else if(!this.images.photos[i].image && i == this.images.photos.length - 1){
          i = -1;
        }
      }
    },
    findPreviousImage() {
      let startIdx = this.selectedimage.idx == 0 ? this.images.photos.length - 1 : this.selectedimage.idx - 1;
      for(let i = startIdx; i >= 0; i--){
        if(this.images.photos[i].image){
          this.selectedimage.src = this.images.photos[i].image;
          this.selectedimage.idx = i;
          break
        }
        else if(!this.images.photos[i].image && i == 0){
          i = this.images.photos.length + 1;
        }
      }
    },
  },
}
</script>

<style scoped>

.container-fluid {
  width: 100%;
  padding: 15px 15px;
  margin-right: auto;
  margin-left: auto;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2vh;
}

.header hr {
  margin: 1vh 0vh 1vh 0vh ;
}

.header h1 {
  font-size: 48px;
}

.header p{
  text-align: start;
  font-family: 'Poppins', sans-serif;
}

/* MOBILE VIEW FOR GALLERY */
.photo-gallery {
  display: flex;
  flex-wrap: wrap;
}

.photo-gallery .photo-img-container {
  height: 40vh;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}

/* MOBILE VIEW PROPERTY FOR GALLERY IMG */
.photo-gallery img {
  padding: 1px;
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  transition: all 0.3s ease-out;
  cursor: pointer;
}

.photo-gallery img:hover {
  transform: scale(1.2);
}

/* Bottom right text */
.text-block {
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 30px;
  color: white;
  padding-right: 20px;
}

.myModal {
	background: rgba(255,255,255,0.9);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity:0;
	pointer-events: none;
	transition: 0.25s ease-out;
}

.myModal.open {
	opacity:1;
	pointer-events: all;
  z-index: 1;
}

.full-img {
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%) scale(0.5);
	transition: all 0.25s ease-out;
}

.full-img.open{
	max-height: 80%;
	max-width: 95%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	transform: translate(-50%, -50%) scale(1);
}

.close-icon {
  position: absolute;
  right: 5%;
  font-size: 8vh;
  cursor: pointer;
}

.left-arrow {
  z-index: 1;
  position: absolute;
  left: 5%;
  bottom: 3%;
  font-size: 4vh;
  cursor: pointer;
}

.right-arrow {
  position: absolute;
  right: 5%;
  bottom: 3%;
  font-size: 4vh;
  cursor: pointer;
}

/* Portrait */
@media (max-aspect-ratio: 1/1) {
  .photo-gallery .photo-img-container {
    height: 30vh;
  }
}

/* Short Screens */
@media (max-height: 480px) {
  .photo-gallery .photo-img-container {
    height: 80vh;
  }
}

/* DESKTOP VIEW FOR GALLERY */
@media only screen and (min-width: 768px){
	.photo-gallery .photo-img-container {
    height: 40vh;
    width: auto;
	}
}

/* DESKTOP VIEW PROPERTY FOR GALLERY IMG */
@media only screen and (min-width: 768px){
	.photo-gallery img {
    padding: 2px;
	}

  .header {
    margin: 8vh;
  }

  .header hr {
    margin: 1vh 1.5vh 1vh 1.5vh ;
  }

  .header p {
    padding: .5vw;
  }

  .left-arrow {
    position: absolute;
    left: 5%;
    top: 50%;
    font-size: 8vh;
    cursor: pointer;
  }

  .right-arrow {
    position: absolute;
    right: 5%;
    top: 50%;
    font-size: 8vh;
    cursor: pointer;
  }
}

</style>