import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './component/Homepage.vue'
import back from './component/backend.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: "/",
			component : home,
		},
		{
			path: "/backend",
			component : back
		},
	],

	mode: 'history'
})

export default router