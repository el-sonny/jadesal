<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	interface Star {
		x: number;
		y: number;
		size: number;
		speed: number;
		angle: number;
		opacity: number;
		twinkleSpeed: number;
		twinklePhase: number;
	}
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let animationId: number;
	let stars: Star[] = [];
	const numStars = 100;

	function drawStar(star: Star, time: number) {
		const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.5 + 0.5;
		const baseColor = [200, 220, 255]; // Light blue base color
		const color = baseColor.map((c) => Math.round(c * (0.5 + twinkle * 0.5)));

		const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size);
		gradient.addColorStop(
			0,
			`rgba(${color[0]}, ${color[1]}, ${color[2]}, ${star.opacity * (0.5 + twinkle * 0.5)})`
		);
		gradient.addColorStop(1, 'rgba(100, 100, 200, 0)');

		ctx.beginPath();
		ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
		ctx.fillStyle = gradient;
		ctx.fill();
	}

	function createStars() {
		for (let i = 0; i < numStars; i++) {
			stars.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 10 + 1,
				speed: Math.random() * 0.2 + 0.05,
				angle: Math.random() * Math.PI * 2, // Random angle in radians
				opacity: Math.random() * 0.5 + 0.5,
				twinkleSpeed: Math.random() * 0.001 + 0.0001,
				twinklePhase: Math.random() * Math.PI * 2
			});
		}
	}

	function calculatePosition(star: Star): { x: number; y: number } {
		const dx = Math.cos(star.angle) * star.speed;
		const dy = Math.sin(star.angle) * star.speed;
		return {
			x: star.x + dx,
			y: star.y + dy
		};
	}
	function animate(time:number) {
		if (ctx) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = 'white';
			ctx.filter = 'blur(1px)';

			stars.forEach((star) => {
				if (ctx) {
					drawStar(star,time);

					// Calculate new position
					const newPosition = calculatePosition(star);
					star.x = newPosition.x;
					star.y = newPosition.y;

					// Reset star position if it goes off-screen
					// Wrap around screen edges
					if (star.x < 0) star.x = canvas.width;
					if (star.x > canvas.width) star.x = 0;
					if (star.y < 0) star.y = canvas.height;
					if (star.y > canvas.height) star.y = 0;
				}
			});

			animationId = requestAnimationFrame(animate);
		}
	}

	function handleResize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	onMount(() => {
		if (browser) {
			ctx = canvas.getContext('2d');
			if (ctx) {
				handleResize();
				createStars();
				animate(0);
				window.addEventListener('resize', handleResize);
			}
		}
	});

	onDestroy(() => {
        if (browser) {
            window.cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
		}
	});
</script>

<canvas bind:this={canvas} class="fixed inset-0 w-full h-full bg-black -z-50"></canvas>

<style>
	/* You can add any additional styles here if needed */
</style>
