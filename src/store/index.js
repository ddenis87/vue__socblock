import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navigationExpand: false,
    requestReesterHeaders: [
      {text: '№ п/п', value: 'id'},
      {text: 'Фамилия Имя Отчетсво', value: 'fio'},
      {text: 'СНИЛС', value: 'snils'},
      {text: 'Способ обращения', value: 'way'},
      {text: 'Основание обращения', value: 'base'},
      {text: 'Дата обращения', value: 'date'},
      {text: 'Дата выдачи', value: 'dateClose'},
    ],
    requestReester: [
      {id: '1', fio: 'Архипова Инара Христофоровна', snils: '000-000-000 25', way: 'Обращение в КС', base: 'Первичное получение', date: '24.11.2020', spec: 'Ivanova I.I.', dateClose: '25.11.2020', specClose: 'Ivanova I.I.'},
      {id: '2', fio: 'Степанова Радмила Созоновна', snils: '154-147-158 75', way: 'Обращение в КС', base: 'Первичное получение', date: '25.11.2020', spec: 'Ivanova I.I.', dateClose: '28.11.2020', specClose: 'Petrova P.P.'},
      {id: '3', fio: 'Сазонова София Николаевна', snils: '999-888-777 66', way: 'Обращение в КС', base: 'Замена', date: '01.12.2020', spec: 'Sidorova S.Y', dateClose: '04.12.2020', specClose: 'Sidorova S.Y'},
      {id: '4', fio: 'Хохлова Анастасия Геласьевна', snils: '258-587-575 52', way: 'По телефону', base: 'Первичное получение', date: '01.12.2020', spec: 'Sidorova S.Y', dateClose: '', specClose: ''},
      {id: '5', fio: 'Дмитриева Келен Мэлоровна', snils: '256-741-658 32', way: 'Портал ГосУслуг', base: 'Замена', date: '05.12.2020', spec: 'Ivanova S.V.', dateClose: '06.12.2020', specClose: 'Ivanova S.V.'},
      {id: '6', fio: 'Киселёва Арьяна Святославовна', snils: '325-451-357 68', way: 'Email', base: 'Замена', date: '05.12.2020', spec: 'Sidor K.I.', dateClose: '', specClose: ''},
    ]
  },
  getters: {
    GET_NAVIGATION_EXPAND(state) { return state.navigationExpand; },
    GET_DATA_HEADERS(state) { return state.requestReesterHeaders; },
    GET_DATA(state) { return state.requestReester; },
  },
  mutations: {
    SET_NAVIGATION_EXPAND(state, option) {
      state.navigationExpand = option;
    },
    ADD_DATA(state, option) {
      state.requestReester.push(option);
    }
  },
  actions: {
  },
  modules: {
  }
})
