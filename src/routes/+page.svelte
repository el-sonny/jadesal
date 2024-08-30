<script>
	import Background from '$lib/components/Background.svelte';
	import TarotCard from '$lib/components/TarotCard.svelte';
</script>

<Background />
<main class="w-full h-full">
	<div class="mx-auto my-28 w-fit">
		<TarotCard
			backImage="/card-background.png"
			frontImage="/sheep.jpeg"
			title="LA OVEJITA"
			description="Refleja los secretos como un faro para aquellos que buscan trascender límites de la percepción."
		/>
	</div>
</main>
