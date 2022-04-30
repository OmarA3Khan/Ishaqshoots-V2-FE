<template>
    <div>
        <Navbar />
        <div class="container">
            <div id="" class="forms">
                <div class="header">
                    <h1>REGISTER</h1>
                </div>
                <form ref="registerForm" method="POST" class="validated-form registerForm" @submit.prevent="onRegister">
                    <div class="mb-3">
                        <input class="form-control" type="text" id="username" name="username" placeholder="Username" v-model="username" >
                    </div>
                    <div class="mb-3">
                        <input class="form-control" type="password" id="password" name="password" placeholder="Password" v-model="password" required>
                    </div>
                    <button class="btn btn-success">REGISTER</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar'
import url from '../Api';

export default {
    name: 'Register',
    components: {
        Navbar,
    },
    data () {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        onRegister() {
            const body = {
                "username": this.username,
                "password": this.password
            }
            axios.post(url+'/register', body)
            .then(res => {
                console.log("register form response",res);
                this.$router.push({ name: 'login' });
            }).catch((error) => {
                if (error.response) {
                    alert(`The register was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`);
                }
            });
        },
    }
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.forms {
    position: relative;
    top: -10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 52vh;
    width: 95vw;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255,122,0,0.8);
    color: white;
    width: 100%;
    height: 25%;
    position: relative;
    margin-bottom: 10%;
    border-radius: 4px;
}

.registerForm {
    width: 75%;
    height: 50%;
    border-radius: 5px;
}

input {
    margin: 15% 2%;
    border: none;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 8px 7px -10px #111;
    width: 90%;
}

.btn {
  border-radius: 29px;
  position: relative;
  color: white;
  background-color: gray;
  border: 1px solid gray;
  cursor: pointer;
  text-align: center;
  transition-duration: 0.3s;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  padding: 1.8vh 4.2vw;
  margin: 1vh 1vw;
  position: relative;
  left: -27%;
  top: 2%;
}

.btn:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.valid-feedback {
    display: none;
}

@media only screen and (min-width: 750px) {
    /* For Tablets  */
    .forms {
        height: 43vh;
        width: 57vw;
    }

    input {
        margin: 10% 2%;
    }

    .btn {
        top: 5%;
        left: -30%;
        padding: 1.4vh 3.2vw;
    }
}

@media only screen and (min-width: 913px) {
    .forms {
        height: 52vh;
        width: 31vw;
    }

    input {
        margin: 10% 2%;
    }

    .btn {
        left: -21%;
        padding: 1.4vh 3.2vw;
    }
}
</style>