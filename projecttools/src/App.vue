<template>
	<div id="app">
		<div>Button Clicks: {{counter}}</div>
		<button v-on:click="incrementCounter">눌러보세요</button>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			incrementCounter() {
				//debugger
				this.counter++
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	#nav {
		padding: 30px;
	}
	
	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}
	
	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
