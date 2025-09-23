<script>
	import TeamMembers from '$lib/components/TeamMembers.svelte';
	import TitleHero from '$lib/components/TitleHero.svelte';
	import { aboutData } from '$lib/data/about.js';
	import { services } from '$lib/data/services.js';
	import { developmentPricing, hostingPricing } from '$lib/data/pricing.js';
	import PricingCard from '$lib/components/PricingCard.svelte';
	import { isTouchDevice } from '$lib/stores/device';
</script>

<section class="bg-blur px-4 py-12 pt-24">
	<h1
		class="text-primary text-shadow-base-200 mb-6 text-center text-4xl font-bold text-balance uppercase text-shadow-lg"
	>
		Solutions That Spotlight Your Success
	</h1>
	<p class="mx-auto mb-12 max-w-2xl text-center text-lg">
		At Spotlite Studios, we don't just build websites—we engineer digital growth. Our service
		offerings are designed to help small businesses increase visibility, drive meaningful traffic,
		and convert visitors into loyal customers. Whether you're starting fresh or need a site
		overhaul, our clean and conversion-focused designs are built for results.
	</p>
</section>

<section class="triangle p-8" style="--triangle-color: var(--color-base-200);">
	<div class="mx-auto max-w-7xl">
		<h2
			class="text-primary text-shadow-base-200 mb-6 text-center text-3xl font-bold text-balance uppercase text-shadow-lg"
		>
			What We Bring to the Table
		</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
			{#each services as service}
				<div
					class="service-card card bg-base-100/70 border-primary overflow-hidden shadow-lg transition-all hover:shadow-xl {$isTouchDevice
						? 'border-1'
						: 'border-2'}"
				>
					<div class="card-body relative p-4 md:p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class={`${service.icon} icon-md text-primary icon`}></div>
							<h3 class="text-primary text-left text-xl font-semibold uppercase">
								{service.title}
							</h3>
						</div>
						<p class="service-description {$isTouchDevice ? 'text-base' : 'text-lg'}">
							{service.description}
						</p>

						{#if $isTouchDevice}
							<!-- Always visible on touch devices -->
							<div class="mt-4">
								<p class="text-base-content/70 {$isTouchDevice ? 'text-xs' : 'text-sm'}">
									{service.details}
								</p>
							</div>
						{:else}
							<!-- Hidden until hover on non-touch devices -->
							<div class="details-container">
								<div class="details-content h-full py-2">
									<p class="text-base-content/70 text-sm">{service.details}</p>
								</div>
							</div>
						{/if}

						{#if !$isTouchDevice}
							<svg
								class="text-base-content/40 details-caret absolute right-0 bottom-0 left-0 mx-auto size-8"
								viewBox="0 0 30 20"
							>
								<path
									stroke="currentColor"
									fill="none"
									stroke-linecap="square"
									stroke-linejoin="miter"
									stroke-width="3"
									d="m0 15 15 -8 15 8"
								/>
							</svg>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Pricing Section -->
<section class="bg-blur px-8 pt-16 pb-8">
	<div class="mx-auto max-w-7xl">
		<h2
			class="text-primary text-shadow-primary-content mb-8 text-center text-4xl font-semibold uppercase text-shadow-md"
		>
			Our Packages
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-center">
			Explore our transparent, value-packed packages for website development and hosting. Whether
			you're just starting out or ready to scale, we offer solutions tailored to help your business
			shine online—with no hidden fees or surprises.
		</p>

		<!-- Development Packages -->
		<div class="mt-12 mb-12">
			<h3
				class="text-primary text-shadow-primary-content mb-2 text-center text-2xl font-bold uppercase text-shadow-md md:text-3xl"
			>
				Website Development
			</h3>
			<p
				class="text-base-content/70 text-sahdow-md text-shadow-base-content mx-auto mb-8 max-w-2xl text-center text-sm"
			>
				From simple brochure sites to advanced, custom solutions, our website development packages
				are designed to fit your business goals and budget. Every package includes mobile-friendly
				design, essential SEO, and features to help your brand stand out online.
			</p>
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{#each developmentPricing.packages as pkg, i}
					<PricingCard
						name={pkg.name}
						priceMin={pkg.priceMin}
						priceMax={pkg.priceMax}
						includedFeatures={pkg.includedFeatures}
						featured={pkg.featured}
						tagline={pkg.tagline}
						icon={pkg.icon}
						description={pkg.description}
						tier={i}
						pricingData={developmentPricing}
					/>
				{/each}
			</div>
		</div>

		<!-- Hosting Packages -->
		<div>
			<h3
				class="text-primary text-shadow-primary-content mb-2 pt-4 text-center text-2xl font-bold uppercase text-shadow-md md:text-3xl"
			>
				Website Hosting & Maintenance
			</h3>
			<p
				class="text-base-content/70 text-sahdow-md text-shadow-base-content mx-auto mb-8 max-w-2xl text-center text-sm"
			>
				Our hosting and maintenance packages keep your website secure, up-to-date, and performing at
				its best. Enjoy peace of mind with reliable hosting, regular updates, and responsive support
				- so you can focus on running your business while we handle the technical details.
			</p>
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{#each hostingPricing.packages as pkg, i}
					<PricingCard
						name={pkg.name}
						priceMin={pkg.priceMin}
						priceMax={pkg.priceMax}
						includedFeatures={pkg.includedFeatures}
						featured={pkg.featured}
						tagline={pkg.tagline}
						icon={pkg.icon}
						description={pkg.description}
						tier={i}
						pricingData={hostingPricing}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	/* Card hover effect for non-touch devices */
	@media (hover: hover) {
		.service-card {
			height: 100%;
		}

		.service-card:hover .service-description {
			transition: opacity 0.2s ease;
		}

		.details-caret {
			transform: translateY(0);
		}

		.service-card:hover .details-caret {
			opacity: 0;
			transform: translateY(100%);
			transition:
				opacity 0.2s ease,
				transform 0.2s ease;
		}

		.service-description {
			height: 8rem;
		}

		.card-body {
			height: 100%;
			display: flex;
			flex-direction: column;
		}

		.details-container {
			position: absolute;
			background: var(--color-base-100);
			bottom: 0;
			left: 0;
			right: 0;
			border-top: 1px solid var(--color-primary);
			max-height: 100%;
			transform: translateY(100%);
			transition: transform 0.3s ease;
			overflow-y: auto;
			z-index: 10;
			box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
			height: 10.5rem;
		}

		.service-card:hover .details-container {
			transform: translateY(0);
		}

		.details-content {
			opacity: 0;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
			transition: opacity 0.2s ease 0.1s;
			border-bottom-right-radius: var(--radius-xl) /* 0.75rem = 12px */;
			border-bottom-left-radius: var(--radius-xl) /* 0.75rem = 12px */;
		}

		.service-card:hover .details-content {
			opacity: 1;
			background: var(--color-base-100);
			border-bottom-right-radius: var(--radius-xl) /* 0.75rem = 12px */;
			border-bottom-left-radius: var(--radius-xl) /* 0.75rem = 12px */;
		}
	}

	/* Remove animation for touch devices */
	@media (hover: none) {
		.details-container {
			position: static;
			padding: 0;
			margin-top: 1rem;
			background: transparent;
		}

		.details-content {
			opacity: 1;
		}
	}
</style>
