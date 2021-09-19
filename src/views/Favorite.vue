<template>
  <div class="container">
    <div class="films-wrapper">
      <Card
        v-for="film in getFavorite"
        :key="film.id"
        :film="film"
        :isAdded="true"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";

export default {
  computed: mapGetters(["getFavorite"]),
  components: {
    Card,
  },
};
</script>

