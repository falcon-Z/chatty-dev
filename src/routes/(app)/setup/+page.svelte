<script lang="ts">
	import Acknowledgement from '$lib/components/onboarding/acknowledgement.svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	$: currentStep = writable(1);

	$: steps = [
		{
			step: 'Terms & Conditions',
			done: false
		},
		{
			step: 'Setup Profile',
			done: false
		},
		{
			step: 'Language Preference',
			done: false
		}
	];

	const nextStep = () => {
		steps[$currentStep - 1].done = true;
		currentStep.set($currentStep < steps.length ? $currentStep + 1 : 1);
	};
</script>

<form class=" w-full h-full gap-8 flex flex-col justify-between items-center p-4">
	<div class=" text-center">
		<h2 class="text-4xl font-bold">Welcome! Let's get you set up</h2>

		<p class="mt-2">To get started, we'll guide you through a quick 3-step onboarding process</p>

		<ul class="steps steps-horizontal my-8">
			{#each steps as step, i}
				<li
					class="step {step.done
						? 'step-success'
						: $currentStep == i + 1
						? 'step-primary'
						: 'step-info'}"
				>
					{step.step}
				</li>
			{/each}
		</ul>
	</div>

	<div class=" w-8/12 border border-base-200 p-4 rounded-2xl overflow-auto">
		{#if $currentStep == 1}
			<Acknowledgement />
		{:else if $currentStep == 2}
			<div>Seup Profile</div>
		{:else}
			<div>Language Preference</div>
		{/if}
	</div>

	<div class="mt-4">
		{#if $currentStep == steps.length - 1}
			<button type="submit" on:click={() => nextStep()} class="btn btn-circle btn-primary btn-wide"
				>{$currentStep == 1 ? 'Accept & Continue' : 'submit'}</button
			>
		{:else}
			<button type="submit" on:click={() => nextStep()} class="btn btn-circle btn-primary btn-wide"
				>Finish</button
			>
		{/if}
	</div>
</form>
