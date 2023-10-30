<script>
  export let Candidate

</script>


<div class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
  <div class="flex-shrink-0">
    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
  </div>
  <div class="min-w-0 flex-1">
    <a href="#" class="focus:outline-none">
      <!-- Extend touch target to entire panel -->
      <span class="absolute inset-0" aria-hidden="true"></span>
      <p class="text-sm font-medium text-gray-900">{Candidate.candidateName}</p>
      <p class="truncate text-sm text-gray-500">{Candidate.candidateDescription}</p>
    </a>
  </div>
</div>