<template>
 <div id="photo-list">
  <div id="container-photo-list">
      <ul v-for="(photo, i) in this.loadPhotos(this.end)" :key="i">
          <li><img :src="photo.thumbnailUrl"></li>
          <li>Id: {{photo.id}}</li>
          <li> Titulo: {{photo.title}}</li>
    </ul>
  </div>
          <div id="button-container">
      <button id="button" class="button-more-photos" @click="loadMorePhotos()">
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
            },

            loadMorePhotos() {
                this.$nextTick(() => {
                    this.$set(this, 'end', this.end + 10)
                });
            }


        }
    }
</script>

<style lang="css" src="../assets/css/photo-list.css"></style>