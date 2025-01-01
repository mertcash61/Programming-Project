<template>
  <div class="home">
    <h1>Programlama Dilleri</h1>
    <div class="languages-grid">
      <LanguageCard 
        v-for="language in languages"
        :key="language.id"
        :language="language"
      />
    </div>
  </div>
</template>

<script>
import LanguageCard from '../components/LanguageCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    LanguageCard
  },
  computed: {
    ...mapState(['languages'])
  }
}
</script> 