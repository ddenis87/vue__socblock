<template>
  <div class="register-list">
    <h3 class="register-list__title">Реестр обращений</h3>
    <v-data-table disable-sort
                  disable-pagination
                  disable-filtering
                  hide-default-footer
                  :headers="registerListHeaders"
                  :items="registerList" ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'RegisterList',
  data() {
    return {
    }
  },
  computed: {
    registerListHeaders() { return this.$store.getters.GET_DATA_HEADERS; },
    registerList() { return this.$store.getters.GET_DATA; },
  },
}
</script>

<style lang="scss" scoped>
.register-list {
  &__title {
    margin: 10px 26px;
  }
}
</style>