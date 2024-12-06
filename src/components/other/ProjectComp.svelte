<script>
    import { projects } from '$lib/projects.js';

    import { darkMode } from '../../stores';
  
    // Tab state
    let activeTab = "all";
  
    // Tabs for filtering
    let tabs = [
      { label: "All Projects", value: "all" },
      { label: "Web Dev", value: "webdev" },
      { label: "Data Science", value: "datascience" },
      { label: "UX/UI", value: "uxui" },
    ];
  
    // Filtered projects based on active tab
    $: filteredProjects = 
      activeTab === "all"
        ? projects
        : projects.filter((project) => project.category.includes(activeTab));
  </script>
  
  
  <main class="p-6">
    <!-- Tabs -->
    <div 
      class="flex flex-wrap gap-2 mb-6 justify-start sm:justify-center">
      {#each tabs as tab}
        <button
        class="py-2 px-4 rounded-lg text-sm font-medium 
            {activeTab === tab.value 
            ? 'bg-gray-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
        on:click={() => (activeTab = tab.value)}
        >
        {tab.label}
        </button>
      {/each}
    </div>

  
    <!-- Projects Cards -->
    <div class="space-y-6">
      {#each filteredProjects as project}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="block">
          <div 
            class="flex flex-col sm:flex-row shadow-md rounded-lg overflow-hidden {$darkMode
        ? 'text-white bg-black'
        : 'text-white-mode-900 bg-white-mode-50'}">
            <!-- Image -->
            <img 
              src={project.image} 
              alt={project.title} 
              class="w-full sm:w-1/3 h-48 sm:h-auto object-cover">
            
            <!-- Content -->
            <div class="p-4 flex-1">
              <h3 class="text-lg font-semibold mb-2">{project.title}</h3>
              <p class="text-{$darkMode ? 'white' : 'black'} text-sm mb-3">{project.inspiration}</p>
              <div class="flex flex-wrap gap-2">
                {#each project.tech as tech}
                  <span class="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded">{tech}</span>
                {/each}
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>    
  </main>
  