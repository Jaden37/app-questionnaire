<template>
  <div class="home">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">Questionnaire</div>
          </md-card-header>
          <!-- Création du formulaire d'inscription de l'utilisateur 14/10/2019-->
          <md-card-content>
            <md-field>
              <label>Nom</label>
              <md-input v-model="JPnom" maxlength="40" required></md-input>
            </md-field>
            <md-field>
              <label>Prénom</label>
              <md-input v-model="JPprenom" maxlength="40" required></md-input>
            </md-field>
            <md-field>
              <label>Société</label>
              <md-input v-model="JPsociete" maxlength="50" required></md-input>
            </md-field>
          </md-card-content>

          <md-card-actions>
            <!-- bouton de redicrection vers le questionnaire 14/10/2019 -->
            <router-link to="/questionnaire"><md-button v-on:click="addPerson" class="md-raised md-primary">Commencer le questionnaire</md-button></router-link>
          </md-card-actions>
        </md-card>
      </div>
      <div class="md-layout-item"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  // Intégration des data que l'utilisateur saisi 14/10/2019
  data: () => ({
    maxLength: null,
    JPnom: null,
    JPprenom: null,
    JPsociete: null
  }),
  methods: {
    // fonction qui permet d'ajout une personne à la base de données 07/11/2019
    addPerson: function () {
      var JPperson = {
        _id: new Date().toISOString(),
        JPfirstname: this.JPnom,
        JPlastname: this.JPprenom,
        JPsociety: this.JPsociete,
        JPlastHighScore: null,
        JPlastPlayed: null
      }
      console.log(JPperson)
      this.$JPdb.put(JPperson, function callback (err, result) {
        if (!err) {
          console.log('Successfully posted a person')
        }
      })
      // set du l'ID du nouveau user dans un cookie 10/11/2019
      this.$cookies.set('id_user', JPperson._id, '1d')
      console.log(this.$cookies.get('id_user'))
    }
  }
}

</script>
