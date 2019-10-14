<template>
  <div class="questionnaire">
    <div class="md-layout">
      <div class="md-layout-item"></div>
        <Question JPQuestion="Aimez vous les carottes ?" JPresponse1="OH OUIII" JPresponse2="Moyen" JPresponse3="Jamais de la vie"/>
        <Question JPQuestion="Ta couleur favorite ?" JPresponse1="Vert" JPresponse2="Jaune" JPresponse3="Rouge"/>
      <div class="md-layout-item"></div>
    </div>
  </div>
</template>

<script>
import Question from '@/components/Question.vue'
export default {

  name: 'questionnaire',
  data: () => ({

  }),
  components: {
    Question
  }
}
</script>
