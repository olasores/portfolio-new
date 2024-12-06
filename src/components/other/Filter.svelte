<script>
    import { Tabs, TabItem } from 'flowbite-svelte';
    import Cards from '../Cards.svelte';
</script>

<Tabs tabStyle="pill">
    <TabItem
        open
        activeClasses="text-black px-4 py-2 inline-block"
    >
        <span slot="title">All</span>
        <div class="text-sm text-gray-500 dark:text-gray-400">
            <Cards />
            <b>Profile:</b>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </TabItem>
    <TabItem activeClasses="text-black px-4 py-2 inline-block">
        <span slot="title">Dashboard</span>
        <div class="text-sm text-gray-500 dark:text-gray-400">
            <b>Dashboard:</b>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </TabItem>
    <TabItem activeClasses="text-black px-4 py-2 inline-block">
        <span slot="title">Settings</span>
        <div class="text-sm text-gray-500 dark:text-gray-400">
            <b>Settings:</b>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </TabItem>
    <TabItem activeClasses="text-black px-4 py-2 inline-block">
        <span slot="title">Users</span>
        <div class="text-sm text-gray-500 dark:text-gray-400">
            <b>Users:</b>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </TabItem>
</Tabs>
