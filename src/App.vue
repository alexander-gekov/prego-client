<template>
  <div id="app" class="background min-h-screen">
    <Nav/>
    <hr>
    <router-view></router-view>
    <Foot class="mt-16"/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Foot from "./components/Foot";

export default {
  name: 'App',
  components: {
    Nav,
    Foot
  },
}
</script>

<style>
  .background{
    background-image: url("assets/img/background.jpg");
    background-size: cover;
    background-repeat: repeat;
  }
</style>

