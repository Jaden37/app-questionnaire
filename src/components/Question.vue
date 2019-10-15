<template>
  <div class="question">
    <md-card>
      <md-card-header>
        <!-- on récupère le titre passé dans l'objet 15/10/2019 -->
      <div class="md-title">{{JPquestion.name}}</div>
      </md-card-header>

      <md-card-content>
        <md-list>
          <!-- boucle sur les différentes réponses possibles 15/10/2019 -->
          <md-list-item v-for="answer in JPquestion.answers" v-bind:key="answer">
            <md-checkbox v-model="JPbool1">{{answer}}</md-checkbox>
          </md-list-item>
        </md-list>
      </md-card-content>

      <md-card-actions>

      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  // Toutes les cases sont par défaut décochées 14/10/2019
  data: () => ({
    JPbool1: false,
    JPbool2: false,
    JPbool3: false
  }),
  // Properties qui seront données en paramètre lors de l'utilisation du component 14/10/2019
  // Transformations des propriétes en un objet unique 15/10/2019
  props: {
    JPquestion: Object
  }
}
</script>
