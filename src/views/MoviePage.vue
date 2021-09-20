<template>
  <div class="container flex" v-if="!isLoading && movieItem">
    <Card :film="movieItem" />
    <div class="card__desc">
      <h1 class="card__desc-title">MOVIE INFO:</h1>
      <p>Budget: {{ movieItem.budget }}$.</p>
      <p>Runtime: {{ movieItem.runtime }} minutes.</p>
      <p>
        Genres:
        <button v-for="genre in movieItem.genres" :key="genre.id" class="genre">
          {{ genre.name }}
        </button>
      </p>
      <p>Release date: {{ movieItem.release_date }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      movieItem: null,
    };
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  components: {
    Card,
  },
  async created() {
    const selectedFilmId = parseInt(this.$route.params.id);
    this.movieItem = await this.$store.dispatch("getMovieInfo", selectedFilmId);
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}

.card {
  height: 700px;
  width: 50%;
  margin-right: 50px;
}

.card__desc {
  width: 50%;
  text-align: left;
}

.card__desc-title {
  margin: 0;
  font-size: 30px;
  margin-bottom: 20px;
}

.card__desc p {
  margin: 0;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 25px;
}

.genre {
  background: 0;
  padding: 6px 11px;
  border-radius: 30px;
  margin-right: 15px;
}
</style>