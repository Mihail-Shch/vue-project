<template>
  <div class="card">
    <div class="card__close" v-if="isAdded" @click="deleteMovie(film)">x</div>
    <div class="card-image">
      <img :src="`https://image.tmdb.org/t/p/w500${film.backdrop_path}`" />
      <span class="card-title">{{ film.title }}</span>
    </div>
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
  },
};
</script>

<style scoped>
@import url("../assets/css/card.css");
</style>