<script>
    import { darkMode } from '../../stores.js';
    import FadeIn from '../../lib/FadeIn.svelte';

    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Svelte", level: 70 },
        { name: "Python", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "Git", level: 80 },
        { name: "TailwindCSS", level: 90 },
        { name: "Figma", level: 75 }
    ];
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
    {#each skills as skill, i}
        <FadeIn delay={100 * (i + 1)}>
            <div class="group relative">
                <div class="overflow-hidden rounded-lg {$darkMode ? 'bg-gray-800/30' : 'bg-gray-100'} p-4 transition-all duration-300 hover:scale-105">
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-medium {$darkMode ? 'text-white' : 'text-gray-900'}">{skill.name}</span>
                        <span class="text-sm {$darkMode ? 'text-gray-400' : 'text-gray-600'}">{skill.level}%</span>
                    </div>
                    <div class="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div  class="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out"
                        style="width: {skill.level}%">

                    </div>
                
                    </div>
                </div>
            </div>
        </FadeIn>
    {/each}
</div>