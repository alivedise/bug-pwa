<template>
  <div id="app">
    <div class="hero">
      I am Bug &#60;3
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
body {
  background-color: #0186d1;
}
.hero {
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  color: white;
  background-color: #0186d1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('assets/bug.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
