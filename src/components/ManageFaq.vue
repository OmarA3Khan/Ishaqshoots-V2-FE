<template>
  <div class="faq">
      <h1>FAQ</h1>
      <button @click="faqHandler(faq,'create')" class="btn">Create New FAQ</button>
      <div class="faqWrapper">
        <div
          v-for="(faq, idx) in faqList"
          :key="idx"
          class="card">
          <h3> {{faq.question}} </h3>
          <p>{{faq.answer}} </p>
          <div class="row">
            <button class="editBtn" @click="faqHandler(faq,'edit')">EDIT</button>
            <button class="deleteBtn" @click="deleteFaq(faq)">DELETE</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '../Api';

export default {
  name: "FAQ",
  data() {
    return {
      faqList: null,
      allmediacount: null,
    }
  },
  async created () {
    let apiURL = `${url}/faq`;
    axios.get(apiURL).then((res) => {
      this.faqList = res.data.Faq;
    });
  },
  methods: {
    faqHandler(faq, option) {
      if (!faq) {
        this.$emit("faqForm", option)
      }else {
        this.$emit("faqForm", {faq: faq, option: option})
      }
    },
    deleteFaq(faq) {
      axios.delete(`${url}/faq/${faq._id}/`, { withCredentials: true })
      .then(
        this.$router.go()
      ).catch((error) => {
        if(error.response.data){
          alert(`The delete was unsuccessfull \n ERROR : ${error.response.data} \n status text : ${error.response.statusText}`);
        }else{
          alert(`The delete was unsuccessfull \n status code : ${error.response.status} \n status text : ${error.response.statusText}`);
        }
      });
    },
  }
}
</script>

<style scoped>

.faq {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.faqWrapper {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 2vh;
  padding: 2vw;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  max-width: 30vw;
}

.card h3{
  margin-bottom: 1vh;
}

.row {
  display: flex;
  flex-direction: row;
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

.editBtn {
  background-color: white;
  border: 2px solid rgba(255, 122, 0, 0.7);
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  color: #FF7A00;
  padding: 0.5vh 0.8vw;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.3s;
  margin: 1vh 5vw 1vh 0;
}

.editBtn:hover {
  background-color: #FF7A00;
  color: white;
}

.deleteBtn {
  background-color: white;
  border: 2px solid rgba(255, 0, 0, 0.7);
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  color: rgb(247, 90, 62);
  padding: 0.5vh 0.8vw;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.3s;
  margin: 1vh 0 1vh 5vw;
}

.deleteBtn:hover {
  background-color: rgb(250, 57, 22);
  color: white;
}

</style>