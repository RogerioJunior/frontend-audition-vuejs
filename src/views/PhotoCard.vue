<template>
 <div id="photo-card">
  <div id="container-photo-card">
    <div class="photo-card" v-for="(photo, i) in this.loadPhotos(this.end)" :key="i">
         <img :src="photo.url">
         <div class="title">{{photo.title}}</div>
    </div>
  </div>
          <div id="button-container">
      <button id="button" class="button-more-photos" onclick="loadMorePhotos()">
        Load more photos
      </button>
    </div>
  </div>
</template>


<script>

    export default {
        components: {

        },

        props: [
            'arrayPhotos'
        ],

        data () {
            return {
                end: 20
            }

        },

        methods: {

            loadPhotos(end) {
                return this.arrayPhotos.slice(0, end);
            }


        }
    }
</script>

<style lang="css" src="../assets/css/photo-card.css"></style>