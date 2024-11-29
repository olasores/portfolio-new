<script>	
	// https://www.w3schools.com/howto/howto_css_skill_bar.asp
    import Skillbar from "./skillbar.svelte";
	const skillLevels = [
		{ skill: "HTML", percent: 80, color: "red", delTime: 0 },
		{ skill: "CSS", percent: 75, color: "blue", delTime: 500 },
		{ skill: "JavaScript", percent: 90, color: "darkorange", delTime: 1000 },
		{ skill: "Python", percent: 50, color: "green", delTime: 1500 },
		{ skill: "Swift", percent: 45, color: "rebeccapurple", delTime: 2500 }
	];
</script>

<section>
	<h1>My Skills</h1>
	{#each skillLevels as {skill, percent, color, delTime}}
		<Skillbar {skill} 
							{percent}
							{color}
							{delTime}
							/>
	{/each}
</section>

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap'); */
	
	* {
		box-sizing: border-box;
		font-family: Ubuntu
	}
	
	h1 {
		font-weight: 500;
	}
	
	section {
		width: 95%;
		margin: 20px;
	}
</style>