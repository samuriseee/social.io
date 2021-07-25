<template>
  <div id="nav">
    <span class="logo" @click="$router.push('/')">nordic rose</span>
    <ul>
      <li><router-link to="/blogs">Blog</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/">Links</router-link></li>
      <li><router-link to="#">Projects</router-link></li>
    </ul>
  </div>
</template>

<script>
import "../../assets/scss/vendors/bootstrap-vue/_color.scss";
export default {};
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border-bottom: 1px solid $black;
  .logo {
    font-size: 2.5rem;
    padding: 5px 12px;
    text-transform: uppercase;
    font-family: "Imperator", sans-serif;
    cursor: pointer;
  }
  a {
    font-weight: bold;
    color: $black;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding: 10px;
  }
  a.router-link-exact-active {
    color: $black;
    border-bottom: 3px solid $black;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
  }
}
</style>
