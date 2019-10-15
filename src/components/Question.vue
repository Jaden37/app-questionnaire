<template>
  <div class="question">
    <md-card>
      <md-card-header>
        <div class="md-title">{{JPQuestion}}</div>
      </md-card-header>

      <md-card-content>
        <md-list>
          <md-list-item>
            <md-checkbox v-model="JPbool1">{{JPresponse1}}</md-checkbox>
          </md-list-item>
          <md-list-item>
            <md-checkbox v-model="JPbool2">{{JPresponse2}}</md-checkbox>
          </md-list-item>
          <md-list-item>
            <md-checkbox v-model="JPbool3">{{JPresponse3}}</md-checkbox>
          </md-list-item>
        </md-list>
      </md-card-content>

      <md-card-actions>
        <router-link to="/questionnaire">
          <md-button>Question suivante</md-button>
        </router-link>
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
  props: {
    JPQuestion: String,
    JPresponse1: String,
    JPresponse2: String,
    JPresponse3: String
  }
}
</script>
