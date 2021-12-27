<template>
  <div id="app">
    <div id="title">
      Photo Library
      <div class="action-container">
        <input v-model="search" id="search" type="text" placeholder="search" />
        <router-link
          :to="{ name: 'PhotoCard', params: { arrayPhotos: photos } }"
        >
          <button
            class="btn-card"
            :class="{ 'is-active': btnCard }"
            @click="(currentRoute = 'PhotoCard'), setBtnCard('PhotoCard')"
          >
            <i class="fa fa-th fa-2x" aria-hidden="true"></i>
          </button>
        </router-link>
        <router-link
          :to="{ name: 'PhotoList', params: { arrayPhotos: photos } }"
        >
          <button
            class="btn-list"
            :class="{ 'is-active': btnList }"
            @click="(currentRoute = 'PhotoList'), setBtnList('PhotoList')"
          >
            <i class="fa fa-list fa-2x"></i>
          </button>
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
  name: "PhotoLibrary",

  data() {
    return {
      photos: [],
      photosFilter: [],
      search: "",
      currentRoute: "",
      btnCard: false,
      btnList: false,
    };
  },

  mounted() {
    this.load();
  },

  watch: {
    search(newValue) {
      this.$emit("search", newValue);
      this.searchFilter(this.search);
    },
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

    async searchFilter(query) {
      this.photosFilter = await this.photos.filter(
        (photo) => photo.title.toLowerCase().indexOf(query.toLowerCase()) > -1
      );

      this.$router
        .push({ path: "/" })
        .then(() =>
          this.$router.replace({
            name: this.currentRoute,
            params: { arrayPhotos: this.photosFilter },
          })
        )
        .catch((e) => {
          console.log(e);
        });
      console.log(this.photosFilter);
    },

    setBtnCard(route) {
      if (route != this.$router.history.current.name) {
        this.$set(this, "search", "");
        this.$set(this, "btnCard", true);
        this.$set(this, "btnList", false);
      }
    },

    setBtnList(route) {
      if (route != this.$router.history.current.name) {
        this.$set(this, "search", "");
        this.$set(this, "btnCard", false);
        this.$set(this, "btnList", true);
      }
    },
  },
};
</script>


<style lang="css" src="./assets/css/app.css"></style>
