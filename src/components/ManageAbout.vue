<template>
    <div class="container">
        <form class="form" role="form" enctype="multipart/form-data" @submit.prevent="editAbout()">
            <div >
                <h2>PARAGRAPH 1: </h2>
                <textarea rows="5" placeholder="Paragraph 1" v-model="paragraphOne"></textarea>
                <h2>PARAGRAPH 2: </h2>
                <textarea rows="5" placeholder="Paragraph 2" v-model="paragraphTwo"></textarea>
            </div>
            <button class="btn" type="submit">Confirm</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import url from '../Api';

export default {
    name: 'ManageAbout',
    data() {
        return {
            paragraphOne: '',
            paragraphTwo: ''
        }
    },
    created () {
        let apiURL = `${url}/aboutme`;
        axios.get(apiURL).then((res) => {
            this.paragraphOne = res.data.aboutMe[0].paragraphOne;
            this.paragraphTwo = res.data.aboutMe[0].paragraphTwo;
        });
    },
    methods: {
        editAbout() {
            const body = {
                "paragraphOne": this.paragraphOne,
                "paragraphTwo": this.paragraphTwo
            }
            axios.put(`${url}/aboutme`, body,{ withCredentials: true })
            .then( this.$router.go())
            .catch((error) => {
                if (error.response) {
                alert(`The update was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText} \n error data : ${error.response.data}`);
                }
            });
        },
    }
}
</script>

<style scoped>

.container {
    height: 100%;
    width: 100%;
}

.form {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

textarea {
    border-radius: 4px;
    margin: 1vh 0 1vh 0;
    width: 60vw;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
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

</style>