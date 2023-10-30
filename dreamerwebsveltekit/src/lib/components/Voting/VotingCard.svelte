<script>
    import VotingOptions from "$lib/components/Voting/VotingOptions.svelte";
    import VotingCandidates from "$lib/components/Voting/VotingCandidates.svelte";
    import VotingParties from "$lib/components/Voting/VotingParties.svelte";
    import VotingVoters from "$lib/components/Voting/VotingVoters.svelte";
    import {enhance} from '$app/forms'

    export let VotingData;


</script>

<div class="relative inline-block sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 overflow-hidden rounded-lg">
    <div class="relative block rounded-lg border-2 border-gray-300 p-1 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <div class="flex flex-col">
            <div class="sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                <h3>{VotingData.electionname}</h3>
            </div>

            <VotingOptions Votingdata="{VotingData}" />

            <VotingCandidates Candidates="{VotingData}" />

            <VotingParties />

            <VotingVoters />

        </div>
        <div class=" inset-x-px">
            <div class="flex flex-nowrap justify-end space-x-2 py-2 px-2 sm:px-3">
                <div class="relative">
                    <div type="button" class="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 py-2 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                        <svg class="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                        <span class="hidden truncate sm:ml-2 sm:block">Due date</span>
                    </div>
                </div>
            </div>
            <div class="flex items-right justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
                <form method="POST" action="?/UpdateRollRecordWithNewRollResult" use:enhance>
                    <div class="flex-shrink-0">
                        <button type="submit" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Run</button>
                    </div>
                </form>
                <div class="flex-shrink-0">
                    <button type="submit" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Delete</button>
                </div>
            </div>
        </div>
    </div>
</div>