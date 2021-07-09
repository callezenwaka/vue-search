<template>
	<div class="loader--content">
		<div class="" :class="{ 'backdrop': isLoading }"></div>
		<div class="loader">
			<div class="loader--wrapper">
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loader',
	props: {
		isLoading: {
			type: Boolean,
			required: true
		}
	},
}
</script>

<style scoped>
.loader--content {
	margin: 0;
	padding: 0;
}
.backdrop {
  background-color: #190d02;
  background-color: #616565;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5000;
}
.loader {
  background-color: transparent;
  position: absolute;
  height: 4rem;
  width: 4rem;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
  z-index: 10000;
}
.loader .loader--wrapper {
	position: relative;
	margin: 0 auto;
}
.loader .loader--wrapper {
	width: 100%;
	height: 100%;
}
.loader .loader--wrapper span {
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 100%;
}
.loader .loader--wrapper span:before, 
.loader .loader--wrapper span:after {
	position: absolute;
	width: 4px;
	height: 100%;
	background: #FFFFFF;
	content: "";
}
.loader .loader--wrapper span:before {
	top: auto;
	right: 0;
	bottom: 0;
	-webkit-animation: drawframeRight 4s linear infinite 0.5s;
	animation: drawframeRight 4s linear infinite 0.5s;
}
.loader .loader--wrapper span:after {
	top: 0;
	bottom: auto;
	left: 0;
	-webkit-animation: drawframeLeft 4s linear infinite 1.5s;
	animation: drawframeLeft 4s linear infinite 1.5s;
}
.loader .loader--wrapper:before, 
.loader .loader--wrapper:after {
	position: absolute;
	width: 100%;
	height: 4px;
	background: #FFFFFF;
	content: "";
}
.loader .loader--wrapper:before {
	top: 0;
	right: 0;
	left: auto;
	-webkit-animation: drawframeTop 4s linear infinite;
	animation: drawframeTop 4s linear infinite;
}
.loader .loader--wrapper:after {
	right: auto;
	bottom: 0;
	left: 0;
	-webkit-animation: drawframeBottom 4s linear infinite 1s;
	animation: drawframeBottom 4s linear infinite 1s;
}

@-webkit-keyframes drawframeTop {
  0% {
    right: 0;
    left: auto;
    width: 100%;
  }
  12.5% {
    right: 0;
    left: auto;
    width: 0%;
  }
  50% {
    right: auto;
    left: 0;
    width: 0%;
  }
  62.5% {
    right: auto;
    left: 0;
    width: 100%;
  }
  100% {
    right: auto;
    left: 0;
    width: 100%;
  }
}
@keyframes drawframeTop {
  0% {
    right: 0;
    left: auto;
    width: 100%;
  }
  12.5% {
    right: 0;
    left: auto;
    width: 0%;
  }
  50% {
    right: auto;
    left: 0;
    width: 0%;
  }
  62.5% {
    right: auto;
    left: 0;
    width: 100%;
  }
  100% {
    right: auto;
    left: 0;
    width: 100%;
  }
}
@-webkit-keyframes drawframeBottom {
  0% {
    right: auto;
    left: 0;
    width: 100%;
  }
  12.5% {
    right: auto;
    left: 0;
    width: 0%;
  }
  50% {
    right: 0;
    left: auto;
    width: 0%;
  }
  62.5% {
    right: 0;
    left: auto;
    width: 100%;
  }
  100% {
    right: 0;
    left: auto;
    width: 100%;
  }
}
@keyframes drawframeBottom {
  0% {
    right: auto;
    left: 0;
    width: 100%;
  }
  12.5% {
    right: auto;
    left: 0;
    width: 0%;
  }
  50% {
    right: 0;
    left: auto;
    width: 0%;
  }
  62.5% {
    right: 0;
    left: auto;
    width: 100%;
  }
  100% {
    right: 0;
    left: auto;
    width: 100%;
  }
}
@-webkit-keyframes drawframeRight {
  0% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  12.5% {
    top: auto;
    bottom: 0;
    height: 0%;
  }
  50% {
    top: 0;
    bottom: auto;
    height: 0%;
  }
  62.5% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
  100% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
}
@keyframes drawframeRight {
  0% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  12.5% {
    top: auto;
    bottom: 0;
    height: 0%;
  }
  50% {
    top: 0;
    bottom: auto;
    height: 0%;
  }
  62.5% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
  100% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
}
@-webkit-keyframes drawframeLeft {
  0% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
  12.5% {
    top: 0;
    bottom: auto;
    height: 0%;
  }
  50% {
    top: auto;
    bottom: 0;
    height: 0%;
  }
  62.5% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  100% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
}
@keyframes drawframeLeft {
  0% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
  12.5% {
    top: 0;
    bottom: auto;
    height: 0%;
  }
  50% {
    top: auto;
    bottom: 0;
    height: 0%;
  }
  62.5% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  100% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
}
/* mini */
@media only screen and (min-width: 461px) {

}
/* max */
@media only screen and (min-width: 964px) {

}
</style>