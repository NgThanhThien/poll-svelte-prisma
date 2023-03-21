<script lang="ts">
	import './styles.css';
	import Header from '../component/Header.svelte';
	import Footer from '../component/Footer.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Header user={data.user} />
<main>
	<slot />
</main>
<Footer />
