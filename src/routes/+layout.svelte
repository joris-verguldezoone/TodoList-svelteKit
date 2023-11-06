<script>
	import Header from './Header.svelte';
	// import {userStore} from '../stores/userStore';
	let isLogged; 

	// $: {
	// 	isLogged = $userStore.user !== null;
	// 	console.log($userStore.user,'layout user')
	// } // Vérifiez si les données de connexion sont chargées

	import "../app.css";
	// export let user;
	// let isLoginLoaded = false;
	// $: isLoginLoaded = user !== null
</script>

<div class="app">

	<Header />

	<main class="bg-red-50 h-screen">
		<slot />
	</main>

	<footer>
		{#if isLogged}
			<!-- <p>{user.login}</p> -->
			<!-- <span>yolo</span> -->
		{/if}
	</footer>
</div>
