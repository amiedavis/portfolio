<script>
    import githubIcon from '../images/github-mark-white.svg';
    import linkedInIcon from '../images/linkedin.svg';
</script>

<div class="container">
    <h1>Amie Davis</h1>

    <div class="headline-container">
        <h3 class="headline">Full stack software engineer</h3>

        <div class="icons">
            <img class="icon" crossorigin="anonymous" src={githubIcon} alt="Github icon">
            <img class="icon" crossorigin="anonymous" src={linkedInIcon} alt="LinkedIn icon">
        </div>
    </div>

    <h4 class="label-heading">I have experience working with...</h4>
    <div class="labels">
        <div class="label">Java</div>
        <div class="label">Golang</div>
        <div class="label">SQL</div>
        <div class="label">Javascript</div>
        <div class="label">HTML</div>
        <div class="label">CSS</div>
        <div class="label">React</div>
        <div class="label">Svelte</div>
    </div>
</div>

<style>
    div.container {
        flex: 1;
    }

    h3.headline {
        font-weight: lighter;
    }

    div.headline-container {
        width: fit-content;
    }

    div.icons {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
        justify-content: center;
    }

    img.icon {
        width: 3rem;
    }

    h4.label-heading {
        margin-top: 5rem;
    }

    div.labels {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    div.label {
        height: 30px;
        align-content: center;
        text-align: center;
        min-width: 0.9rem;
        background-color: var(--colour-light-brown);
        border-radius: 6px;
        width: fit-content;
        padding: 0 1rem;
    }

    @media (max-width: 480px) {
        div.headline-container {
            width: 100%;
        }
    }
</style>