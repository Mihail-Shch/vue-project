<template>
  <div class="card">
    <div
      class="card__close"
      v-if="$route.meta.isFavorite"
      @click="deleteMovie(film)"
    >
      x
    </div>
    <router-link tag="div" class="card-image" :to="`movie/${film.id}`">
      <img :src="`https://image.tmdb.org/t/p/w500${film.backdrop_path}`" />
      <span class="card-title">{{ film.title }}</span>
    </router-link>
    <div class="card-content">
      <p>
        {{ film.overview }}
      </p>
    </div>
    <button class="card__link" @click="addObject(film)" v-if="!checkIfInCart">
      В избранное
    </button>
    <button class="card__link disabled" v-else>Добавлено</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addObject(film) {
      this.$store.dispatch("addToFavorite", film);
    },
    deleteMovie(film) {
      if (window.confirm("Вы действительно хотите удалить этот фильм?")) {
        this.$store.commit("deleteFilm", film);
      }
    },
  },
  computed: {
    ...mapState(["favorite"]),
    checkIfInCart() {
      return !!this.favorite.find((f) => {
        return this.film.id === f.id;
      });
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/card.css");
</style>