<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBolt, faVoteYea } from '@fortawesome/free-solid-svg-icons';
	import Modal from './UIComponent/Modal.svelte';

	type User = {
		userId: string;
	};
	export let user: User;
</script>

<header class="tw-container tw-mx-auto tw-py-8 tw-text-xl">
	<div class="tw-flex tw-items-center tw-justify-between">
		<a class="tw-flex tw-items-center tw-space-x-2" href="/">
			<span class="tw-text-purple-500">
				<Fa icon={faVoteYea} size="lg" />
			</span>
			<div class="tw-text-md">
				Speed<span class="tw-text-purple-500 tw-font-bold">Vote</span>
			</div>
		</a>
		<div class="">
			{#if user}
				<a
					href="/create-poll"
					class="tw-bg-purple-500 tw-rounded tw-text-base tw-px-4 tw-py-2 tw-text-white tw-flex tw-items-center tw-space-x-2"
					><span>Create Poll </span><Fa icon={faBolt} /></a
				>
			{:else}
				<button
					disabled
					class="tw-bg-purple-500 tw-opacity-70 tw-rounded tw-text-base tw-px-4 tw-py-2 tw-text-white tw-flex tw-items-center tw-space-x-2"
					><span>Create Poll </span><Fa icon={faBolt} /></button
				>
			{/if}
		</div>
		{#if user}
			<form method="POST">
				<button
					formaction="/logout"
					class="tw-w-20 tw-flex tw-justify-center tw-items-center tw-h-8 tw-text-gray-700 tw-rounded tw-bg-white hover:tw-bg-purple-500 hover:tw-text-white tw-transition-all tw-duration-200"
					>Logout</button
				>
			</form>
		{:else}
			<div class="tw-text-base tw-flex tw-space-x-2 tw-items-center">
				<a
					class="tw-w-20 tw-flex tw-justify-center tw-items-center tw-h-8 tw-text-gray-700 tw-rounded tw-bg-white hover:tw-bg-purple-500 hover:tw-text-white tw-transition-all tw-duration-200"
					href="/register">Sign up</a
				>
				<div style="width:1px" class="tw-h-8 tw-bg-blue-500" />
				<a
					class="tw-w-20 tw-flex tw-justify-center tw-items-center tw-h-8 tw-text-gray-700 tw-rounded tw-bg-white hover:tw-bg-purple-500 hover:tw-text-white tw-transition-all tw-duration-200"
					href="/login">Login</a
				>
			</div>
		{/if}
	</div>
</header>
