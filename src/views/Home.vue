<template>
  <div class="container">
    <div class="films-wrapper">
      <Card v-for="film in films" :key="film.id" :film="film" />
    </div>
    <paginate
      :page-count="20"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :click-handler="getMovies"
    >
    </paginate>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  async created() {
    this.$store.dispatch("getFilms", 1);
  },
  computed: mapState(["films"]),
  methods: {
    getMovies(e) {
      this.$store.dispatch("getFilms", e);
    },
  },
};
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
