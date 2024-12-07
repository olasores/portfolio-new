<script>
  let name = ""; 
  let email = ""; 
  let message = ""; 

  // Submit handler
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", { name, email, message });
      alert("Thank you for sending a message!");
      name = "";
      email = "";
      message = "";
    };

  import { darkMode } from "../../stores";

</script>


<main class="px-2
">
  <form  class="p-6 space-y-4"
  on:submit={handleSubmit}
  >

     <!-- Name -->
     <div class="mb-2">
      <label for="name" class="block text-lg font-medium text-{$darkMode ? 'white' : 'black'} mb-1">Name</label>
      <input
        id="name"
        type="text"
        bind:value={name}
        placeholder="Enter your name"
        class="w-full border-gray-300 focus:ring-black focus:border-black rounded-lg shadow-sm text-sm p-4"
        required
      />
    </div>

    <!-- Email  -->
    <div class="mb-2">
      <label for="email" class="block text-lg font-medium text-{$darkMode ? 'white' : 'black'} mb-1">Email</label>
      <input
        id="email"
        type="email"
        bind:value={email}
        placeholder="Enter your email"
        class="w-full border-gray-300 focus:ring-black  focus:border-black rounded-lg shadow-sm text-sm p-4"
        required
      />
    </div>


     <!-- Message -->
     <div class="mb-2">
      <label for="message" class="block text-lg font-medium text-{$darkMode ? 'white' : 'black'} mb-1">Message</label>
      <textarea
        id="message"
        bind:value={message}
        placeholder="Enter your message"
        rows="4"
        class="w-full border-gray-300 focus:ring-black focus:border-black rounded-lg shadow-sm text-sm p-4"
        required
      ></textarea>
    </div>

       <!-- Submit  -->
       <div>
        <button
          type="submit"
          class="w-full bg-gray-500 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md hover:bg-black focus:ring focus:ring-black focus:ring-opacity-50"
        >
          Send Message
        </button>
      </div>
  </form>
</main>

<style>

</style>