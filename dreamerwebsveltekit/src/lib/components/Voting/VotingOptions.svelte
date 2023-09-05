<script>

    import {enhance} from '$app/forms'

    export let Votingdata;

    let button1 = false
    let button2 = false
    let button3 = false
    let button4 = false

    function toggleButton1() {
        button1 = button1 !== true;
    }
    function toggleButton2() {
        button2 = button2 !== true;
    }
    function toggleButton4() {
        button4 = button4 !== true;
    }
    function toggleButton3() {
        button3 = button3 !== true;
    }

</script>
<div class="relative inline-block text-left">
    <div>
        <button type="button" on:click={toggleButton3} class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Option
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>

    {#if button3}
    <div>
        <form method="POST" action="?/UpdateRollRecordWithNewRollResult" class="z-10 px-6 py-1" use:enhance>
            <div class="sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                <h3>{Votingdata.electionname}</h3>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">Election Name - {Votingdata.electionname}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.electionname}" value="{Votingdata.electionname}" aria-describedby="email-optional">
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">Election Subtitle - {Votingdata.electionsubtitle}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.electionsubtitle}" value="{Votingdata.electionsubtitle}" aria-describedby="email-optional">
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">Election Information - {Votingdata.electiondescription}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="electiondescription" id="electiondescription" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.electiondescription}" value="{Votingdata.electiondescription}" aria-describedby="email-optional">
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">Number of Candidates - {Votingdata.numberOfCandidates}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.numberOfCandidates}" value="" aria-describedby="email-optional">
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">Candidates Can Win - {Votingdata.candidatesCanWin}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.candidatesCanWin}" value="{Votingdata.candidatesCanWin}" aria-describedby="email-optional">
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">Percentage Candidates Must Win - {Votingdata.percentageCandidatesMustWin}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.percentageCandidatesMustWin}" value="{Votingdata.percentageCandidatesMustWin}" aria-describedby="email-optional">
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">How Many Rounds - {Votingdata.howManyRounds}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.howManyRounds}" value="{Votingdata.howManyRounds}" aria-describedby="email-optional">
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">How Many Voters - {Votingdata.howManyVoters}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.howManyVoters}" value="{Votingdata.howManyVoters}" aria-describedby="email-optional">
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-700">How Many Votes Per Voter - {Votingdata.howManyVotesPerVoter}</label>
                </div>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="{Votingdata.howManyVotesPerVoter}" value="{Votingdata.howManyVotesPerVoter}" aria-describedby="email-optional">
                </div>
            </div>

            <div class="flex items-center justify-between">
                <span class="flex flex-grow flex-col">
                    <span class="text-sm font-medium text-gray-900" id="availability-label">Can You Vote for Parties - {Votingdata.canYouVoteForParties}</span>
                </span>
                {#if button1}
                <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                <button type="button" on:click={toggleButton1} class="bg-indigo-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span aria-hidden="true" class="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200"></span>
                </button>
                {/if}

                {#if !button1}
                <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                <button type="button" on:click={toggleButton1} class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
                {/if}
            </div>

            <div class="flex items-center justify-between">
                <span class="flex flex-grow flex-col">
                    <span class="text-sm font-medium text-gray-900" id="availability-label">Do Votes Transfer - {Votingdata.doVotesTransfer}</span>
                </span>
                {#if button2}
                <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                <button type="button" on:click={toggleButton2} class="bg-indigo-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span aria-hidden="true" class="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200"></span>
                </button>
                {/if}

                {#if !button2}
                <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                <button type="button" on:click={toggleButton2} class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
                {/if}
            </div>

            <div class="flex items-center justify-between">
                <span class="flex flex-grow flex-col">
                    <span class="text-sm font-medium text-gray-900" id="availability-label">Do Voters Must Vote - {Votingdata.votersMustVote}</span>
                </span>
                {#if button4}
                    <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                    <button type="button" on:click={toggleButton4} class="bg-indigo-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                        <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                        <span aria-hidden="true" class="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200"></span>
                    </button>
                {/if}

                {#if !button4}
                    <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                    <button type="button" on:click={toggleButton4} class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                        <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                        <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                    </button>
                {/if}
            </div>
        </form>
    </div>
    {/if}
</div>