<script lang="ts">
	export let backImage: string;
	export let frontImage: string;
	export let description: string;
	export let title: string;

	let isFlipped = false;

	function flipCard() {
		isFlipped = !isFlipped;
	}
</script>

<button class="w-64 h-96 perspective-1000 cursor-pointer" on:click={flipCard} >
	<div
		class="relative w-full h-full transition-transform duration-600 transform-style-preserve-3d " 
		class:rotate-y-180={isFlipped}
	>
		<!-- Back of the card -->
		<div
			class="absolute w-full h-full backface-hidden bg-cover bg-center rounded-lg shadow-xl border-white border-2 overflow-hidden"
			style="background-image: url({backImage});"
		></div>

		<!-- Front of the card -->
		<div
			class="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-xl rotate-y-180 overflow-hidden flex flex-col border-2 border-white"
		>
			<div class="h-1/2 bg-cover bg-center" style="background-image: url({frontImage});"></div>
			<div class="h-1/2 p-4 overflow-y-auto">
				<h3 class="text-xl font-semibold mb-2">{title}</h3>
				<p class="text-sm">{description}</p>
			</div>
		</div>
	</div>
</button>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer utilities {
		.backface-hidden {
			backface-visibility: hidden;
		}
		.perspective-1000 {
			perspective: 1000px;
		}
		.transform-style-preserve-3d {
			transform-style: preserve-3d;
		}
		.rotate-y-180 {
			transform: rotateY(180deg);
		}
        
	}
</style>
