<template>
  <div class="card">
    <div
      class="card__close"
      v-if="currentRouteName == 'Favorite'"
      @click="deleteMovie(film)"
    >
      x
    </div>
    <router-link tag="div" class="card-image" :to="`movie/${film.id}`">
      <img
        :src="`https://image.tmdb.org/t/p/w500${film.backdrop_path}`"
        @click="getInfoAboutMovie(film)"
      />
      <span class="card-title">{{ film.title }}</span>
    </router-link>
    <div class="card-content">
      <p>
        {{ film.overview }}
      </p>
    </div>
    <button class="card__link" @click="addObject(film)" v-if="!isAdded">
      В избранное
    </button>
    <button class="card__link disabled" v-else>Добавлено</button>
  </div>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      require: true,
    },
    isAdded: {
      type: Boolean,
      require: true,
    },
  },
  methods: {
    addObject(film) {
      this.$store.commit("addToCart", film);
      this.isAdded = true;
    },
    deleteMovie(film) {
      if (window.confirm("Вы действительно хотите удалить этот фильм?")) {
        this.$store.commit("deleteFilm", film);
      }
    },
    getInfoAboutMovie(film) {
      this.$store.dispatch("getMovieInfo", film);
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/card.css");
</style>