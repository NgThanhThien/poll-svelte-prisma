<script>
	import Card from '../../../component/UIComponent/Card.svelte';
	import { DateInput } from 'date-picker-svelte';
	let date = new Date();
</script>

<div class="tw-bg-gray-200 tw-min-h-80-screen">
	<div class="tw-max-w-3xl tw-mx-auto tw-py-10">
		<Card>
			<h1 class="tw-text-xl">Create new poll</h1>
			<form class="tw-space-y-4 tw-mt-6" method="POST">
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

				<button
					type="submit"
					class="tw-w-full tw-flex tw-justify-center tw-items-center tw-h-10 tw-border tw-border-purple-500 tw-text-purple-500 tw-rounded tw-bg-white hover:tw-bg-purple-500 hover:tw-text-white tw-transition-all tw-duration-200"
					>Create Poll</button
				>
			</form>
		</Card>
	</div>
</div>
