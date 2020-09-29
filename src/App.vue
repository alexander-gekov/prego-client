<template>
  <div id="app" class="background min-h-screen">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
  .background{
    background-image: url("assets/img/background.jpg");
    background-size: cover;
    background-repeat: repeat;
  }
</style>

