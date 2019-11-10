<template>
  <div class="admin">
    <h1>Liste de toutes les personnes dans la Base de Données</h1>
    <!-- affichage des personnes présentes dans la BDD 08/11/2019 -->
    <div class="md-layout md-alignment-center">
      <md-table v-model="JPpersons.rows" md-card style="text-align: left;" class="md-layout-item md-size-40">
        <md-table-toolbar>
          <h1 class="md-title">Users</h1>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Nom">{{ item.doc.JPfirstname }}</md-table-cell>
          <md-table-cell md-label="Prenom">{{ item.doc.JPlastname }}</md-table-cell>
          <md-table-cell md-label="Société">{{ item.doc.JPsociety }}</md-table-cell>
          <!-- bouton de suppression d'un utilisateur 10/11/2019 -->
          <md-table-cell md-label="Supprimer"><md-button v-on:click="deletePerson(item.id)" class="md-raised md-accent"><md-icon>delete</md-icon></md-button></md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'admin',
  data: () => ({
    JPpersons: Object
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
    }
  },
  beforeMount () {
    // appel de la fonction getAllPersons avant le chargement de la page 10/11/2019
    this.getAllPersons()
  }
}

</script>
