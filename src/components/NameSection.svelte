<script>
    import githubIcon from '../images/github-mark-white.svg';
    import linkedInIcon from '../images/linkedin.svg';

    const githubLink = 'https://github.com/amiedavis';
    const linkedInLink = 'https://www.linkedin.com/in/amiedavis/'

</script>

<div class="container">
    <div class="intro-container">
        <h1>Amie Davis</h1>

        <div class="headline-container">
            <h3 class="headline">Full stack software engineer</h3>

            <div class="icons">
                <a href={githubLink} target="_blank">
                    <img class="icon" crossorigin="anonymous" src={githubIcon} alt="Github icon">
                </a>
                
                <a href={linkedInLink} target="_blank">
                    <img class="icon" crossorigin="anonymous" src={linkedInIcon} alt="LinkedIn icon">
                </a>
            </div>
        </div>
    </div>

    <h4 class="label-heading">I have experience with...</h4>
    <div class="labels">
        <div class="label">Java</div>
        <div class="label">Golang</div>
        <div class="label">SQL</div>
        <div class="label">Javascript</div>
        <div class="label">HTML5</div>
        <div class="label">CSS</div>
        <div class="label">React</div>
        <div class="label">Svelte</div>
        <div class="label">Node.js</div>
    </div>
</div>

<style>
    div.container {
        flex: 1;
    }

    div.intro-container {
        display: flex;
        flex-direction: column;
        align-items: center;
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
            text-align: center;
        }
    }
</style>