import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    selectedSongIndex : 0,
    songList:[],
    menuIsShow:false,
}
const mutations = {
    SELECT_SONG(state,index){
      state.selectedSongIndex = index;
    },
    SONGS_LIST(state,songs){
      state.songList=songs;
    },
    SHOW_MENU(state,flag){
      state.menuIsShow = flag;
    }
}
const actions = {
    setSelectedSongIndex({commit},songIndex){
      commit('SELECT_SONG',songIndex)
    },
    setSongsList({commit},songs){
      commit('SONGS_LIST',songs)
    },
    showMenu({commit},flag){
      commit('SHOW_MENU',flag)
    }
}
const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
