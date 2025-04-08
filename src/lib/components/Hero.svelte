<script lang="ts">
    import subtlePatternImage from "$lib/assets/images/pattern2.png"
    import { ArrowRight } from "@lucide/svelte";
</script>

<section class="hero" style="--pattern: url({subtlePatternImage})">
    <div class="hero_text">
        <h1><span>Conversations Made Simple-</span> Connections Made Strong</h1>
        <p class="subtext">Your all-in-one platform for instant messaging, meaningful interactions, and staying connected—anytime, anywhere.</p>
        <a href="/auth" class="cta_button">
            <span class="icon">
                <ArrowRight size="20" />
            </span>
            <span class="text">Get Started</span>
        </a>
    </div>

    <div class="hero_image">
        <div class="circle"></div>
    </div>
</section>

<style>
    .hero {
        display: flex;
        align-items: center;
        padding: 3rem;
        min-height: 100vh;
        color: white;
        /* background: radial-gradient(circle, #fa4299, #a445b2); */
        /* background: linear-gradient(to bottom right, #a445b2, #fa4299, #a445b2); */
        /* background: linear-gradient(to right, rgba(99, 42, 108, 0.9), rgba(164, 43, 100, 0.9)); */
        /* background: radial-gradient(circle at top left, #fa4299, #a445b2, #000000); */
        /* background: linear-gradient(to right, #a445b2, #fa4299), var(--pattern); */
        /* background: linear-gradient(to bottom, #f7f0fa, #e6dff1); */
        /* background: linear-gradient(to bottom, #5c257e, #352267); */
        background: linear-gradient(to top, #80308c, #80308c), linear-gradient(to top, rgba(0, 0, 0, .7), transparent);



        /* background-image: var(--pattern); */
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        background-blend-mode: overlay;

        & > * {
            /* flex-grow: 1; */
            flex: 1;
        }
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 500;

        & span {
            color: #db9be4;
        }
    }

    .subtext {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.5;
        margin-block: 2rem;
    }

    .cta_button {
        display: inline-flex;
        align-items: center;
        background-image: linear-gradient(to left top, #80308c 20%, #edb1f7);
        border-radius: 3rem;
        padding: .55rem;
        text-decoration-line: none;
        color: #fff;

        & .icon {
            display: inline-grid;
            place-items: center;
            border-radius: 3rem;
            background-image: linear-gradient(to top, #752481, #a445b2);
            box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
            padding: .5rem;
        }

        & .text {
            padding-inline: 1.2rem;
            font-size: .9rem;
        }
    }

    .circle {
        /* background-image: repeating-radial-gradient(#80308c 10%, #edb1f7 10%); */
        background-image: repeating-radial-gradient(circle, #80308c, #80308c 20%, #e97ffc 35%);
        width: 70%;
        aspect-ratio: 1;
        margin-inline: auto;
        border-radius: 50%;
    }
</style>