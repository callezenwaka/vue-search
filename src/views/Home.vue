<template>
  <div class="home">
    <Header></Header>
    <div class="home--wrapper">
      <Users></Users>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/partials/Header.vue";
import Users from "@/components/Users.vue";
export default {
  name: "Home",
  components: {
    Header,
    Users,
  },
};
</script>

<style scoped>
/* home */
.home {
  padding: 1rem;
  width: 100%;
  transition: all 500ms linear;
}
/* mini */
@media only screen and (min-width: 481px) {
  .home--wrapper {
    width: 70%;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>