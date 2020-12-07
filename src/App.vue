<template>
  <v-app>
    <div class="app">
      <div class="app-head">
        <app-head></app-head>
      </div>
      <div class="app-nav">
        <app-nav></app-nav>
      </div>
      <div class="app-body">
        <router-view/>
      </div>

      <div class="app-footer">
        <app-footer></app-footer>
      </div>
    </div>
    
  </v-app>
</template>

<script>
import AppHead from './components/app/AppHead.vue';
import AppNav from '@/components/app/AppNav.vue';
import AppFooter from './components/app/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppHead,
    AppNav,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>

html, body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  a { text-decoration: none; }
}
.app {
  font-family: 'Roboto', sans-serif;
  display: grid;
  grid-template-areas: "app-head app-head" "app-nav app-body" "app-footer app-footer";
  grid-template-rows: 80px calc(100vh - 116px) 20px;
  grid-template-columns: auto 1fr;
  gap: 8px;
  min-width: 1024px;
  max-width: 1240px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  
  &-head {
    grid-area: app-head;
    // margin-bottom: 3px;
    border: thin solid red;
  }
  &-nav {
    grid-area: app-nav;
    height: 100%;
    // margin-right: 1.5px;
    // border: thin solid green;
  }
  &-body {
    grid-area: app-body;
    // margin-left: 1.5px;
    // border: thin solid purple;
  }
  &-footer {
    grid-area: app-footer;
    // margin-top: 3px;
    // border: thin solid blue;
  }
}
</style>