<script>
    import { onMount } from 'svelte';

    const captchaKey = '6LfFsfspAAAAAPPsN96jbKv7p2NAMRx2MeAzApr6';

    onMount(() => {
        window.onSubmit = () => {
            document.getElementById("contact-form").submit();
        };
    });
</script>

<div class="container">
    <h2>Who am I?</h2>
    <hr/>
    <p>
        Isn’t that a great question, and one I think we should all ask ourselves on a regular basis. 😉 <br><br>
        I am a partner, aunty, lover of pottery and poetry, keen amateur futsal player and Matildas supporter.<br><br>
        I also like to design and write software, as I first discovered whilst in the second year of my Engineering degree (but I went on and majored in mechatronics anyway - microprocessors are fun!).<br><br>
        Since graduating with a Bachelor of Engineering (Hons) from the Australian National University, I have built up 7 years experience working as a full-stack engineer.
    </p>

    <h2>Work with me</h2>
    <hr>
    <p>
        Right now I’m working on building up my portfolio, since most of my work life so far has consisted of contributing to proprietary software. This means that I'm working at a reduced rate - so if you have a tight budget, now might be the best time to get in touch!<br><br>
        Whether you’re looking for someone to build you an application, website, or think there might be a way to automate something you’re sick of doing manually, I’d be happy to chat!
    </p>

    <form id="contact-form" action="https://formspree.io/f/myyrrard" method="POST">
        <label for="name">Name*:</label><br>
        <input type="text" id="name" name="name" required><br>

        <label for="email">Email*:</label><br>
        <input type="email" id="email" name="email" required><br>

        <label for="message">Message*:</label><br>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br>

        <button class="g-recaptcha" data-sitekey={captchaKey} data-action='submit' data-callback="onSubmit">Submit</button>
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