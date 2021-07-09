<template>
	<div class="header--wrapper">
		<header class="header">
      <div class="header--item">
        <nav class="nav" id="nav">
          <ul class="nav--list">
            <li class="nav--item logo">
              <div class="nav--link">Vue Search</div>
            </li>
            <!-- <li class="nav--item">
              <div class="nav--link" to="/">Home</div>
            </li> -->
            <li class="nav--item">
              <div class="nav--link">User Profile</div>
            </li>
          </ul>
        </nav>
      </div>
		</header>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Header",
};
</script>

<style>
.header {
  margin: 0;
  padding: 0;
}
#nav {
  padding: 10px;
}
.nav .nav--list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
  width: 100%;
}
.nav .nav--item {
  list-style-type: none;
  margin-left: 1rem;
  /*margin-right: 1rem;*/
}
.nav--item .nav--link {
  color: #ffffff;
  color: #000;
  text-decoration: underline;
}
.nav--item.logo {
  flex: auto;
  text-align: left;
}
.logo--icon {
  width: 2rem;
  height: 2rem;
  fill: currentColor;
}
/* mini */
@media only screen and (min-width: 481px) {
  .nav .nav--item {
    list-style-type: none;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .nav .nav--list {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .logo--icon {
    width: 5rem;
    height: 5rem;
    fill: currentColor;
  }
}
/* max */
@media only screen and (min-width: 981px) {
  .nav .nav--list {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
  }
  .logo--icon {
    width: 5rem;
    height: 5rem;
    fill: currentColor;
  }
}
</style>
