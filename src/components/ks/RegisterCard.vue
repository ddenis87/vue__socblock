<template>
  <div class="ks-register-card">
    <h3 class="ks-register-card__title">Карточка регистрации обращения</h3>
    <!-- <v-card  class="ks-register-card"> -->
      <!-- <v-card-title>Карточка регистрации обращения</v-card-title> -->
      <v-form ref="registerCardForm">
      <v-container>
        <v-row dense>
          <v-col cols="12"><v-select dense
                                     label="Территориальный орган"></v-select></v-col>
        </v-row>
        <v-row dense>
          <v-col cols="6"><v-text-field dense
                                        required
                                        label="ФИО" 
                                        v-model="registerPerson.fio"></v-text-field></v-col>
        </v-row>
        <v-row dense>
          <v-col cols="6"><v-text-field dense 
                                        required 
                                        label="СНИЛС"
                                        v-model="registerPerson.snils"></v-text-field></v-col>
          <v-col cols="6"></v-col>
        </v-row>
        <v-row dense>
          <v-col cols="6"><v-select dense 
                                    label="Способ обращения"
                                    v-model="registerPerson.way"
                                    :items="requestWayItems"
                                    :item-value="requestWayItems.value"
                                    :item-text="requestWayItems.text"></v-select></v-col>
          <v-col cols="6"></v-col>
        </v-row>
        <v-row dense>
          <v-col cols="6"><v-select dense 
                                    label="Основание получения/замены"
                                    v-model="registerPerson.base"
                                    :items="requestBaseItems"
                                    :item-value="requestBaseItems.value"
                                    :item-text="requestBaseItems.text"></v-select></v-col>
          <v-col cols="6"></v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" class="control">
            <v-btn x-small 
                   color="red lighten-1" 
                   class="control__btn"
                   @click="$refs.registerCardForm.reset()">Очистить форму</v-btn>
            <v-btn small
                   color="indigo lighten-1" 
                   class="control__btn"
                   @click="appendAppeal">Зарегистрировать обращение</v-btn>
          </v-col>
        </v-row>
      </v-container>
      </v-form>
    <!-- </v-card> -->
  </div>
</template>

<script>
import RegisterCardDialogDate from './RegisterCardDialogDate.vue'
export default {
  name: 'RegisterCard',
  components: {
    RegisterCardDialogDate,
  },
  data() {
    return {
      registerPerson: {fio: null, snils: null, way: null, base: null},
      requestWayItems: [
        {value: 'Обращение в КС', text: 'Обращение в КС'},
        {value: 'Портал ПФР', text: 'Портал ПФР'},
        {value: 'По телефону', text: 'По телефону'},
        {value: 'Email', text: 'Email'},
        {value: 'Факс', text: 'Факс'},
      ],
      requestBaseItems: [
        {value: 'Первичное получение', text: 'Первичное получение'},
        {value: 'Утеря', text: 'Утеря'},
      ],
    }
  },
  methods: {
    appendAppeal() {
      console.log(this.registerPerson);
      this.$store.commit('ADD_DATA', this.registerPerson);
    },
  },
}
</script>

<style lang="scss" scoped>
.ks-register-card {
  // padding: 10px;
  // border: thin solid red;
  &__title {
    margin: 10px 26px;
  }
  .control {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 8px;
    &__btn {
      margin-left: 20px;
      color: #FFFFFF;
    }
  }
}
</style>