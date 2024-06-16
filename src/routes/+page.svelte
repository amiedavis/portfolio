<script>
    import About from '../components/About.svelte';
    import NameSection from '../components/NameSection.svelte';

</script>

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
</style>