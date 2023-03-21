<script lang="ts">
	import Card from '../../../../component/UIComponent/Card.svelte';
	import Tag from '../../../../component/UIComponent/Tag.svelte';
	import moment from 'moment';
	import type { PageData } from './$types';
	export let data: PageData;
	let arr = [1, 2];
	const { poll } = data;
	console.log(poll);
	const addItem = () => (arr = [...arr, (arr.length += 1)]);
</script>

<div class="tw-bg-gray-200 tw-min-h-80-screen">
	<div class="tw-max-w-5xl tw-mx-auto tw-py-10">
		<div class="tw-grid tw-grid-cols-12 tw-gap-4">
			<div class="tw-col-span-5">
				<Card>
					<div class="tw-flex tw-items-center tw-justify-between">
						<h1 class="tw-text-xl tw-font-semibold">{poll?.name}</h1>
						<Tag type={poll?.type || ''}>{poll?.tag}</Tag>
					</div>
					<div class="tw-py-4">
						<p class="tw-text-gray-500">{poll?.description}</p>
						<p>Time end: {moment(poll?.time_end).format('MMMM Do YYYY, h:mm:ss a')}</p>
					</div>
				</Card>
			</div>
			<div class="tw-col-span-7">
				<Card>
					<div class="tw-flex tw-justify-end">
						<button
							class="tw-px-4 tw-flex tw-justify-center tw-items-center tw-h-10 tw-border tw-border-purple-500 tw-text-purple-500 tw-rounded tw-bg-white hover:tw-bg-purple-500 hover:tw-text-white tw-transition-all tw-duration-200"
							on:click={addItem}>Add Item</button
						>
					</div>

					<form class="tw-space-y-6 tw-mt-2" method="POST">
						{#each arr as item}
							<div class="tw-flex tw-space-y-1 tw-flex-col tw-text-left">
								<label for="item-{item}" class="tw-text-lg">Item {item}:</label>
								<input
									type="text"
									name="item-{item}"
									id="item-{item}"
									class="tw-h-10 tw-px-4 tw-rounded-sm tw-border tw-border-gray-300 tw-text-gray-500"
								/>
							</div>
						{/each}
						<button
							class="tw-w-full tw-flex tw-justify-center tw-items-center tw-h-10 tw-border tw-border-purple-500 tw-text-purple-500 tw-rounded tw-bg-white hover:tw-bg-purple-500 hover:tw-text-white tw-transition-all tw-duration-200"
							type="submit"
						>
							Update Poll
						</button>
					</form>
				</Card>
			</div>
		</div>
	</div>
</div>
