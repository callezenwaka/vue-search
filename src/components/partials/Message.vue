<template>
    <div>
      <div v-if="isMessage" class="message--wrapper" :class="{ success: message.status, failure: !message.status }">
        <span class="message--content"><h3>{{ message.text }}</h3></span>
        <span name="close message" class="message--close" @click="close">&#10005;</span>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
	name: 'Message',
	watch: {
    isMessage: function () {
      if (this.message.text != '') {
        this.callFunction();
      }
    }
	},
  computed: {
		isMessage() {
			return this.message && this.message.text != '';
		},
		...mapGetters(['message']),
	},
  methods: {
    callFunction() {
      setTimeout(() => {
        this.$store.dispatch('setMessage', {text: '', status: ''});
      }, 5000);
    },
    close() {
      this.$store.dispatch('setMessage', {text: '', status: ''});
    },
  },
}
</script>

<style scoped>
/* message */
.message--wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: .5rem;
}
.message--content {
  margin-left: auto;
}
.message--close {
  margin-left: auto;
  cursor: pointer;
}
.message--wrapper.success {
  background-color: #c3e8d7;
  color: #078c50;
}
.message--wrapper.failure {
  background-color: #ffe5e5;
  color: #ff0000;
}
</style>