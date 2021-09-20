<template>
  <div class="container">
    <div class="films-wrapper">
      <Card
        v-for="film in favorite"
        :key="film.id"
        :film="film"
        :isAdded="true"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Card from "../components/Card.vue";

export default {
  computed: mapState(["favorite"]),
  components: {
    Card,
  },
};
</script>

