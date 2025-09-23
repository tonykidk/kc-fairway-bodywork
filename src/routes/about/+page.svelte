<script>
	import TeamMembers from '$lib/components/TeamMembers.svelte';
	import TitleHero from '$lib/components/TitleHero.svelte';
	import { aboutData } from '$lib/data/about.js';
</script>

<TitleHero
	title="About Us"
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
	size="small"
/>

<div class="mx-auto">
	<!-- Subtitle -->
	<div class="p-12">
		<div class="mx-auto max-w-xl">{aboutData.subtitle}</div>
	</div>

	<div class="bg-accent p-12 text-left">
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Mission Card -->
			<div class="card card-border bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">Our Mission</h2>
					<p>{aboutData.mission}</p>
				</div>
			</div>

			<!-- Vision Card -->
			<div class="card card-border bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">Our Vision</h2>
					<p>{aboutData.vision}</p>
				</div>
			</div>

			<!-- Values Card -->
			<div class="card card-border bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">Our Values</h2>
					<ul class="list-disc pl-5">
						{#each aboutData.values as value}
							<li>{value}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-auto p-12 text-center">
		<TeamMembers team={aboutData.team} />
	</div>
</div>
