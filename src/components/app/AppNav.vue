<template>
  <div class="nav">
    <v-card  height="auto"
    width="auto">
      <v-navigation-drawer permanent :expand-on-hover="navigationExpand">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              <v-icon>mdi-menu</v-icon> Меню
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list  nav>
          
          <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
            <!-- <router-link :to="item.link" tag="div"> -->
              <v-list-item-icon>
                <v-icon class="icon">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            <!-- </router-link> -->
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      items: [
        {link: '', title: 'Оценка ПП ЗЛ', icon: 'mdi-chart-bar' },
        {link: '/ks', title: 'КС', icon: 'mdi-face-agent' },
        {link: '/', title: 'На главную', icon: 'mdi-home' },
      ],
    }
  },
  computed: {
    navigationExpand() { return this.$store.getters.GET_NAVIGATION_EXPAND; }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  .icon {
    margin-right: 10px;
  }
}
</style>