<template>
    <v-menu
      ref="startMenu"
      :close-on-content-click="false"
      :return-value.sync="trip.start"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="trip.start"
          label="Дата обращения"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          dense
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
        locale="ru"
        first-day-of-week="1"
      >
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="$refs.startMenu.isActive = false"
        >
          Отменить
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.startMenu.save(date)"
        >
          Установить
        </v-btn>
      </v-date-picker>
    </v-menu>
</template>

<script>
export default {
  name: 'RegisterCardDialogDate',
  data() {
    return {
      date: null,
      trip: {start: null},
    }
  },
}
</script>

<style lang="scss" scoped>
.date {
  padding: 0;
  margin: 0;
}
</style>