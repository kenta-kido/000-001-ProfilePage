<template>
  <div class="bg-blue-100 min-h-screen flex items-center justify-center py-14">
    <div class="text-left max-w-4xl px-6">
      <h1 class="text-4xl font-extrabold text-blue-800 mb-6">Portfolio</h1>

      <!-- static website for introducing portfolios  -->
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
        <p class="mt-4 text-blue-700">
          <strong>GitHub:</strong> <a href="https://github.com/kenta-kido/000-001-ProfilePage" target="_blank" class="text-blue-600 underline">Zur Github(Backend)</a>
        </p>
      </div>

      <!-- self-made app -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Selbst entwickelte App: Japanisches Rezeptportal "mogumogu"</h2>
        <p class="mt-2 text-blue-700">
          <strong>Übersicht:</strong> Ein von mir entwickeltes Rezeptportal, das speziell für Gruppen oder Organisationen (z.B. <a href="/#/about#djh" target="_blank" class="text-blue-600 underline">Das japanische Haus</a>) konzipiert wurde. Es ermöglicht den Mitgliedern, eigene Rezepte zu teilen. Die Plattform unterstützt Nutzer dabei, Rezepte anhand von Interessen oder Zutaten zu finden.
        </p>
        <p class="mt-4 text-blue-700"><strong>Hauptfunktionen:</strong></p>
        <ul class="list-disc pl-6 text-blue-700">
          <li>Benutzerverwaltung: Registrierung, Anmeldung und Rechteverwaltung mithilfe von Spring Security.</li>
          <li>Rezeptverwaltung: Erstellen, Bearbeiten und Veröffentlichen von Rezepten durch Mitglieder.</li>
          <li>Suchsystem: Implementierung eines robusten Suchsystems mithilfe von Natural Language Processing (NLP) Techniken wie Trigrammen und Levenshtein-Distanz, um ungenaue oder alternative Namen effektiv zu erkennen.</li>
          <li>Tagging-System: Finden von Rezepten basierend auf persönlichen Interessen oder Tags.</li>
          <li>Barcode-Scanning: Suche nach Rezepten basierend auf eingescannten Produkt-Barcodes, unter Verwendung der <a href="https://world.openfoodfacts.org/" target="_blank" class="text-blue-600 underline">openfoodfacts-API</a>.</li>
          <li>Unit-Tests: Sicherstellung der Softwarequalität durch umfangreiche Tests.</li>
        </ul>
        <p class="mt-4 text-blue-700"><strong>Verwendete Tech Stacks:</strong></p>
        <ul class="list-disc pl-6 text-blue-700">
          <li>Frontend: Vue.js, TailwindCSS</li>
          <li>Backend: Spring Boot, Spring Security, PostgreSQL</li>
        </ul>
        <p class="mt-4 text-blue-700">
          <strong>Deploy-Ziel:</strong> Heroku
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Github (Backend):</strong> <a href="https://github.com/kenta-kido/001-001-Recipe-Backend" target="_blank" class="text-blue-600 underline">Zur Github(Backend)</a>
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Github (Frontend):</strong> <a href="https://github.com/kenta-kido/001-002-Recipe-Frontend" target="_blank" class="text-blue-600 underline">Zur Github(Frontend)</a>
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Link:</strong> <a href="https://portfolio-kenta-926ed757a371.herokuapp.com/" target="_blank" class="text-blue-600 underline">Zur Website</a>
        </p>
        <p class="mt-4 text-blue-700">
          <strong>Hinweis:</strong>
        </p>
        <ul class="list-disc pl-6 text-blue-700">
          <li>
            Die Anwendung wird auf einer kostengünstigen Heroku-Instanz gehostet. 
            Dadurch kann es bei der ersten Ladezeit oder bei längerer Inaktivität zu Verzögerungen kommen.
          </li>
          <li>
            Die Seite <router-link to="/barcode" class="text-blue-600 underline">Barcode-Liste</router-link> dient der Demonstration der Barcode-Funktionalität. 
            Bitte beachten Sie:
            <ul class="list-disc pl-6">
              <li>Die Daten sind ausschließlich für nicht-kommerzielle und private Zwecke gedacht.</li>
              <li>Die Verantwortung für die korrekte Nutzung der Daten liegt beim Nutzer.</li>
            </ul>
          </li>
        </ul>
        <!-- Meaning of Mogumogu -->
        <p class="mt-4 text-blue-700">
          <strong>Was bedeutet "mogumogu"?</strong>
        </p>
        <p class="mt-2 text-blue-700">
          "Mogumogu" ist ein japanisches Wort, das das Geräusch beim Kauen oder Essen beschreibt – ähnlich wie "munch munch" im Englischen. Es vermittelt das Gefühl des Genusses beim Essen und steht symbolisch für die Freude am Entdecken und Teilen von Rezepten auf unserer Plattform.
        </p>
        <p class="mt-2 text-blue-700">
          Mit "mogumogu" möchten wir nicht nur den Gaumen, sondern auch das Gemeinschaftsgefühl anregen. Hier dreht sich alles um leckere Gerichte und das Verbinden von Menschen durch ihre Leidenschaft fürs Kochen!
        </p>
      </div>

      <!-- project at the university -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Softwareengineering Praktikum 24/25 WS</h2>
        <p class="mt-2 text-blue-700">
          <strong>Übersicht:</strong> Entwicklung eines Mittagessen-Bestellservice für das Intranet eines Unternehmens. Das Projekt wurde als Gruppenarbeit durchgeführt, bei der die Aufgaben klar aufgeteilt wurden, um eine realistische Projektdynamik zu simulieren.
        </p>
        <p class="mt-4 text-blue-700"><strong>Verwendete Tech Stacks:</strong></p>
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
