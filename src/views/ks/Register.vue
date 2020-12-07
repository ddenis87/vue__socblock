<template>
  <v-card>
    <v-tabs v-model="tab" right color="indigo">
      <v-tab>Регистрация обращений</v-tab>
      <v-tab>Закрытие обращений</v-tab>
      <v-tab>Реестр обращений</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-divider></v-divider>
        <register-card></register-card>
      </v-tab-item>
      <v-tab-item>
        <v-divider></v-divider>
        Closed
      </v-tab-item>
      <v-tab-item>
        <v-divider></v-divider>
        <register-list></register-list>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import RegisterCard from '@/components/ks/RegisterCard.vue';
import RegisterList from '@/components/ks/RegisterList.vue';

export default {
  name: 'Register',
  components: {
    RegisterCard,
    RegisterList,
  },
  data() {
    return {
      tab: null
    }
  },
  watch: {
    tab() { 
      (this.tab == 2) ? this.$store.commit('SET_NAVIGATION_EXPAND', true) : this.$store.commit('SET_NAVIGATION_EXPAND', false);
    }
  },
}
</script>