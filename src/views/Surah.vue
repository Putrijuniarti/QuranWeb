<template>

  <div class="surah">

    <li v-for="item in listSurah">
      <h3>{{ item.id + '. ' + item.name_simple + ' | '}}
        {{item.verses_count + ' Ayat' }}</h3>

      <router-link :to="{name: 'ayat', params: {id: item.id}}" class="Baca">Baca</router-link>
    </li>

  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {

  data() {
    return {
      listSurah: ref([])
    }
  },

  mounted() {
    this.getListSurah()
  },

  methods: {
    getListSurah() {
      axios.get('https://api.quran.com/api/v4/chapters?language=id' + this.$route.params.id)
          .then((response) => {
            console.log(response)
            this.listSurah = response.data.chapters
          }).catch ((err) => {
        console.log(err)
      })
    }
  }
}

</script>

<style>



li {
  list-style: none;
  padding-left: 20pt;
  padding-top: 20pt;
}

.title {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 35pt;
}

.name_arabic {
  float: right;
  padding-right: 20pt;
}

.baca {
  font-size: 15pt;
  padding-left: 420pt;
  -webkit-text-fill-color: black;
  text-decoration: none;
}

.text-black {
  font-size: 15pt;
}

</style>