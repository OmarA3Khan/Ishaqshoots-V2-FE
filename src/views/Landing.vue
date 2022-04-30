<template>
  <div class="container">
    <div class="text-box" >
      <h1>ISAQSHOOTS</h1>
      <div class="interactive" >
          <router-link class="cross" to="/portfolio"><strong>PORTFOLIO</strong></router-link>
          <router-link class="cross" to="/contact"><strong>CONTACT</strong></router-link>
      </div>
    </div>
    <ul class="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
}

.text-box {
  z-index: 1;
  color: #fff;
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.text-box h1 {
  font-size: 16vw;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  background-image: url("../assets/back.png");
  -webkit-background-clip: text;
  background-position: 0 0;
  animation: back 25s linear infinite ;
}

@keyframes back {
  100%{
    background-position: 2000px 0;
  }
}

.text-box .interactive {
  position: relative;
  top: 20vh;
  left: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.text-box a{
  color: #fff;
  text-decoration: none;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  margin: 1vh;
  width: 70vw;
  height: 6vh;
  justify-content: center;
  font-size: 5vw;
  transition: .3s ease-in;
}

.text-box a:hover {
  color: black;
  background-color: white;
}

.slideshow { 
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.slideshow li { 
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 0;
  animation: imageAnimation 35s linear infinite; 
}

.slideshow li:nth-child(1) { 
  background-image: url(../assets/landing1.jpg);
}
.slideshow li:nth-child(2) { 
  background-image: url(../assets/landing2.jpg);
  animation-delay: 6s; 
}
.slideshow li:nth-child(3) { 
  background-image: url(../assets/landing3.jpg);
  animation-delay: 13s; 
}
.slideshow li:nth-child(4) { 
  background-image: url(../assets/landing4.jpg);
  animation-delay: 20s; 
}
.slideshow li:nth-child(5) { 
  background-image: url(../assets/landing5.jpg);
  animation-delay: 28s; 
}

@keyframes imageAnimation { 
  0% { 
    opacity: 0; 
    animation-timing-function: ease-in;
  }
  10% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
  20% {
    opacity: 1
  }
  30% {
    opacity: 0
  }
}

/* Older browser support - .no-cssanimations class added by modernizr */
.no-cssanimations .slideshow li {
	opacity: 1;
}

@media only screen and (min-width: 600px) {
  
  /* For Tablets  */

  .text-box {
    left: 18vw;
  }
  .text-box h1 {
    position: relative;
    top: 5vh;
    font-size: 10vw;
  }

  .text-box .interactive {
    flex-direction: row;
    left: 3%;
  }

  .text-box a {
    width: 27vw;
    font-size: 2vh;
  } 
}

@media only screen and (min-width: 770px) {

  /* For Desktop  */

  .text-box {
    left: 28vw;
  }
  .text-box h1 {
    position: relative;
    top: 5vh;
    font-size: 7vw;
  }

  .text-box .interactive {
    flex-direction: row;
    left: 10%;
  }

  .text-box a {
    width: 16vw;
    font-size: 3vh;
  }
}

</style>