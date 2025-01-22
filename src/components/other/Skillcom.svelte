<script>
    import { darkMode } from '../../stores.js';
    import FadeIn from '../../lib/FadeIn.svelte';

    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React", "Svelte", "TailwindCSS"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Python", "SQL"]
        },
        {
            title: "Tools",
            skills: ["Git", "Figma", "VS Code"]
        }
    ];
</script>

<div class="space-y-8 px-5">
    {#each skillCategories as category, i}
        <FadeIn delay={150 * (i + 1)}>
            <div class="space-y-4">
                <h3 class="text-lg font-medium {$darkMode ? 'text-gray-300' : 'text-gray-700'}">{category.title}</h3>
                <div class="flex flex-wrap gap-3">
                    {#each category.skills as skill}
                        <div 
                            class="group relative px-4 py-2 rounded-lg border 
                            {$darkMode ? 
                                'border-gray-800 bg-gray-900/20 hover:border-gray-700' : 
                                'border-gray-200 bg-gray-50 hover:border-gray-300'} 
                            transition-all duration-300 hover:translate-y-[-2px]"
                        >
                            <span class="relative z-10 text-sm {$darkMode ? 'text-gray-300' : 'text-gray-700'}">{skill}</span>
                            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    {/each}
                </div>
            </div>
        </FadeIn>
    {/each}
</div>