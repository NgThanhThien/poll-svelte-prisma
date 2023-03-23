<script lang="ts">
	// import { fade, scale } from 'svelte/types/runtime/transition';
	// import { flip } from 'svelte/animate';
	import PollItem from '../component/PollComponent/PollItem.svelte';
	import type { PollModel } from '../model/Poll';
	import type { PollItemModel } from '../model/PollItem';
	import type { PageData } from './$types';
	interface PollItem extends PollItemModel {
		_count: {
			user_poll_items: number
		};
	}
	interface Poll extends PollModel {
		poll_items :     PollItem[],
		// _count
	}
	export let data: PageData;
	
	$: ({polls, user} = data)
	$: _p = [...polls].map(p => {
		return {
			...p,
			totalVote: totalVote(p as any)
		}
	})
	$: console.log(_p)

	const vote= async (e:CustomEvent) => {
		if(e.detail) {
			let data = {
				pollId: e.detail.pollId,
				pollItemId: e.detail.itemId,
			} 
			await fetch('vote-poll', {
				method: 'POST',
				body:JSON.stringify(data)
			})
		}
	
	}
	const totalVote = (poll: Poll) => {
		return poll.poll_items.reduce((a, b) => a + b._count.user_poll_items, 0)
	}
</script>

<div class="tw-bg-gray-200 tw-min-h-80-screen">
	<div class=" tw-max-w-5xl tw-mx-auto tw-py-10 tw-space-y-6">
		{#each _p as poll(poll.id)}
				<PollItem isAuth={!!user} poll={poll} on:vote={vote}/>
		{/each}
	</div>
</div>
