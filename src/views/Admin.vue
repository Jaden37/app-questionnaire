<template>
  <div class="admin">
    <h1>Liste de toutes les personnes dans la Base de Données</h1>
    <md-button v-on:click="getAllPersons" class="md-raised md-primary">Get Persons</md-button>
    {{persons}}
  </div>
</template>

<script>

export default {
  name: 'admin',
  data: () => ({
    persons: Object
  }),
  methods: {
    // get toutes les personnes de la base de données 07/11/2019
    getAllPersons: function () {
      // this.persons = this.$JPdb.allDocs({include_docs: true, attachments: true})

      // this.person = this.$JPdb.allDocs({ include_docs: true, attachments: true })
      //   .then(function (result) {
      //     console.log(result)
      //     return result
      //   }).catch(function (err) {
      //     console.log(err)
      //   })

      this.persons = this.$JPdb.allDocs({
        include_docs: true,
        attachments: true,
      }, function(err, response) {
        if (err) { return console.log(err) }
        else { return response }
      })
      console.log(this.persons)
    }
  }
}

</script>
