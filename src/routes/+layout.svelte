<script>
	import Background from '$lib/components/Background.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Tarot', href: '/tarot' },
		{ label: 'Astrology', href: '/astrology' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<Background />

<Header logoSrc="/logo.png" logoAlt="JadeSal logo" {menuItems} siteTitle="JadeSal"/>

<slot />
