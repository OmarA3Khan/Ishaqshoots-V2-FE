<template>
    <div class="portfolio container-fluid">
      <Navbar />
      <div
        class="album-gallery">
        <div
          v-for="album in albums.events"
          :key="album.etag"
          class="album-img-container">
          <router-link class="router-link" :to="{ path: `/portfolio/album/${album._id}`, query: { myprop: album.image }}">
            <img
              class=""
              :src="album.image"
              :alt="album._id"
              :data-original="album._id" />
            <div class="overlay">
              <div class="text-block">
                <h4><strong>{{album.name}}<span v-if="album.name" class="dot">.</span></strong></h4>
                <p>More<span>&#x27F6;</span></p>
              </div>
            </div>
            <div v-if="!album.video" class="text-block-mobile">
              <span><strong>{{album.name}}</strong></span>
            </div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from '../components/Navbar'
import url from '../Api';

export default {
  name: 'AlbumGallery',
  data() {
    return {
      albums: [],
    }
  },
  created () {
    let apiURL = `${url}/index`;
    axios.get(apiURL).then((res) => {
      this.albums = res.data;
    });
  },
  components: {
    Navbar,
  }
}
</script>

<style scoped>

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* MOBILE VIEW FOR GALLERY */
.album-gallery {
  display: flex;
  flex-wrap: wrap;

}

.album-gallery .album-img-container {
  height: 42vh;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  margin: 2px;
}

.router-link {
  text-decoration: none;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: rgba(0, 0, 0, .5);
}

.album-img-container:hover .overlay {
  opacity: 1;
}

.text-block {
  color: white;
  position: absolute;
  top: 66%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-block h4 {
  font-size: 5vh;
}

.text-block p {
  float: left;
  font-size: 2.5vh;
}

/* Bottom right text */
.text-block-mobile {
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 30px;
  color: white;
  padding-right: 20px;
}

/* Portrait */
@media (max-aspect-ratio: 1/1) {
  .album-gallery .album-img-container {
    height: 30vh;
  }
}
/* Short Screens */
@media (max-height: 480px) {
  .album-gallery .album-img-container {
    height: 80vh;
  }
}

/* DESKTOP VIEW FOR GALLERY */
@media only screen and (min-width: 768px){
	.album-gallery .album-img-container {
    height: 42vh;
    min-width: 32vw;
	}
}

/* MOBILE VIEW PROPERTY FOR GALLERY IMG */
.album-gallery img {
  padding: 1px;
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  transition: all 0.3s ease-out;
  cursor: pointer;
}

/* DESKTOP VIEW PROPERTY FOR GALLERY IMG */
@media only screen and (min-width: 768px){
	.album-gallery img {
    padding: 2px;
	}

}

@media only screen and (min-width: 830px){
  .text-block-mobile {
    display: none;
  }
}

</style>