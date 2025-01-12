<template>
  <div class="bg-blue-50 min-h-screen flex flex-col items-center justify-center px-6">
    <h1 class="text-5xl font-extrabold text-blue-800 mb-4 text-center">
      Welcome to My Portfolio
    </h1>
    <p class="text-lg text-gray-700 text-center mb-8">
      Showcasing my projects, skills, and experience.
    </p>
    <div class="flex space-x-4">
      <router-link
        to="/portfolio"
        class="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
      >
        View My Projects
      </router-link>
      <router-link
        to="/about"
        class="bg-gray-200 text-blue-800 text-lg px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition transform hover:scale-105"
      >
        About Me
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
