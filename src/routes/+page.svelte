<script>
    import About from '../components/About.svelte';
    import NameSection from '../components/NameSection.svelte';

</script>

<svelte:head>
    <meta property="og:image" content="https://amiedavis.dev/favicon.png"/>    
</svelte:head>

<div class="container">
    <NameSection/>
    <About/>
</div>

<style>
    div.container {
        display: flex;
        padding: 3rem 2rem;
        gap: 5rem;
    }

    @media (max-width: 480px) {
        div.container {
            flex-direction: column;
        }
    }
</style>