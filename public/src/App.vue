<template>
	<div class="container" id="app">
		<router-view></router-view>
	</div>
</template>
<script >
import home from './component/Homepage.vue'
	export default {
		components: {
			'home': home
		}
	}
</script>