<template>
  <div class="questionnaire">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <md-card>
        <md-card-header>
          <div class="md-title">Question N°</div>
        </md-card-header>

        <md-card-content>
          <md-list>
            <md-list-item>
              <md-checkbox v-model="JPbool1">Réponse 1</md-checkbox>
            </md-list-item>
            <md-list-item>
              <md-checkbox v-model="JPbool2">Réponse 2</md-checkbox>
            </md-list-item>
            <md-list-item>
              <md-checkbox v-model="JPbool3">Réponse 3</md-checkbox>
            </md-list-item>
          </md-list>
        </md-card-content>

        <md-card-actions>
          <router-link to="/questionnaire">
            <md-button>Question suivante</md-button>
          </router-link>
        </md-card-actions>
      </md-card>
      <div class="md-layout-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "questionnaire",
  data: () => ({
    JPbool1: false,
    JPbool2: false,
    JPbool3: false
  })
};
</script>
