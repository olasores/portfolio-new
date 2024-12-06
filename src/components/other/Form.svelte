<script>
    // Form state
    let name = "";
    let email = "";
    let message = "";
  
    // Submit handler
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", { name, email, message });
      // You can replace this with actual form submission logic
      alert("Thank you for contacting us!");
      name = "";
      email = "";
      message = "";
    };
  </script>
  
  <main class="p-6 max-w-lg mx-auto">
   
    
    <form 
      class="bg-white shadow-md rounded-lg p-6 space-y-4"
      on:submit={handleSubmit}
    >
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          id="name"
          type="text"
          bind:value={name}
          placeholder="Enter your name"
          class="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg shadow-sm text-sm p-2"
          required
        />
      </div>
  
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          placeholder="Enter your email"
          class="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg shadow-sm text-sm p-2"
          required
        />
      </div>
  
      <!-- Message Field -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          bind:value={message}
          placeholder="Enter your message"
          rows="4"
          class="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg shadow-sm text-sm p-2"
          required
        ></textarea>
      </div>
  
      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </div>
    </form>
  </main>
  
  <style>
    /* Additional styling if needed */
  </style>
  