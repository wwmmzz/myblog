<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from "./components/header";

export default {
  components: {
    myHeader
  }
};
</script>

<style>
@import 'bootstrap';

/* :root {
	--font: "EB Garamond", serif;
	--font-title: "Playfair Display", serif;
	--font-sans-serif: "Manrope", sans-serif;
	--black: #1c1f33;
	--gray: #eee;
	--gray-1: #ededed;
} */
</style>
