<template>
  <div class="container">
    <div class="films-wrapper">
      <Card
        v-for="(film, index) in allFilms"
        :key="film.id"
        :film="film"
        :isAdded="getArrayOfAdded[index]"
      />
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
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  async mounted() {
    this.$store.dispatch("getFilms", 1);
  },
  computed: mapGetters(["allFilms", "getArrayOfAdded"]),
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
