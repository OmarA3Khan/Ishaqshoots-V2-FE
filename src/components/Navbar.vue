<template>
  <div>
    <nav>
      <div class="logo-container">
        <router-link :class="['logo', isMobile() ? 'mobile' : 'desktop']" to="/"><strong><span class="orange">I</span>SAQ</strong></router-link>
      </div>
      <ul 
        class="nav-links"
        :class="{'open' : hamburgerOpen}">
        <li :class="{'fade' : hamburgerOpen}"><router-link to="/about">ABOUT</router-link></li>
        <li :class="{'fade' : hamburgerOpen}"><router-link to="/portfolio">PORTFOLIO</router-link></li>
        <li :class="{'fade' : hamburgerOpen}"><router-link to="/contact">CONTACT</router-link></li>
        <li :class="{'fade' : hamburgerOpen}" v-if="isLoggedIn"><router-link to="/admin">ADMIN</router-link></li>
        <li v-if="isLoggedIn" class="mobile" :class="{'fade' : hamburgerOpen}" @click="logout">LOGOUT</li>
      </ul>
      <div>
        <li class="btn-logout desktop" v-if="isLoggedIn" :class="{'fade' : hamburgerOpen}" @click="logout">LOGOUT</li>
      </div>
      <div 
        @click="hamburgerClicked"
        class="menu-btn"
        :class="{'open' : hamburgerOpen}">
        <div class="menu-btn__burger"></div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
import url from '../Api';

export default {
  data() {
    return {
      hamburgerOpen: false,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    hamburgerClicked() {
      this.hamburgerOpen = !this.hamburgerOpen;
    },
    logout() {
      axios.get(url+'/logout', { withCredentials: true })
      .then(res => {
          console.log("logout form response",res);
          this.$store.dispatch('setToken', null)
          this.$router.push({ name: 'Portfolio' });
      }).catch((error) => {
          if (error.response) {
            alert(`The Logout was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`);
          }
      });
    }
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  height: 10vh;
  display: flex;
  align-items: center;
  z-index: 10;
  margin: 2vh 1vw 7.5vh 1vw;
}

.logo-container {
  margin-right: auto;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  text-decoration: none;
  color: black;
}

.logo-container .desktop {
  font-size: 2vw;
}

.logo-container .mobile {
  font-size: 7.6vw;
}

.nav-links{
	display: flex;
	list-style: none;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	margin-left: auto;
  z-index: 1;
}

.nav-links li a {
	text-decoration: none;
	font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: black;
  margin: 3.5vw;
  letter-spacing: 2px;
}

 .nav-links li a:hover {
    color: grey;
 }

 .nav-links li a.router-link-active {
   position: relative;
   display: inline-block;
   color: grey;
 }

.nav-links li a.router-link-active::before {
  content: '';
  min-width: 30px;
  position: absolute;
  left: 27%;
  top: 45%;
  transition: .3s;
  border-bottom: 2px solid #FF7A00;
  -webkit-transform: skewY(-450deg);
  transform: skewY(-45deg);
}

.btn-logout {
  list-style: none;
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: black;
  cursor: pointer;
}

.btn-logout:hover{
  color: grey;
}

.orange {
  color: #FF7A00;
}

.desktop {
  display: block;
}
.mobile {
  display: none;
}

.menu-btn {
  display: none;
}

@media screen and (max-width: 768px){
  nav {
    height: auto;
    justify-content: flex-end;
  }

  .menu-btn {
    position: relative;
    display: flex;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    z-index: 1;
  }
  .menu-btn__burger {
    width: 50px;
    height: 3px;
    background: #eba02f;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    background: black;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-16px);
  }
  .menu-btn__burger::after {
    transform: translateY(16px);
  }
  .menu-btn.open {
    position: fixed;
  }
  /* ANIMATION */
  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
    background: grey;
  }
  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
    background: grey;
  }

  .nav-links{
		position: fixed;
		background-color: black;
    top: 0px;
		height: 105vh;
		width: 100%;
    right: 0px;
		flex-direction: column;
		clip-path: circle(100px at 90% -10%);
		-webkit-clip-path: circle(65px at 125% -10%);
		transition: all 1s ease-out;
		pointer-events: none;
    justify-content: center;
	}

  .nav-links li a.router-link-active::before {
    left: 32%;
    min-width: 43px;
  }

	.nav-links.open{
		clip-path: circle(1000px at 100% -10%);
		-webkit-clip-path: circle(1119px at 90% -20%);
		pointer-events: all;
	}

	.nav-links li {
		opacity: 0;
	}

	.nav-links li a {
		font-size: 25px;
    color: grey;
	}

	.nav-links li{
		transition: all 0.5s ease 0.2s;
	}

	li.fade {
    margin: 3vh 0;
		opacity: 1;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>