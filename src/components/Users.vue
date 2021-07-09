<template>
  <div class="search">
    <div class="search--form">
      <div v-if="!!validations.length" class="validations">
        <ul style="text-align: left;"><li style="list-style-type: disc;" v-for="(validation, index) in validations" :key="index">{{validation}}</li></ul>
      </div>
      <form action="" @submit.prevent="searchName">
        <label  class="search--label" for="username">Search Username: (John, Jane, Jack, Joe)</label>
        <div class="search--input">
          <input class="" v-model="keyword" id="username" />
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <button class="search--button" :class="{isValid: isValid}" :disabled="!isValid">Search</button>
      </form>
    </div>
    <div>
      <ul class="search--results" style="text-align: left;">
        <li v-for="user in users" :key="user.id">
          Username: - {{ user.name }}<br> Email: - {{ user.email }}<br> Age: - {{ user.age }}
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  data() {
    return {
      keyword: "",
      validations: [],
    };
  },
  watch: {
    keyword() {
      if (!this.keyword) return;
      this.debounceSearch();
    },
  },
  computed: {
    ...mapGetters(["users"]),
    isValid() {
      return this.keyword !== "";
    },
  },
  created() {
    this.debounceSearch = this.debounce(this.searchName, 1000);
  },
  methods: {
    ...mapActions(["getUsers", "setMessage"]),
    onBlur(event) {
      event.target.style.borderColor = event.target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    },
    debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },
    validate() {
      /**
       * Clear error container
       * Check If keyword Is Empty
       * Clear error messages on the page
       * If No Errors Return True or otherwise
       */
      this.validations = [];
      if (!this.keyword) {
        this.validations.push("Keyword is required!");
      }
      setTimeout(() => (this.validations = []), 5000);
      if (this.validations.length) return false;
      return true;
    },
    searchName() {
      if (!this.validate()) return;
      this.getUsers({ keyword: this.keyword });
    },
  },
};
</script>

<style scoped>
/* search */
.search--form {
  width: 100%;
  margin: 50px auto;
  text-align: left;
}
.validations {
  display: flex;
  justify-content: center;
  color: #ff0000;
  padding: 0.5rem;
  border-radius: 5px;
}
.search--item {
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0px 0px 20px;
  padding: 0px;
}
.search--label {
  font-size: 14px;
  color: rgb(61, 79, 88);
  position: relative;
  height: 16px;
  /*width: 36px;*/
  text-align: left;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
}
.search--input {
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 4px;
  height: auto;
  font-size: 1rem;
  line-height: 24px;
  padding: 0.5rem;
  transition: border-color 150ms ease-in-out 0s;
}
.search--input input {
  width: 100%;
  outline: none;
  border: none;
  padding-left: 12px;
  padding-right: 12px;
  line-height: 2rem;
}
.search--button {
  position: relative;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  -webkit-box-align: stretch;
  font-size: 18px;
  padding: 0.5rem;
  margin-top: 0.75rem;
  margin-bottom: 5rem;
  border-radius: 4px;
  text-decoration: none;
  cursor: not-allowed;
  z-index: 0;
  /* appearance: none; */
  transition: all 150ms ease-in-out 0s;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
}
.search--button.isValid {
  cursor: pointer;
  color: rgb(255, 255, 255, 1);
  background-color: rgb(23, 35, 51, 1);
}
.search--button.isValid:hover {
  opacity: 0.5;
}
/* mini */
@media only screen and (min-width: 481px) {
  .search--form {
    width: 410px;
    margin: 0 auto;
  }
}
/* max */
@media only screen and (min-width: 981px) {
}
</style>