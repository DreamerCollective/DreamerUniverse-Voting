<script>
    import "../styles/global.css"
    import Dashboard from "../lib/components/Dashboard.svelte";
    import Footer from "../lib/components/Footer.svelte";
    export let user;
</script>

<Dashboard user="{user}" />

<slot />

<Footer />