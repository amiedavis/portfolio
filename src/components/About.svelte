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
        Isn’t that a great question, and one I think we should all ask ourselves on a regular basis 😉<br><br>
        First and foremost I am a partner, aunty, lover of pottery and poetry, keen amateur futsal player and Matildas supporter.<br><br>
        I’m also a full-stack engineer with 7 years experience. I got my start back in uni - I was doing my Engineering degree at the Australian National University when I stumbled upon coding in my second year and thought, "Hey, this is pretty cool!" Even though I ended up majoring in mechatronics (because, well, microprocessors are fun), that coding bug never really left me.<br><br>
        Over the years, I've picked up a few extra skills. I've got a knack for writing software documentation and enjoy the challenge of communicating technical concepts to non-technical audiences. I also love the problem solving involved in breaking down big technical projects into smaller, well-defined tasks, and have more recently taken opportunities to lean more into a Business Analyst role than pure Software Engineering.
    </p>

    <h2>Work with me</h2>
    <hr>
    <p>
        Right now I’m working on building up my portfolio, since most of my work life has consisted of contributing to proprietary software. The cool part? I'm offering lower rates at the moment, which is great if you're working with a tight budget.<br><br>
        Got an app idea you've been sitting on? Need a website that doesn't look like it's stuck in the 90s? Or maybe you just want someone to help you figure out what you want, with no strings attached? Well, that's where I come in! <br><br>
        I'm all about turning those 'wouldn't it be nice if...' thoughts into actual, working tech. So if you're curious about what we could create together, let's chat! No pressure, just good ideas and maybe some nerdy jokes thrown in for free.
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