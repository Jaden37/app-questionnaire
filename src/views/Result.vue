<template>
  <div class="home">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">Votre Résultat</div>
          </md-card-header>
          <!-- affichage du résultat de l'utilisateur 05/11/2019 -->
          <md-card-content>
            {{JPTotal}} / {{JPnbrquestion}}
            <br>
            <!-- affiche une image en fonction du score par rapport au nombre de questions 05/11/2019 -->
            <div v-if="JPTotal > JPnbrquestion/2">
                <img src="img/trophy.png" height="50" width="50">
            </div>
            <div v-else>
                <img src="img/fail.png" height="50" width="50">
            </div>
          </md-card-content>

          <md-card-actions>
            <!-- bouton de redirection vers la page home 05/11/2019 -->
            <router-link to="/"><md-button class="md-raised md-primary">Fin</md-button></router-link>
          </md-card-actions>
        </md-card>
      </div>
      <div class="md-layout-item"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'result',
  data: () => ({
    JPTotal: Number,
    JPnbrquestion: Number
  }),
  mounted () {
    this.JPTotal = this.$route.query.JPTotal
    this.JPnbrquestion = this.$route.query.JPnbrquestion
  }
}

</script>
