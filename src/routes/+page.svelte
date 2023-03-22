<script lang="ts">
	import Card from '../component/UIComponent/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	// $: ({articles: articles} = data)
</script>

<div class="tw-bg-gray-200 tw-min-h-80-screen">
	<div class=" tw-max-w-5xl tw-mx-auto tw-py-10 tw-space-y-6">
		{#each data.polls as poll}
			<Card>
				<div class="tw-p-2">
					<h3 class="tw-text-xl tw-font-semibold">{poll.name}</h3>
					<p class="tw-text-gray-500">{poll.description}</p>
					<div class="tw-space-y-2 tw-mt-4">
						{#each poll.poll_items as item}
							<div class="tw-flex tw-w-max tw-gap-4">
								<div class="tw-inline-flex tw-items-center">
									<label
										class="tw-relative tw-flex tw-cursor-pointer tw-items-center tw-rounded-full tw-p-3"
										for="pink"
									>
										<input
											id="pink"
											name="color"
											type="radio"
											value={item.id}
											class="before:tw-content[''] tw-peer tw-relative tw-h-5 tw-w-5 tw-cursor-pointer tw-appearance-none tw-rounded-full tw-border tw-border-blue-gray-200 tw-text-purple-500 tw-transition-all before:tw-absolute before:tw-top-2/4 before:tw-left-2/4 before:tw-block before:tw-h-12 before:tw-w-12 before:tw--translate-y-2/4 before:tw--translate-x-2/4 before:tw-rounded-full before:tw-bg-blue-gray-500 before:tw-opacity-0 before:tw-transition-opacity checked:tw-border-purple-500 checked:tw-before:bg-pink-500 hover:before:tw-opacity-10"
											checked
										/>
										<div
											class="tw-pointer-events-none tw-absolute tw-top-2/4 tw-left-2/4 tw--translate-y-2/4 tw--translate-x-2/4 tw-text-purple-500 tw-opacity-0 tw-transition-opacity peer-checked:tw-opacity-100"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												height="14"
												width="14"
												version="1.1"
												id="Capa_1"
												viewBox="0 0 17.837 17.837"
												xml:space="preserve"
											>
												<g>
													<path
														style="fill:currentColor;"
														d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
													/>
												</g>
											</svg>
										</div>
									</label>
									<span>{item.name}</span>
								</div>
							</div>
						{/each}
						<div class="tw-flex tw-items-center tw-justify-between">
							<div />
							<button
								disabled={!data.user}
								class="{!data.user
									? 'tw-bg-purple-300'
									: 'tw-bg-purple-500'} tw-h-10 tw-w-max tw-flex tw-justify-center tw-items-center tw-px-4 tw-rounded-sm  tw-text-white"
								>Vote</button
							>
						</div>
					</div>
				</div>
			</Card>
		{/each}
	</div>
</div>
