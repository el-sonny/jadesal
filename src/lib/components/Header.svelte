<script lang="ts">
  import { slide } from 'svelte/transition';

  export let siteTitle: string = "Mystic Realm";
  export let logoSrc: string;
  export let logoAlt: string = "Logo";
  export let menuItems: { label: string; href: string }[] = [];

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-white bg-opacity-10 text-white relative">
  <div class="mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo and Title -->
      <div class="flex items-center flex-shrink-0">
        <a href="/" class="flex items-center">
          <img src={logoSrc} alt={logoAlt} class="h-8 w-auto mr-3">
          <h1 class="text-xl font-serif">{siteTitle}</h1>
        </a>
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden md:block">
        <ul class="flex space-x-4">
          {#each menuItems as item}
            <li>
              <a href={item.href} class="hover:text-gray-300">{item.label}</a>
            </li>
          {/each}
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button on:click={toggleMenu} class="text-white focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <nav transition:slide class="md:hidden bg-white bg-opacity-10 absolute w-full z-50">
      <ul class="px-2 pt-2 pb-3 space-y-1">
        {#each menuItems as item}
          <li>
            <a href={item.href} class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">{item.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</header>