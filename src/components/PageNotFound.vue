<template>
  <div class="page-not-found">
    <h2><span class="orange">I</span>SAQSHOOTS</h2>
    <h1>4<span class="orange">0</span>4</h1>
    <h3>Page Not Found</h3>
    <button @click="goBack" class="btn">Go Back!</button>
  </div>
</template>

<script>

export default {
    name: "PageNotFound",
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    }
}
</script>

<style scoped>

.page-not-found {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.page-not-found h1 {
    font-size: 15vh;
}

.page-not-found h3 {
    font-size: 8vh;
}

.orange {
    /* font-family: 'Cormorant Garamond', serif; */
    color: #FF7A00;
}

.btn {
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

</style>