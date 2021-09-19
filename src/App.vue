<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная</router-link> |
      <router-link to="/favorite" class="nav__link-favorite"
        >Избранное
        <span class="nav__link-favorite-tooltip">{{
          getNumberMoviesInCart
        }}</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getNumberMoviesInCart"]),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ebeeff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  border-bottom: 1px solid #000;
}

.nav__link-favorite {
  position: relative;
}

.nav__link-favorite-tooltip {
  display: block;
  font-size: 10px;

  height: 15px;
  width: 15px;
  border-radius: 15px;
  background-color: #000;
  color: #fff;

  position: absolute;
  top: -5px;
  right: -15px;
}
</style>
