
<script lang="ts">
	import Card from "../UIComponent/Card.svelte";
  import type { PollModel } from "../../model/Poll";
	import type { PollItemModel } from "../../model/PollItem";

  interface Poll extends PollModel {
    poll_items: PollItemModel[];
  }
  let selected: number
  export let poll: any
  export let isAuth:boolean = false;
  
  const onChange =  (e:Event) => {
    const target = e.target as HTMLSelectElement;
    return selected = Number(target.value)
  } 

</script>
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
              for={'poll-items-' + item.id}
            >
              <input
                id={'poll-items-' + item.id}
                name={'poll-' + poll.id}
                type="radio"
                value={item.id}
                on:change={onChange}
                group={'poll-item-' + poll.id}
                class="before:tw-content[''] tw-peer tw-relative tw-h-5 tw-w-5 tw-cursor-pointer tw-appearance-none tw-rounded-full tw-border tw-border-blue-gray-200 tw-text-purple-500 tw-transition-all before:tw-absolute before:tw-top-2/4 before:tw-left-2/4 before:tw-block before:tw-h-12 before:tw-w-12 before:tw--translate-y-2/4 before:tw--translate-x-2/4 before:tw-rounded-full before:tw-bg-blue-gray-500 before:tw-opacity-0 before:tw-transition-opacity checked:tw-border-purple-500 checked:tw-before:bg-pink-500 hover:before:tw-opacity-10"
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
        <div>totalVote: {poll.totalVote}</div>
        <form action="/vote-poll" method="POST">
          <input type="hidden" name="pollId" value={poll.id}>
          <input type="hidden" name="pollItemId" value={selected}>
          <button
          disabled={!(isAuth && selected)}
          type="submit"
          class="{!(isAuth && selected)
            ? 'tw-bg-purple-300'
            : 'tw-bg-purple-500'} tw-h-10 tw-w-max tw-flex tw-justify-center tw-items-center tw-px-4 tw-rounded-sm  tw-text-white"
          >Vote</button>
        </form>
        
      </div>
    </div>
  </div>
</Card>