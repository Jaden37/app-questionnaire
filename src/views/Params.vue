<template>
  <div class="params">
    <div class="md-layout md-alignment-center">
      <div class="md-layout-item md-layout-item md-size-60">
        <md-card>
          <md-card-header>
            <div class="md-title">Paramètres du questionnaire</div>
          </md-card-header>
          <md-card-content>
              Nombre de questions :
              <vue-range-slider ref="slider" v-model="JPnbrquestion" min="1" max="10" range="10"></vue-range-slider>
            <md-switch v-model="JPrandom" class="md-primary">Question aléatoire</md-switch>
          </md-card-content>

          <md-card-actions>
            <!-- bouton qui valide le questionnaire avec les paramètres choisi 13/11/2019 -->
            <md-button v-on:click="sendParams" class="md-raised md-primary">Commencer le questionnaire</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'params',
  data: () => ({
    JPrandom: false,
    JPnbrquestion: 4
  }),
  methods: {
    // fonction qui redirige vers le questionnaire avec les paramètres choisi 14/11/2019
    sendParams () {
      this.$router.push({ name: 'questionnaire', query: { JPrandom: this.JPrandom, JPnbrquestion: this.JPnbrquestion } })
    }
  }
}

</script>
