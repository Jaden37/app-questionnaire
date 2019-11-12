<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
    <!-- Ajout d'un footer de fin de page pour personnaliser le projet (idée de Anaïs Tatibouët) 10/11/2019 -->
    <div id="footer">
      <p>Jules PEGUET</p>
      <p>
          <b>TP App Questionnaire (Vue JS)</b>
      </p>
      <p>B3 Classe 2 DEV - 2019</p>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #398e87;
    }
  }
}

// CSS du footer
#footer {
    position: absolute;
    bottom: 0;
    background-color: #398e87;
    width: 100%;
    display: flex;
    padding: 0 20px;
    color: white;
    justify-content: space-between;
}
</style>
