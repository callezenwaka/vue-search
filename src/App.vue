<template>
  <div id="app">
    <Message></Message>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from "@/components/partials/Message.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Message,
  },
  computed: {
    ...mapGetters(["users"]),
  },
  mounted() {
    let users = [
      {
        id: 1624488250662,
        name: "John Doe",
        email: "johndoe@mail.com",
        age: 23,
      },
      {
        id: 1624488277004,
        name: "Jane Doe",
        email: "janedoe@mail.com",
        age: 25,
      },
      {
        id: 1624488306903,
        name: "Jack Doe",
        email: "jackdoe@mail.com",
        age: 20,
      },
      { id: 1624488362731, name: "Joe Doe", email: "joedoe@mail.com", age: 27 },
    ];
    for (let user of users) {
      // console.log(user);
      this.$store.dispatch("addUser", user);
    }
  },
};
</script>

<style>
*,
::after,
::before,
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0rem;
  padding: 0rem;
}
</style>
