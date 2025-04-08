<script lang="ts">
    import { Menu } from "@lucide/svelte";

	let dropdown: HTMLElement;
    let toggleButtonIcon: HTMLElement;

	function toggleNav() {
		dropdown.classList.toggle('open');
		const isOpen = dropdown.classList.contains('open');

		toggleButtonIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
	}
</script>

<header>
	<div class="navbar">
		<div class="logo">
			<a href="http://#">Web Dev Creative</a>
		</div>
		<ul class="links">
			<li><a href="http://#">Home</a></li>
			<li><a href="http://#">About</a></li>
			<li><a href="http://#">Services</a></li>
			<li><a href="http://#">Contact</a></li>
		</ul>
		<a href="/auth" class="action_btn">Get Started</a>
		<button class="toggle_btn" onclick={toggleNav} aria-label="toggle nav">
            <Menu color="blue" />
			<i class="fa-solid fa-bars" bind:this={toggleButtonIcon}></i>
		</button>
	</div>

	<div class="dropdown_menu" bind:this={dropdown}>
		<ul>
			<li><a href="http://#">Home</a></li>
			<li><a href="http://#">About</a></li>
			<li><a href="http://#">Services</a></li>
			<li><a href="http://#">Contact</a></li>
			<li><a href="/auth" class="action_btn">Get Started</a></li>
		</ul>
	</div>
</header>

<style>

	li {
		list-style-type: none;
	}

	a {
		font-size: 1rem;
		text-decoration: none;
		color: #fff;
	}

	a:hover {
		color: orange;
		cursor: pointer;
	}

	header {
		position: fixed;
        top: 0;
        width: 100%;
		padding-inline: 2rem;
        z-index: 5;
	}

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 60px;
		max-width: 1200px;
		margin-inline: auto;
	}

	.navbar .logo a {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.navbar .links {
		display: flex;
		gap: 2rem;
	}

	.navbar .toggle_btn {
		color: #fff;
		font-size: 1.5rem;
		cursor: pointer;
		display: none;
	}

	.action_btn {
		background-color: orange;
		color: #fff;
		padding: 0.5rem 1rem;
		border: none;
		outline: none;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: bold;
		cursor: pointer;
		transition: scale 0.2s ease;
	}

	.action_btn:hover {
		scale: 1.05;
		color: #fff;
	}

	.action_btn:active {
		scale: 0.9;
	}

	/* Dropdown Menu */
	.dropdown_menu {
		display: none;
		position: absolute;
		right: 2rem;
		top: 60px;
		width: 300px;
		background-color: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(15px);
		border-radius: 10px;
		overflow: hidden;
		height: 0;
		transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	/* .dropdown_menu.open {
		height: 240px;
	} */

	.dropdown_menu li {
		display: flex;
		padding: 0.7rem;
		justify-content: center;
		align-items: center;
	}

	.dropdown_menu .action_btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	/* section#hero {
		height: calc(100vh - 60px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		text-align: center;
	} */

	/* #hero h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	} */

	/* Responsive Design */
	@media screen and (max-width: 996px) {
		.navbar .action_btn,
		.navbar .links {
			display: none;
		}

		.navbar .toggle_btn {
			display: block;
		}

		.dropdown_menu {
			display: block;
		}
	}

	@media screen and (max-width: 576px) {
		.dropdown_menu {
			left: 2rem;
			width: unset;
		}
	}
</style>
