<script lang="ts">
	/** @typedef {import('$lib/data/nav').NavItem} NavItem */
	import { onMount } from 'svelte';
	import HamburgerButton from './HamburgerButton.svelte';

	onMount(() => {
		document.addEventListener('click', (event: MouseEvent) => {
			// Check if the click is outside the nav items and hamburger button
			if (
				!navItemsElement?.contains(event.target as Node) &&
				!hamburgerButtonElement?.contains(event.target as Node) &&
				isOpen
			) {
				isOpen = false; // Collapse the navbar if clicked outside
			}
		});
	});

	/**
	 * Handles navigation item clicks and collapses the navbar.
	 */
	async function closeNavMenu(event: MouseEvent) {
		isOpen = false;
	}

	let isOpen = $state(false);
	let navItemsElement: HTMLElement | null = null;
	let hamburgerButtonElement: HTMLElement | null = null;

	/**
	 * @typedef {Object} Props
	 * @property {NavItem[]} navItems - An array of navigation items.
	 * @property {string} [siteName] - The name of the site.
	 *
	 * @param {Props} props - The props object.
	 */
	/** @type {Props} */
	let { navItems, siteName } = $props();
</script>

<!-- Hamburger button for mobile view -->
<HamburgerButton
	bind:btnElement={hamburgerButtonElement}
	bind:isOpen
	classes="md:hidden text-primary top-2 left-2 fixed z-9999"
/>

<nav
	class="text-shadow-primary-content fixed z-50 flex w-full flex-col text-shadow-sm md:flex-row md:justify-between"
	class:open={isOpen}
>
	<!-- Nav links -->
	<ul
		class="list-style-none mt-8 flex w-full flex-col text-center md:mt-0 md:grid md:grid-cols-{navItems.length}"
		bind:this={navItemsElement}
	>
		<!-- Home button - mobile only -->
		<li class="relative shrink-0 md:hidden">
			<a
				href="/"
				class="text-primary peer inline-flex w-full justify-start rounded-none border-none bg-transparent p-4 px-5 text-2xl font-semibold uppercase text-shadow-xs"
				onclick={closeNavMenu}
			>
				Home
			</a>
			<!-- Animated underline effect -->
			<span
				class="bg-primary absolute bottom-[20%] left-1/2 hidden h-[2px] w-0 transition-all duration-300 ease-in-out peer-hover:left-1/8 peer-hover:w-[75%]"
			></span>
		</li>

		<!-- Loop through navItems and create a list item for each -->
		{#each navItems as { href, text, featured }, index}
			<li class:featured class="relative shrink-0 md:mt-0 md:mb-0">
				<a
					class="text-primary peer mx-auto inline-flex justify-start rounded-none border-none bg-transparent p-4 px-5 text-2xl font-semibold uppercase text-shadow-xs md:text-xl md:font-normal"
					onclick={closeNavMenu}
					{href}
				>
					{text}
				</a>
				<!-- Animated underline effect -->
				<span
					class="bg-primary absolute bottom-[20%] left-1/2 hidden h-[2px] w-0 transition-all duration-300 ease-in-out peer-hover:left-1/8 peer-hover:w-[75%] md:absolute md:block"
				></span>
			</li>
		{/each}
	</ul>
</nav>

<style>
	/* .featured {
		background-color: var(--color-primary);
		color: var(--color-primary-content);
		margin-left: calc(var(--spacing) * 2);
	} */

	/*
	* Note: size value hardcoded since you can't use CSS var() in media query parameters.
	* would love to use var(--breakpoint-md) instead when it's supported.
	*/
	nav {
		/* background-color: color-mix(in oklab, var(--color-base-100) 90%, transparent); */
	}

	@media screen and (max-width: 767px) {
		nav {
			background-color: color-mix(in oklab, var(--color-base-100) 10%, transparent);
			backdrop-filter: blur(10px);
			height: 100vh;
			transform: translateX(-100%);
			transition:
				transform 0.3s ease-in-out,
				background-color 0.3s ease-in-out;

			&.open {
				transform: translateX(0%);
				transition: transform 0.3s ease-in-out;
				background-color: color-mix(in oklab, var(--color-base-100) 50%, transparent);
			}

			li:hover,
			li:active,
			li:focus {
				background-color: var(--color-base-200);
				box-shadow:
					inset 0 0 5px 2px color-mix(in oklab, var(--color-primary) 100%, transparent),
					inset 0 0 0 1px var(--color-primary);
			}
		}
	}
</style>
