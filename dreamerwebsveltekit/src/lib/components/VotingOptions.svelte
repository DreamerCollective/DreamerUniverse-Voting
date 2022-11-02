<script>
    export let data;

    let button1 = false
    let button2 = false

    function toggleButton1() {
        button1 = button1 !== true;
    }
    function toggleButton2() {
        button2 = button2 !== true;
    }

</script>

<div>
    <form method="POST">
        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">Election Name</label>
            <span class="text-sm text-gray-500" id="email-optional">Please type the name of the election</span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">Election Subtitle</label>
            <span class="text-sm text-gray-500" id="email-optional">Please type the election subtitles</span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">Election Information</label>
            <span class="text-sm text-gray-500" id="email-optional">Please type any election information</span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">Number of Candidates</label>
            <span class="text-sm text-gray-500" id="email-optional">How many candidates?</span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">Candidates Can Win</label>
            <span class="text-sm text-gray-500" id="email-optional">How many candidates can win?</span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">Percentage Candidates Must Win</label>
            <span class="text-sm text-gray-500" id="email-optional">How much of a percentage candidates needs to win</span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">How Many Voters</label>
            <span class="text-sm text-gray-500" id="email-optional">How many voters are voting in this election</span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">How Many Votes Per Voter</label>
            <span class="text-sm text-gray-500" id="email-optional">How many votes to voters have in this election</span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex justify-between">
            <label for="email" class="block text-sm font-medium text-gray-700">How Many Rounds</label>
            <span class="text-sm text-gray-500" id="email-optional">How many rounds need to happen </span>
        </div>
        <div class="mt-1">
            <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0" aria-describedby="email-optional">
        </div>

        <div class="flex items-center justify-between">
            <span class="flex flex-grow flex-col">
                <span class="text-sm font-medium text-gray-900" id="availability-label">Can You Vote for Parties</span>
                <span class="text-sm text-gray-500" id="availability-description">You can vote for a party different from your voted candidate/s</span>
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
                <span class="text-sm font-medium text-gray-900" id="availability-label">Do Votes Transfer</span>
                <span class="text-sm text-gray-500" id="availability-description">Do voters votes transfer from one candidate to another</span>
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
    </form>
</div>