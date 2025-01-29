<template>
  <footer class="bg-white text-black py-12">
    <div class="container mx-auto px-6">
      <!-- Footer Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
        <!-- Logo or Brand -->
        <div class="mb-6 md:mb-0 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0">
          <h2 class="text-3xl font-bold">No Brand.</h2>
          <p class="mt-2 text-black">Cook with me</p>
        </div>

        <!-- Links Section -->
        <div
          class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0"
        >
          <div>
            <h3 class="font-semibold text-lg mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/home" class="text-black hover:text-red-700 transition-colors">Home</a>
              </li>
              <li>
                <a href="/features" class="text-black hover:text-red-700 transition-colors"
                  >Features</a
                >
              </li>
              <li>
                <a href="/contact" class="text-black hover:text-red-700 transition-colors"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <div class="motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0">
            <h3 class="font-semibold text-lg mb-2">Legal</h3>
            <ul>
              <li>
                <a href="/terms" class="text-black hover:text-red-700 transition-colors"
                  >Terms of Service</a
                >
              </li>
              <li>
                <a href="/privacy" class="text-black hover:text-red-700 transition-colors"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center md:text-left">
        <div class="flex justify-center md:justify-start space-x-6 mb-4">
          <a href="#" class="text-gray-400 hover:text-red-700 transition-colors">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-black hover:text-white transition-colors">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>

        <p class="text-black text-sm motion-opacity-in-0 motion-translate-y-in-50 motion-delay-0">
          &copy; 2025 No Brand. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
