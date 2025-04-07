<script lang="ts">
    let { data } = $props();

    console.table(data.users);
    console.table(data.memData);
</script>

<div class="wrapper">
    <main>
        <div class="title_text">
            <div class="title login">Login Form</div>
            <div class="title signup">Signup Form</div>
        </div>
        <div class="container">
            <div class="slide_controls">
                <label for="login" class="slide login">Login</label>
                <label for="signup" class="slide signup">Signup</label>
                <input type="radio" name="slider" id="login" checked />
                <input type="radio" name="slider" id="signup" />
                <div class="slide_tab"></div>
            </div>

            <div class="inner">
                <form action="?/login" class="login" method="post">
                    <div class="field">
                        <input type="email" name="email" placeholder="Email Address" autocomplete="email" required />
                    </div>
                    <div class="field">
                        <input type="password" name="password" placeholder="Password" autocomplete="current-password" minlength="6" required />
                    </div>
                    <div class="pass_link">
                        <a href="java:">Forgot Password ?</a>
                    </div>
                    <div class="field">
                        <input type="submit" value="Login" />
                    </div>
                    <div class="signup_link">Not a member ?<a href="java:">Signup now</a></div>
                </form>

                <form action="?/signup" class="signup">
                    <div class="field">
                        <input type="text" name="username" placeholder="Username" autocomplete="username" required />
                    </div>
                    <div class="field">
                        <input type="text" placeholder="Email Address" name="email" autocomplete="email" required />
                    </div>
                    <div class="field">
                        <input type="password" name="password" minlength="6" placeholder="Password" autocomplete="new-password" required />
                    </div>
                    <div class="field">
                        <input type="submit" value="Signup" />
                    </div>
                    <div class="signup_link">Already have an account ? <a href="java:">Login now</a></div>
                </form>
            </div>
        </div>
    </main>
</div>

<style>
    .wrapper {
        display: grid;
        place-items: center;
        min-height: 100vh;
        background-color: #f2f2f2;
    }
    main {
        max-width: 25rem;
        background-color: #fff;
        padding: 1.9rem;
        border-radius: .35rem;
        box-shadow: 0 .9rem 1.2rem rgba(0, 0, 0, .1);
        overflow: hidden;

        &:has(#signup:checked) {
            & .title.login, & form.login {
                margin-left: -50%;
            }
        }
    }

    .title_text {
        display: flex;
        width: 200%;

        .title {
            width: 50%;
            font-size: 2.1rem;
            font-weight: 600;
            text-align: center;
            transition: all .6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
    }

    .container {
        overflow: hidden; 
    }

    .slide_controls {
        display: flex;
        position: relative;
        height: 3rem;
        margin: 1.9rem 0 .65rem 0;
        border-radius: .35rem;
        justify-content: space-between;
        border: .1rem solid lightgray;
        overflow: hidden;
        /* width: 100%; */

        & .slide {
            width: 100%;
            font-size: 1.1rem;
            font-weight: 500;
            text-align: center;
            line-height: 2.9rem;
            cursor: pointer;
            z-index: 1;
            transition: .6s ease;
        }

        & .login:has(~ #login:checked) {
            color: #fff;
        }

        & .signup:has(~ #signup:checked) {
            color: #fff;
        }

        & input {
            display: none;
        }

        & .slide_tab {
            position: absolute;
            width: 50%;
            height: 100%;
            left: 0;
            z-index: 0;
            background-image: linear-gradient(to right, #a445b2, #fa4299);
            border-radius: .3rem;
            transition: left .6s  cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        & #signup:checked ~ .slide_tab {
            left: 50%;
        }
    }

    .inner {
        display: flex;
        width: 200%;
    }

    form {
        width: 50%;
        transition: .6s  cubic-bezier(0.68, -0.55, 0.27, 1.55);

        & .field {
            height: 3rem;
            margin-top: 1.2rem;

            &:has(input:invalid) ~ .field input[type="submit"] {
                cursor: not-allowed;
            }
        }

        & input {
            height: 100%;
            width: 100%;
            outline: none;
            padding-left: 1rem;
            font-size: 1.1rem;
            border-radius: .35rem;
            border: .1rem solid lightgrey;
            border-bottom-width: .15rem;
            transition: .4s ease;

            &[type="submit"] {
                color: #fff;
                font-size: 1.2rem;
                font-weight: 500;
                padding-left: 0;
                border: none;
                cursor: pointer;
                background-image: linear-gradient(to right, #a445b2, #fa4299);
            }

            &:focus {
                border-color: #fc83bb;
            }
        }

        & .pass_link {
            margin-top: .35rem;
        }

        & .signup_link {
            text-align: center;
            margin-top: 1.9rem;
        }

        & a {
            color: #fa4299;
            text-decoration-line: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>