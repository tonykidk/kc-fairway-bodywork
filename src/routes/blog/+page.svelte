<script lang="ts">
	import { onMount } from 'svelte';
	import { getPosts } from '$lib/data/blog.js';
	import type { Post } from '$lib/data/types.js';

	let posts: Post[] = [];
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			posts = await getPosts();
		} catch (err) {
			error = 'Failed to load posts';
			console.error(err);
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Blog - Spotlite Studios</title>
	<meta name="description" content="Latest insights and updates from Spotlite Studios" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-blur px-6 py-12 pt-24 text-center">
	<h1
		class="text-primary text-shadow-primary-content mb-6 text-4xl font-bold uppercase text-shadow-md md:text-5xl"
	>
		Our Blog
	</h1>
	<p class="text-base-content/80 mx-auto mb-8 max-w-3xl text-lg">
		Insights, tips, and updates from our team on web development, design, and digital marketing.
		Stay ahead of the curve with expert advice and industry best practices.
	</p>
</section>

<!-- Blog Posts Section -->
<section
	class="flex grow flex-col items-center justify-center bg-[linear-gradient(to_bottom,var(--color-base-300),var(--color-base-200))] px-6 py-12"
>
	<div class="mx-auto max-w-7xl grow">
		{#if loading}
			<div class="py-16 text-center">
				<div class="loading loading-spinner loading-lg"></div>
				<p class="text-base-content/70 mt-6 text-lg">Loading articles...</p>
			</div>
		{:else if error}
			<div class="alert alert-error mx-auto max-w-2xl">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>{error}</span>
			</div>
		{:else if posts.length === 0}
			<div class="py-16 text-center">
				<div class="mx-auto max-w-md">
					<div class="icon icon-lg text-primary mx-auto mb-4">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
					</div>
					<h3 class="text-primary mb-2 text-xl font-semibold">No posts yet</h3>
					<p class="text-base-content/70">Check back soon for our latest content!</p>
				</div>
			</div>
		{:else}
			<div class="grid grow gap-8 md:grid-cols-2 xl:grid-cols-3">
				{#each posts as post}
					<article
						class="card bg-base-100/70 border-primary border-2 shadow-lg transition-all hover:shadow-xl"
					>
						{#if post.featured_image}
							<figure class="h-48 overflow-hidden">
								<img
									src={post.featured_image}
									alt={post.title}
									class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
								/>
							</figure>
						{/if}
						<div class="card-body">
							<h2 class="card-title text-primary text-xl">
								<a href="/blog/{post.slug}" class="hover:text-primary/80 transition-colors">
									{post.title}
								</a>
							</h2>
							<p class="text-base-content/70 line-clamp-3">{post.excerpt}</p>

							{#if post.tags && post.tags.length > 0}
								<div class="mt-4 flex flex-wrap gap-2">
									{#each post.tags.slice(0, 3) as tag}
										<span class="badge badge-primary badge-outline badge-sm">{tag}</span>
									{/each}
									{#if post.tags.length > 3}
										<span class="badge badge-outline badge-sm">+{post.tags.length - 3}</span>
									{/if}
								</div>
							{/if}

							<div class="card-actions mt-6 items-center justify-between">
								<div class="text-base-content/60 text-sm">
									{new Date(post.published_at).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</div>
								<a href="/blog/{post.slug}" class="btn btn-primary btn-sm">
									Read More
									<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</a>
							</div>
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
