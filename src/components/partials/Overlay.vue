<template>
    <div class="overlay">
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
	name: 'overlay',
	watch: {
    isoverlay: function () {
      if (this.overlay.text != '') {
        this.callFunction();
      }
    }
	},
  computed: {
		isoverlay() {
			return this.overlay && this.overlay.text != '';
		},
		...mapGetters(['overlay']),
	},
  methods: {
    callFunction() {
      setTimeout(() => {
        this.$store.dispatch('setoverlay', {text: '', status: ''});
      }, 5000);
    },
    close() {
      this.$store.dispatch('setoverlay', {text: '', status: ''});
    },
  },
}
</script>

<style scoped>
/* overlay */
.overlay--wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: .5rem;
}
.overlay--content {
  margin-left: auto;
}
.overlay--close {
  margin-left: auto;
  cursor: pointer;
}
.overlay--wrapper.success {
  background-color: #c3e8d7;
  color: #078c50;
}
.overlay--wrapper.failure {
  background-color: #ffe5e5;
  color: #ff0000;
}
</style>