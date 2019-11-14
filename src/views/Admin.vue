<template>
  <div class="admin">
    <div v-if="!JPadminMode" class="md-layout md-alignment-center">
      <md-card>
          <md-card-header>
            <div class="md-title">Informations personnelles</div>
          </md-card-header>
          <!-- Création du formulaire de saisi du mot de passe 14/11/2019 -->
          <md-card-content>
            <md-field>
              <label>Mot de passe admin</label>
              <md-input v-model="JPpassword" maxlength="40" type="password"></md-input>
            </md-field>
          </md-card-content>

          <md-card-actions>
            <!-- SnackBar qui apparait si le mot de passe est faux 14/11/2019 -->
            <form novalidate @submit.stop.prevent="showSnackbar = true">
              <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
                <span>Mauvais mot de passe.</span>
                <md-button class="md-primary" @click="showSnackbar = false">Ressayer</md-button>
              </md-snackbar>
            <!-- validation du mot de passe 14/11/2019 -->
            <md-button class="md-primary md-raised" v-on:click="checkPassword">Valider</md-button>
            </form>
          </md-card-actions>
        </md-card>
    </div>
    <div v-else>
      <h1>Liste de toutes les personnes dans la Base de Données</h1>
      <!-- affichage des personnes présentes dans la BDD 08/11/2019 -->
      <div class="md-layout md-alignment-center">
        <md-table v-model="JPpersons.rows" md-card style="text-align: left;" class="md-layout-item md-size-60">
          <md-table-toolbar>
            <h1 class="md-title">Users</h1>
          </md-table-toolbar>
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="Nom">{{ item.doc.JPfirstname }}</md-table-cell>
            <md-table-cell md-label="Prenom">{{ item.doc.JPlastname }}</md-table-cell>
            <md-table-cell md-label="Société">{{ item.doc.JPsociety }}</md-table-cell>
            <md-table-cell md-label="Dernier Score">{{ item.doc.JPlastHighScore }}</md-table-cell>
            <md-table-cell md-label="Dernière partie jouée">{{ item.doc.JPlastPlayed }}</md-table-cell>
            <!-- bouton de suppression d'un utilisateur 10/11/2019 -->
            <md-table-cell md-label="Modifier"><md-button v-on:click="editPerson(item.id)" class="md-raised md-primary">+10 au Score</md-button></md-table-cell>
            <md-table-cell md-label="Supprimer"><md-button v-on:click="deletePerson(item.id)" class="md-raised md-accent"><md-icon>delete</md-icon></md-button></md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'admin',
  data: () => ({
    JPpersons: Object,
    JPadminMode: false,
    JPerrormessage: false,
    JPpassword: '',
    showSnackbar: false,
    position: 'center',
    duration: 4000,
    isInfinity: false
  }),
  methods: {
    // get toutes les personnes de la base de données 07/11/2019
    getAllPersons: function () {
      var that = this
      this.$JPdb.allDocs({ include_docs: true, attachments: true })
        .then(function (result) {
          console.log(result)
          // on enregistre les personnes reçues depuis la BDD 08/11/2019
          that.JPpersons = result
        }).catch(function (err) {
          console.log(err)
        })
      console.log(this.persons)
    },
    // ajout fonctionnalité suppression d'un utilisateur 10/11/2019
    deletePerson: function (JPpersonId) {
      var that = this
      this.$JPdb.get(JPpersonId).then(function (doc) {
        that.$JPdb.remove(doc)
        that.getAllPersons()
      })
    },
    // lors de l'appui sur le bouton, set le score de l'utilisateur à +10 (inutile mais à permis de tester l'update) 10/11/2019
    editPerson: function (JPpersonId) {
      var that = this
      this.$JPdb.get(JPpersonId).then(function (doc) {
        doc.JPlastHighScore = doc.JPlastHighScore + 10
        doc.JPlastPlayed = new Date()
        that.$JPdb.put(doc, function callback (err, result) {
          if (!err) {
            console.log('Successfully modified a person')
            console.log(result)
            that.getAllPersons()
          } else {
            console.log(err)
          }
        })
      }).catch(function (err) {
        console.log(err)
      })
    },
    // fonction qui check si le bon mot de passe est rentré 14/11/2019
    checkPassword: function () {
      if (this.JPpassword === 'Vue-Epsi') {
        this.JPadminMode = true
      } else {
        this.showSnackbar = true
      }
    }
  },
  beforeMount () {
    // appel de la fonction getAllPersons avant le chargement de la page 10/11/2019
    this.getAllPersons()
  }
}

</script>
