<script>
	import Card from '../../../component/UIComponent/Card.svelte';
	let arr = [1, 2, 3, 4];
</script>

<div class="tw-bg-gray-200 tw-min-h-80-screen">
	<form method="POST">
		<div class="tw-max-w-5xl tw-mx-auto tw-py-10">
			<div>
				<Card>
					<div class="tw-flex tw-justify-between tw-items-center">
						<h1 class="tw-text-xl">Create new poll</h1>
						<button
							type="submit"
							class="tw-px-5 tw-flex tw-justify-center tw-items-center tw-h-10 tw-border tw-border-purple-500 tw-text-purple-500 tw-rounded tw-bg-white hover:tw-bg-purple-500 hover:tw-text-white tw-transition-all tw-duration-200"
							>Create Poll</button
						>
					</div>
				</Card>
			</div>
			<div class="tw-grid tw-grid-cols-12 tw-gap-6 tw-mt-10">
				<div class="tw-col-span-6">
					<Card>
						<div class="tw-space-y-4">
							<div class="tw-flex tw-space-y-1 tw-flex-col tw-text-left">
								<label for="name" class="tw-text-lg">Poll name:</label>
								<input
									type="text"
									name="name"
									id="name"
									class="tw-h-10 tw-px-4 tw-rounded-sm tw-border tw-border-gray-300 tw-text-gray-500"
								/>
							</div>
							<div class="tw-flex tw-space-y-1 tw-flex-col tw-text-left">
								<label for="description" class="tw-text-lg">Poll description:</label>
								<textarea
									name="description"
									id="description"
									rows="4"
									class="tw-px-4 tw-py-2 tw-rounded-sm tw-border tw-border-gray-300 tw-text-gray-500"
								/>
							</div>
							<div class="tw-grid tw-grid-cols-2 tw-gap-6">
								<div class="tw-flex tw-space-y-1 tw-flex-col tw-text-left">
									<label for="poll-type" class="tw-text-lg">Poll type:</label>
									<select
										name="type"
										id="type"
										class="tw-px-4 tw-py-2 tw-rounded-sm tw-border tw-border-gray-300 tw-text-gray-500"
									>
										<option value="primary">Primary</option>
										<option value="success">Success</option>
										<option value="danger">Danger</option>
										<option value="warning">Warning</option>
									</select>
								</div>
								<div class="tw-flex tw-space-y-1 tw-flex-col tw-text-left">
									<label for="tag" class="tw-text-lg">Poll Tag:</label>
									<input
										type="text"
										name="tag"
										id="tag"
										class="tw-h-10 tw-px-4 tw-rounded-sm tw-border tw-border-gray-300 tw-text-gray-500"
									/>
								</div>
							</div>
							<div class="tw-grid tw-grid-cols-2 tw-gap-6">
								<div class="tw-flex tw-space-y-1 tw-flex-col tw-text-left">
									<label for="time_end">Time end:</label>
									<input
										type="datetime-local"
										id="time_end"
										name="time_end"
										min={new Date().getUTCDate()}
										class="tw-border tw-rounded-sm tw-px-4 tw-h-10"
									/>
								</div>
							</div>
						</div>
					</Card>
				</div>
				<div class="tw-col-span-6">
					<Card>
						<div class="tw-space-y-6 tw-mt-2">
							{#each arr as item}
								<div class="tw-flex tw-space-y-1 tw-flex-col tw-text-left">
									<label for="item_{item}" class="tw-text-lg">Item {item}:</label>
									<input
										type="text"
										name="item_{item}"
										id="item_{item}"
										class="tw-h-10 tw-px-4 tw-rounded-sm tw-border tw-border-gray-300 tw-text-gray-500"
									/>
								</div>
							{/each}
						</div>
					</Card>
				</div>
			</div>
		</div>
	</form>
</div>
