<template>
  <nav class="bg-blue-500 shadow-md fixed top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20 lg:h-24">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/">
            <img
              src="@/assets/logo_blue.png"
              alt="MyPortfolio Logo"
              class="h-10 md:h-12 lg:h-16 max-h-full w-auto"
            />
          </router-link>
        </div>
        <!-- Navigation links (Desktop) -->
        <div class="hidden md:flex space-x-6">
          <router-link
            to="/"
            class="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition"
            active-class="font-bold bg-blue-700"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition"
            active-class="font-bold bg-blue-700"
          >
            About
          </router-link>
          <router-link
            to="/portfolio"
            class="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition"
            active-class="font-bold bg-blue-700"
          >
            Portfolio
          </router-link>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="md:hidden bg-blue-600 text-white">
        <router-link
          to="/"
          class="block px-4 py-2 hover:bg-blue-700 transition"
          @click="toggleMenu"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="block px-4 py-2 hover:bg-blue-700 transition"
          @click="toggleMenu"
        >
          About
        </router-link>
        <router-link
          to="/portfolio"
          class="block px-4 py-2 hover:bg-blue-700 transition"
          @click="toggleMenu"
        >
          Portfolio
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isMenuOpen: false, // State of the mobile menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the state of the mobile menu
    },
  },
};
</script>

<style>
/* Adjust logo height relative to the navigation bar */
nav img {
  height: calc(100% - 10px); /* Reduce the logo size slightly compared to the navigation bar height */
  max-height: 100%; /* Ensure the logo does not exceed the bar height */
}

/* Slide-fade animation for the mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
