<script>
  import VotingCandidatesOption from "./VotingCandidatesOption.svelte";

  export let ComboboxCandidates

  let button1 = false
  function toggleButton1()
  {
    button1 = button1 !== true;
  }

  let button2 = false
  function toggleButton2()
  {
    button2 = button2 !== true;
  }
</script>
<div>
  <div>
    <button type="button" on:click={toggleButton2} class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Add Candidates
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
    </button>
  </div>
  {#if button2}
  {#if button1}
    <label for="combobox" class="space-x-3 block text-sm font-medium leading-6 text-gray-900">Assign</label>
    <div class="relative mt-2">
      <input id="combobox" type="text" class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" role="combobox" aria-controls="options" aria-expanded="false">
      <button on:click={toggleButton1} type="button" class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
      {#each ComboboxCandidates as CandidateOptions}
        <VotingCandidatesOption Candidate="{CandidateOptions}" />
      {/each}
    </div>
  {/if}
  {#if !button1}
    <label for="combobox" class="space-x-3 block text-sm font-medium leading-6 text-gray-900">Assign</label>
    <div class="relative mt-2">
      <input id="combobox" type="text" class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" role="combobox" aria-controls="options" aria-expanded="false">
      <button on:click={toggleButton1} type="button" class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  {/if}
  {/if}
</div>