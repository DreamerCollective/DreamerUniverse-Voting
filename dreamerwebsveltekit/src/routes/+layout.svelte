<script>
    import "../styles/global.css"
    import Dashboard from "$lib/Dashboard.svelte";
</script>

<Dashboard/>


<footer>
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left"><span class="block sm:inline">&copy; 2022 Dreamer Collective.</span> <span class="block sm:inline">All rights reserved.</span></div>
    </div>
</footer>

<slot />