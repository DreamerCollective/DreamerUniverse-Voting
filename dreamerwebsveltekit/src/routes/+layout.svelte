<script>
    import Footer from "../lib/components/Footer.svelte";
    import "../styles/global.css"
    import Dashboard from "$lib/components/Dashboard.svelte";

    export let userload;

    /* Entering: ""
        From: ""
        To: ""
        Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95" */


</script>

<Dashboard userload={userload}/>
<main class="pl-40 sm:pl-40 py-1 flex flex-col">
  <slot />
</main>



