<template>
  <div id="app">
    <div id="title">
      Photo Library
      <div class="action-container">
        <input id="search" type="text" placeholder="search" />
        <router-link :to="{name: 'PhotoCard', params: {arrayPhotos: photos}}">
          <button class="btn-list">
            <i class="fa fa-th fa-2x" aria-hidden="true"></i>
          </button>
        </router-link>

        <router-link to="/photo-card">
          <button class="btn-list">
            <i class="fa fa-list fa-2x"></i></button>
        </router-link>
      </div>
    </div>
    <div class="title-spacing"></div>
      <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  title: "Main",

  data() {
    return {
      photos: [],
    };
  },

  mounted() {
    this.load();
  },

  methods: {
    async load() {
      this.photos = await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.data.slice(0, 500))
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>


<style lang="css" src="./assets/css/app.css"></style>
