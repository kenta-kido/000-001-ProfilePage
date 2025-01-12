<template>
  <div class="bg-blue-100 min-h-screen flex items-center justify-center py-14">
    <div class="text-left max-w-4xl px-6">
      <h1 class="text-4xl font-extrabold text-blue-800 mb-6">Portfolio</h1>

      <!-- 1つ目の要素 -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Diese Website</h2>
        <p class="mt-2 text-blue-700">
          <strong>Übersicht:</strong> Eine persönliche Portfolio-Website, um meine Projekte und Fähigkeiten zu präsentieren.
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Verwendete Tech Stacks:</strong>
        </p>
        <ul class="list-disc pl-6 text-blue-700">
          <li>Vue.js</li>
          <li>TailwindCSS</li>
        </ul>
        <p class="mt-4 text-blue-700">
          <strong>Deploy-Ziel:</strong> GitHub Pages
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Link:</strong> <a href="https://kenta-kido.github.io/000-001-ProfilePage/#/" target="_blank" class="text-blue-600 underline">Zur Website</a>
        </p>
      </div>

      <!-- 2つ目の要素 -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Selbst entwickelte App</h2>
        <p class="mt-2 text-blue-700">
          <strong>Übersicht:</strong> TBA.
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Verwendete Tech Stacks:</strong>
        </p>
        <ul class="list-disc pl-6 text-blue-700">
          <li>Frontend: Vue.js, TailwindCSS</li>
          <li>Backend: Spring Boot, Spring Security, PostgreSQL</li>
        </ul>
        <p class="mt-4 text-blue-700">
          <strong>Deploy-Ziel:</strong> Heroku
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Link:</strong>
        </p>
      </div>

      <!-- 3つ目の要素 -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">
          Softwareengineering Praktikum 24/25 WS
        </h2>
        <p class="mt-2 text-blue-700">
          <strong>Übersicht:</strong> Entwicklung eines Mittagessen-Bestellservice für das Intranet eines Unternehmens. Das Projekt wurde als Gruppenarbeit durchgeführt, bei der die Aufgaben klar aufgeteilt wurden, um eine realistische Projektdynamik zu simulieren.
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Verwendete Tech Stacks:</strong>
        </p>
        <ul class="list-disc pl-6 text-blue-700">
          <li>Frontend: Vue.js, Vuetify</li>
          <li>Backend: Spring Boot, Spring Security, PostgreSQL</li>
          <li>CICD: Docker, Gitlab CICD</li>
        </ul>
        <p class="mt-4 text-blue-700">
            <strong>Mein Bereich:</strong> Ich war für das Login-Management verantwortlich, einschließlich der Implementierung sicherer Authentifizierungs- und Autorisierungsprozesse mit Spring Security.
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Deploy-Ziel:</strong> Interne Infrastruktur der Universität
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Link:</strong> Nicht verfügbar (Universitätsintern)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
};
</script>
