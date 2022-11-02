<script>
    import "../../styles/global.css"

    export let data
</script>

<div class="basis-1/3 overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
    <div>
        <div>
            <h1 class="px-3 block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0">Bla</h1>
            <p class="px-3 block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm">Bla</p>
            <p class="px-3 block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm">Bla</p>
        </div>

        <!-- Spacer element to match the height of the toolbar -->
        <div aria-hidden="true">
            <div class="py-2">
                <div class="h-9"></div>
            </div>
            <div class="h-px"></div>
            <div class="py-2">
                <div class="py-px">
                    <div class="h-9"></div>
                </div>
            </div>
        </div>
    </div>
    <div class=" inset-x-px">
        <div class="flex flex-nowrap justify-end space-x-2 py-2 px-2 sm:px-3">
                <div class="relative">
                    <div class="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 py-2 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                        <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full">

                        <span class="hidden truncate sm:ml-2 sm:block">Assign</span>
                    </div>
                </div>

                <div class="relative">
                    <div class="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 py-2 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                        <svg class="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                        </svg>
                        <span class="hidden truncate sm:ml-2 sm:block">Label</span>
                    </div>
                </div>
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
            <div class="flex-shrink-0">
                <button type="submit" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Run</button>
            </div>
            <div class="flex-shrink-0">

                <a href="Voting/Elections">
                    <button type="submit" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Edit</button>
                </a>
            </div>
        </div>
    </div>
</div>