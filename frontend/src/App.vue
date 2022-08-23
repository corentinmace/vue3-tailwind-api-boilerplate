<script>

</script>

<template>
	<div class="fixed top-0 w-full text-center py-2">
		<router-link class="hover:font-bold" to="/">Home</router-link> | 
		<router-link class="hover:font-bold" to="/about">About</router-link>
	</div>
	<router-view></router-view>
</template>

<style>
	.router-link-active {
		font-weight: bold;
	}
</style>