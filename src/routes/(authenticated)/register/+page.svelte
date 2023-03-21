<div class="tw-bg-indigo-900 tw-text-white tw-h-screen">
	<div class="tw-py-10 tw-w-1/2 tw-mx-auto">
		<h1>Register</h1>
		<form class="tw-space-y-6" method="POST">
			<div class="tw-flex tw-flex-col tw-space-y-2 ">
				<label for="name">Name</label>
				<input
					type="text"
					class="tw-text-gray-700 tw-h-10 tw-px-2 tw-rounded-sm tw-border tw-border-white"
					id="name"
					name="name"
				/>
			</div>
			<div class="tw-flex tw-flex-col tw-space-y-2">
				<label for="username">User Name</label>
				<input
					type="text"
					class="tw-text-gray-700 tw-h-10 tw-px-2 tw-rounded-sm tw-border tw-border-white"
					id="username"
					name="username"
				/>
			</div>
			<div class="tw-flex tw-flex-col tw-space-y-2">
				<label for="password">Password</label>
				<input
					type="password"
					class="tw-text-gray-700 tw-h-10 tw-px-2 tw-rounded-sm tw-border tw-border-white"
					id="password"
					name="password"
				/>
			</div>
			<button
				type="submit"
				class="tw-h-10 tw-flex tw-justify-center tw-items-center tw-w-full tw-rounded-sm tw-bg-blue-300 tw-text-white"
				>Register</button
			>
		</form>
		<div>
			Don't have account? <a href="/login" class="tw-text-underline tw-text-purple-500">Login</a>
		</div>
	</div>
</div>
