<template>
  <div class="home">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">Questionnaire</div>
          </md-card-header>

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
            <router-link to="/questionnaire"><md-button>Commencer le questionnaire</md-button></router-link>
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
  data: () => ({
    maxLength: null,
    JPnom: null,
    JPprenom: null,
    JPsociete: null
  })
}

</script>
