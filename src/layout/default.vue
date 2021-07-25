<template>
  <div>
    <NavBar />
    <transition name="slide-fade" mode="out-in">
      <slot />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/common/Footer.vue";
import NavBar from "../components/common/Navbar.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
