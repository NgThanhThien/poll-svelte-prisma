<script lang="ts">
	  import Fa from 'svelte-fa';
	import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';

    export let totalPage: number;
    export let currentPage: number;
    $:console.log(totalPage, currentPage)
</script>

    {#if totalPage > 1}
        <div class='tw-flex tw-space-x-2 tw-items-center'>
            <button on:click={() => goto(`/?page=${ currentPage -= 1}`)} 
                disabled={currentPage === 1 ? true : false} 
                aria-label="left arrow icon" 
                aria-describedby="prev"
                class="tw-w-6 tw-h-6 tw-rounded-sm tw-border tw-border-purple-500 tw-text-purple-500 tw-flex tw-justify-center tw-items-center hover:tw-bg-purple-500 hover:tw-text-white tw-transform tw-duraiton-200"
                ><Fa icon={faAngleLeft} />
            </button>
            <div class="">
              page {currentPage} of {totalPage}
            </div>
            <button on:click={() => goto(`/?page=${ currentPage += 1}`)} 
                disabled={currentPage === totalPage  ? true : false} 
                aria-label="right arrow icon" 
                aria-describedby="next"
                class="tw-w-6 tw-h-6 tw-rounded-sm tw-border tw-border-purple-500 tw-text-purple-500 tw-flex tw-justify-center tw-items-center hover:tw-bg-purple-500 hover:tw-text-white tw-transform tw-duraiton-200"
                ><Fa icon={faAngleRight} />
            </button>
            <!-- <span id='next' class='sr-only'>Load next {perPage} rows</span> -->
        </div>
    {/if}

