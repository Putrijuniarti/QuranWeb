<template>
  <li style="text-decoration: none" v-for = "(item, index) in infoayat">
    <h2>{{item.text_uthmani}}</h2>
    <p v-html= "infoarti[index].text"> </p>
  </li>

</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
export default {
  data() {
    return {
      infoayat: ref([]),
      infoarti : ref ([])
    }
  },
  mounted() {
    this.getinfoayat(),
        this.getinfoarti()
  },
  methods: {
    getinfoayat() {
      axios.get('\n' + `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${this.$route.params.id}`)
          .then((respons) => {
            console.log(respons)
            this.infoayat = respons.data.verses
          }).catch((err) => {
        console.log('error' + err)
      })
    },
    getinfoarti() {
      axios.get('\n' + `https://api.quran.com/api/v4/quran/translations/33?chapter_number=${this.$route.params.id}`)
          .then((respons) => {
            console.log(respons)
            this.infoarti = respons.data.translations
          }).catch((err) => {
        console.log('error' + err)
      })
    }
  }
}
</script>

<style scoped>
h2 {
  text-orientation: upright;
  font-size: 30pt;
  text-align: right;
}

p {
  font-size: 15pt;
}
</style>