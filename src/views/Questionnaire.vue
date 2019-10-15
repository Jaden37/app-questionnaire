<template>
  <!-- Création de mon question avec mes layout 14/10/2019-->
  <div class="questionnaire">
    <div class="md-layout">
      <div class="md-layout-item"></div>
        <!-- Utilisation  des mes components passage en paramètres des questions et réponses 14/10/2019-->
        <Question JPQuestion="Aimez vous les carottes ?" JPresponse1="OH OUIII" JPresponse2="Moyen" JPresponse3="Jamais de la vie"/>
        <Question JPQuestion="Ta couleur favorite ?" JPresponse1="Vert" JPresponse2="Jaune" JPresponse3="Rouge"/>
      <div class="md-layout-item"></div>
    </div>
  </div>
</template>

<script>
// importation de mon component 14/10/2019
import Question from '@/components/Question.vue'
export default {

  name: 'questionnaire',
  data: () => ({
  }),
  // ajout de mon component dans la liste 14/10/2019
  components: {
    Question
  }
}
</script>
