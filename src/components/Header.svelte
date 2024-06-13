<script>
</script>

<div class="header">
    <div class="me">Amie Davis</div>

    <div class="menu-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
    </div>

</div>

<style>
@import '../app.css';

    div.header {
        display: flex;
        background-color: var(--colour-dark-brown);
        border-bottom: 1px solid var(--colour-light-brown);
        justify-content: space-between;
        padding-right: 3rem;
        height: 40px;
        align-items: center;

    }

    div.me {
        font-family: "Caveat", cursive;
        font-optical-sizing: auto;
        font-size: 32px;
        color: white;
    }

    div.menu-links {
        display: flex;
        gap: 2rem;
    }

    a {
        background-color: none;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>
