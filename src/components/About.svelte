<script>
    import { onMount } from 'svelte';

    const captchaKey = '6LfFsfspAAAAAPPsN96jbKv7p2NAMRx2MeAzApr6';

    let name, email, message;

    function beforeUnload() {
        name = null;
        email = null;
        message = null;
    }

    onMount(() => {
        window.onSubmit = () => {
            document.getElementById("contact-form").submit();
        };
    });
</script>

<svelte:window on:beforeunload={beforeUnload}/>

<div class="container">
    <h2>Who am I?</h2>
    <hr/>
    <p>
        I’m a full-stack software engineer with over 7 years experience and a bachelor’s degree in Engineering (majoring in mechatronics).<br><br>
        Over the years, I've developed a diverse skillset that goes beyond writing code. I have lots of experience in writing software documentation and enjoy the challenge of explaining technical concepts to non-technical audiences. I also love the problem solving involved in breaking down big technical projects into smaller, well-defined tasks, and have more recently taken opportunities to lean more into a Business Analyst role than pure Software Engineering.
    </p>

    <h2>Work with me</h2>
    <hr>
    <p>
        Whether you are looking for someone to help build you a website, need to improve your user manuals or just want someone to help you figure out what direction to go in with a big idea, I’m your gal!<br><br>
        Right now I’m working on building up my portfolio, since most of my work life has consisted of contributing to proprietary software. This means I’m offering lower rates at the moment, so even if you’re working with a tight budget, I’d love to hear from you!
    </p>

    <form id="contact-form" action="https://formspree.io/f/myyrrard" accept-charset="utf-8" method="POST">
        <label for="name">Name*:</label><br>
        <input type="text" id="name" name="name" bind:value={name} required=""><br>

        <label for="email">Email*:</label><br>
        <input type="email" name="_replyto" id="email-address" bind:value={email} required=""><br>

        <label for="message">Message*:</label><br>
        <textarea id="message" name="message" rows="4" cols="50" bind:value={message} required=""></textarea><br>

        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">

        <button class="g-recaptcha" data-sitekey={captchaKey} data-callback='onSubmit' data-action='submit'>Submit</button>
    </form>
</div>


<style>
    div.container {
        flex: 1;
    }

    form {
        margin-top: 2rem;
    }

    input, textarea {
        margin-top: 5px;
        margin-bottom: 1rem;
        width: 25rem;
        box-sizing: border-box;
        padding: 0.5rem;
    }

    input {
        height: 30px;
    }

    button {
        margin-top: 1rem;
        background-color: var(--colour-dark-teal);
        appearance: none;
        border: none;
        border-radius: 6px;
        padding: 1rem;
        width: 25rem;
        color: white;
        cursor: pointer;
        height: 3rem;
    }

    button:hover {
        color: var(--colour-midnight);
    }

    label {
        color: var(--colour-light-brown);
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        input, textarea, button {
            width: 100%;
        }
    }

</style>