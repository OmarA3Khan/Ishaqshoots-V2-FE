<template>
  <div class="about container-fluid">
      <Navbar />
      <div class="content-container">
        <div class="image-container" >
            <img class="image-fit" src="../assets/aboutMe.jpg" alt="img" />
        </div>
        <div class="text-container" >
            <h3 class="header">PHOTOGRAPHER | FILMMAKER </h3>
            <div class="about">
                <h1 class="name"><span class="orange">I</span>SAQ <span class="outline">HAMEED</span></h1>
                <br><p>{{paragraphOne}}</p>
                <br><p>{{paragraphTwo}}</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from '../components/Navbar'
import url from '../Api';

export default {
    name: "About",
    data () {
        return {
            paragraphOne: null,
            paragraphTwo: null,
        }
    },
    created () {
        let apiURL = `${url}/aboutme`;
        axios.get(apiURL).then((res) => {
            this.paragraphOne = res.data.aboutMe[0].paragraphOne;
            this.paragraphTwo = res.data.aboutMe[0].paragraphTwo;
        });
    },
    components: {
        Navbar,
    }
}
</script>

<style scoped>

/* FOR MOBILE */

* {
    font-family: 'Poppins', sans-serif;
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1vh;
}

.image-container {
    display: flex;
    border-radius: 1vh;
    box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.7);
    margin-bottom: 1vh;
}

.image-fit{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 1vh;
}

.text-container {
    margin: 4vh 0vh 4vh 0vh;
    text-align: start;   
}

.text-container .header{
    /* font-style: normal; */
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 0.1em;
    margin-bottom: 1vh;
}

.about .name {
    font-size: 8vh;
    font-family: 'Cormorant Garamond', serif;
}

.about .name .orange {
    font-family: 'Cormorant Garamond', serif;
    color: #FF7A00;
}

.about .name .outline {
    color: white;
    font-family: 'Cormorant Garamond', serif;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
}

@media only screen and (min-width: 767px) {

    /* For Tablets  */
    
    .content-container {
        margin-top: 4vh;
    }

    .text-container {
        top: 0;
        left: 5vw;
    }
    
}

@media only screen and (min-width: 913px) {

    /* FOR DESKTOP */
    
    .content-container {
        display: flex;
        flex-direction: row;
        margin: 4vh 0vh 0vh 7vh;
    }
    
    .image-container {
        flex: 2;
        max-width: 55vh;
    }

    .text-container {
        flex: 1;
        max-width: 40vw;
        max-height: 20vw;
        position: relative;
        left: 15vw;
        top: 22vh;
    }

    .text-container .header{
        font-size: 2.5vh;
    }

    .about .name {
        font-size: 5vw;
    }
}

</style>