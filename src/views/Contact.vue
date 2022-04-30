<template>
    <div class="contact">
        <Navbar />
        <div class="content-container">
            <div class="image-container" >
                <img src="../assets/contact3.jpg" alt="img" class="image-fit" />
            </div>
            <div class="contactInfo-form">
                <div class="contact">
                    <h1 >Let's get in <span class="grey" >touch</span></h1>
                    <div class="contact-content-wrapper">
                        <p>Thinking about booking a private session?
                            <br>
                            <br>Please do not hesitate to reach out for any reason -- email, text, or just fill out the form and hit "send".<br>
                        </p>
                        <div class="column">
                            <div class="row">
                                <p><strong>E-MAIL</strong></p>
                                <p>isaqhoots@gmail.com</p>
                            </div>
                            <div class="row">
                                <p><strong>FIND ME ON</strong></p>
                                <p>
                                    <a id="instaIcon" href="https://www.instagram.com/isaqshoots/?hl=en" target="_blank" rel="noopener noreferrer">
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram mx-1" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                        </svg>
                                    </a>
                                    <a id="utubeIcon" target="_blank" href="https://www.youtube.com/channel/UCf_apSSuyQ27UEGJa1ZQjIg">
                                        <svg id="utube" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube mx-1" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-content">
                    <form class="form" role="form" method="POST" @submit.prevent="sendEmail">
                        <h2 class="mobile-header" >Have any enquiries ? Fill out the form and hit <span class="grey" >send</span></h2>
                        <input type="text" name="name" placeholder="Your name" v-model="name"/>
                        <input type="email" name="_replyto" placeholder="Your email" v-model="email"/>
                        <input type="number" name="PhoneNo" placeholder="Phone No." v-model="phoneNo"/>
                        <span class="serviceType">service Type :</span>
                        <div class="serviceType-options">
                            <input ref="photographyCheckbox" @click="selectServiceType" name="serviceType" id="serviceType-photography" class="serviceType-input" type="checkbox" value="photography" />
                            <label>photography</label>
                            <input ref="videographyCheckbox" @click="selectServiceType" name="serviceType" id="serviceType-videography" class="serviceType-input" type="checkbox" value="videography" />
                            <label>videography</label>
                            <input ref="bothCheckbox" @click="selectServiceType" name="serviceType" id="serviceType-both" class="serviceType-input" type="checkbox" value="photography and videography"/>
                            <label>photography and videography</label>
                        </div>
                        <div class="EventDate">
                            <label class="date" for="EventDate">Date :</label>
                            <input type="date" name="EventDate" placeholder="Event Date" v-model="eventDate" />
                        </div>
                        <input type="text" name="EventType" placeholder="Event Type" v-model="eventType"/>
                        <input type="number" name="HoursofCoverage" placeholder="Hours of Coverage" v-model="hoursOfCoverage"/>
                        <label class="serviceType" for="serviceTypeOptions">How did you hear about me?</label>
                        <select v-model="hdyhau" class="dropdown" name="dropdown" id="dropdown">
                            <option value="google">google</option>
                            <option value="instagram">instagram</option>
                            <option value="word of mouth">word of mouth</option>
                            <option value="youtube">youtube</option>
                            <option value="other">other</option>
                        </select>
                        <textarea name="message" rows="5" placeholder="What do I need to know about this project?" v-model="messageMsg"></textarea>
                        <!--SUBMIT BUTTON-->
                        <div class="btn-and-msg">
                            <button class="submit-button" type="submit" :disabled="!name || !email || !messageMsg">
                                <span class="loading-spinner" v-if="loadingTxt"></span>
                                <span v-if="!loadingTxt" class="btn-text">SEND</span> &nbsp;
                                <span v-if="!loadingTxt" class="btn-arrow"> &#x27F6;</span>
                            </button> 
                            <!--LOADING MESSAGE-->
                            <div v-if="loadingTxt">
                                <p>Delivering your form...</p>
                            </div>
                            <div v-if="msgDelivered">
                                <p>Delivered your form!</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div v-if="faqList.length" class="faq">
                <hr>
                <h2 class="desktop">Frequently Asked Question</h2>
                <h2 class="mobile">FAQ</h2>
                <div
                    v-for="rowIdx in Math.ceil(faqList.length / 3)"
                    :key="rowIdx.etag"
                    :class="`faqWrapper ${rowIdx - 1}`">
                    <Accordion 
                        v-for="faq in faqList.slice((rowIdx - 1) + ((rowIdx - 1) * 2) , ((rowIdx - 1) +((rowIdx - 1) * 2)) + 3)"
                        :key="faq.title"
                        :contents="faq" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Accordion from '../components/Accordion'
import axios from "axios";
import url from '../Api';

export default {
    name: 'Contact',
    components: {
        Navbar,
        Accordion,
    },
    data () {
        return {
            name: '',
            email: '',
            messageMsg: '',
            msgDelivered: false,
            loadingTxt: false,
            phoneNo: '',
            serviceType: 'unset',
            eventDate: '',
            eventType: '',
            hoursOfCoverage: '',
            hdyhau: 'google',
            faqList: '',
        }
    },
    created () {
        let apiURL = `${url}/faq`;
        axios.get(apiURL).then((res) => {
            this.faqList = res.data.Faq;
        });
    },
    methods: {
        sendEmail() {
            this.loadingTxt= true;
            axios.post('https://formspree.io/f/mpzkpoja',{
                from: this.email+ ` -- Name: ${this.name}`,
                _subject: `${this.name} | Message from isaqshoots.com`,
                phoneNo: this.phoneNo,
                serviceType: this.serviceType,
                eventDate: this.eventDate,
                eventType: this.eventType,
                hoursOfCoverage: this.hoursOfCoverage,
                howDidYouHearAboutMe: this.hdyhau,
                message: this.messageMsg,
            }).then((response) => {
                console.log("cantact.vue axios response :",response);
                this.name = '';
                this.email = '';
                this.phoneNo = '';
                this.serviceType = 'unset';
                this.eventDate = '';
                this.eventType = '';
                this.hoursOfCoverage = '';
                this.hdyhau = '';
                this.messageMsg = '';
                this.loadingTxt = false;
                this.msgDelivered = true
                setTimeout(function() {
                    this.msgDelivered = false
                }, 5000);
            }).catch((error) => {
                if (error.response) {
                    this.loadingTxt = false;
                    alert(`There seems to be a slight problem \n ${Object.keys(error.response.data)[0]} : ${JSON.stringify(error.response.data.error)} \n ${Object.keys(error.response.data)[1]} : ${JSON.stringify(error.response.data.errors[0].message)}`);
                }
            })
        },
        selectServiceType(event) {
            if (event.target.checked) {
                this.serviceType = event.target.value
                this.$refs['photographyCheckbox'].checked = false
                this.$refs['videographyCheckbox'].checked = false
                this.$refs['bothCheckbox'].checked = false
                event.target.checked = true
            }else {
                this.serviceType = "unset"
            }
        }
    }
}
</script>

<style scoped>
/* For mobile phones: */

* {
    font-family: 'Poppins', sans-serif;
}

.content-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-bottom: 2vh;
}

.image-container {
    width: 98vw;
    height: 70vh;
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

.contactInfo-form {
    display: flex;
    flex-direction: column;
}

.content-container .contact {
    flex: 1;
    margin: 1vh 6vw 1vh 6vw;
}

.contact h1 {
    font-family: 'Cormorant Garamond', serif;
    color: black;
    font-size: 8vw;
}

.grey {
    font-family: 'Cormorant Garamond', serif;
    color: black;
    opacity: 0.6;
}

.contact .contact-content-wrapper {
    margin: 3vh 0vw 1vh 0vw;
}

.contact-content-wrapper .column {
    margin-top: 4vh;
    display: flex;
    flex-direction: column;
}

.column .row{
    display: flex;
    flex-direction: row;
}

.row p:nth-child(1){
    flex: 2;
}

.row p:nth-child(2){
    flex: 3;
}

.row p a {
    margin-left: 3vw;
}

#instaIcon {
    color: black;
}

#instaIcon:hover {
    color: rgb(242, 114, 178);
}

#utubeIcon {
    color: black;
}

#utubeIcon:hover {
    color: red;
}

.content-container .form-content {
    margin: 8vh 6vw 3vh 6vw;
}

.content-container h2 {
    margin: 1vh;
}

.form-content .form {
    display: flex;
    flex-direction: column;
}

.form .mobile-header{
    font-family: 'Cormorant Garamond', serif;
}

.form input {
    padding: 0 0 0 3px;
    margin-top: 6vh;
    border: none;
    border-bottom: 1px solid black;
    box-shadow: 0px 8px 7px -10px #111;
    width: 78vw;
}

.form .EventDate {
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
    color: rgb(112, 128, 144);
    font-size: 13.6px;
}

.EventDate input{
    margin-top: 1vh;
}

.form .serviceType {
    margin: 3vh 0;
    font-size: .85rem;
    color: slategray;
}

.form .serviceType-options {
    display: flex;
    flex-direction: row;
}

.serviceType-options label {
    font-size: 0.75rem;
}

#serviceType-photography, #serviceType-videography, #serviceType-both {
    margin: 0;
    width: 35px;
}

.form .dropdown {
    width: 78vw;
}

.form textarea {
    margin-top: 5vh;
    border: none;
    border-bottom: 1px solid black;
    box-shadow: 0px 8px 7px -10px #111;
    width: 78vw;
}

.form .btn-and-msg {
    margin-top: 6vh;
    display: flex;
    flex-direction: row;
}

.btn-and-msg .submit-button {
    margin-top: 6vh;
    color: white;
    background-color: black;
    border: 1px solid black;
    border-radius: 0px;
    width: 110px;
    height: 38px;
    position: relative;
    cursor: pointer;
}

.submit-button .loading-spinner{
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
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

.submit-button .btn-text{
    color: white;
}

.submit-button .btn-arrow{
    color: white;
}

.faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.faq hr{
    border-top: 0;
    border-color: #dedede;
    width: 80%;
}
.faqWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 88%;
}

@media only screen and (min-width: 600px) {
    /* For Tablets  */
    
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
    
    .content-container {
        justify-content: space-around;
    }

    .content-container .contactInfo-form{
        margin-top: 1vh;
        display: flex;
        flex-direction: row;
    }

    .content-container .contact {
        flex: 2;
        margin: 1vh 6vw 1vh 6vw;
    }

    .contact h1 {
        font-size: 4vw;
    }

    .contact .contact-content-wrapper {
        margin: 4vh 0vh 0vh 0vh;
    }

    .contact-content-wrapper .column .row p:nth-child(1){
        flex: 1;
    }

    .content-container .form-content {
        flex: 2;
    }

    .form-content .mobile-header {
      display: none;
    }

    .form-content .form input {
        width: 28vw;
    }

    .form-content .dropdown {
        width: 28vw;
    }

    .serviceType-options {
        display: flex;
        flex-direction: row;
    }

    .serviceType-options label {
        font-size: 0.75rem;
    }

    .serviceType-options .serviceType-input {
        margin: 0;
        width: 35px;
    }

    .form-content .form textarea {
        width: 28vw;
    }

    .contact .column .row{
        margin: 1vh 0vw 1vh 0vw;
    }

    .form .btn-and-msg {
        flex-direction: column;
        margin-top: 0vh;
    }

    .faqWrapper {
        flex-direction: row;
    }

    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }
}
</style>