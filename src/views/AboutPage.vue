<template>
  <div class="bg-blue-100 min-h-screen flex items-center justify-center py-14">
    <div class="text-left max-w-4xl px-6">
      <!-- 顔写真 -->
      <div class="flex justify-center mb-8">
        <img
          src="@/assets/myphoto.jpg"
          alt="Kenta Kido"
          class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
        />
      </div>

      <h1 class="text-4xl font-extrabold text-blue-800">
        Kenta Kido
      </h1>
      <p class="mt-1 text-sm text-blue-600">
        (geboren: 17.01.1995 in Tokyo, Japan)
      </p>
      <p class="mt-2 text-lg text-blue-600">
        Ein Informatikstudent mit großem Interesse an Softwareentwicklung, der in der Vergangenheit in japanischen Ministerien intensiv an rechtlichen Themen gearbeitet hat und sich auch für ehrenamtliche Tätigkeiten begeistert.
      </p>

      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Bildungsweg</h2>
        <ul class="mt-4 space-y-4 text-blue-700">
          <li>
            <span class="font-semibold">10/2022 – Laufend:</span> Studium der Informatik (B.Sc.)<br />
            Universität Leipzig (Leipzig, DE)
            <ul class="list-disc pl-6">
              <li>Spezialisierung: Natural Language Processing</li>
              <li>Im 5. Semester</li>
              <li>Aktuelle gesamt Note: 1.8</li>
            </ul>
          </li>
          <li>
            <span class="font-semibold">04/2014 – 03/2018:</span> Studium der Wirtschaft (Bachelor of Economics)<br />
            The University of Tokyo (Tokyo, Japan)
            <ul class="list-disc pl-6">
              <li>Spezialisierung: Mikroökonomie, Wirtschaftsgeschichte</li>
              <li>Erfordernis, um den besten 0.5 % der Schüler*innen zu gehören, um die Zulassung zur Universität Tokyo zu erhalten</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- スキル -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Kenntnisse</h2>

        <p class="mt-2 text-blue-700">
          <strong>Software:</strong>
        </p>
        <ul class="list-disc pl-6 text-blue-700">
            <li>Java (Spring Boot) - gut</li>
            <li>JavaScript (Vue.js) - gut</li>
            <li>SQL (PostgreSQL) - gut</li>
            <li>MS Excel, MS PowerPoint, MS Word - sehr gut</li>
        </ul>
        <p class="mt-2 text-blue-700">
          <strong>Portfolio Web App:</strong> Example.com
        </p>
        <p class="mt-2 text-blue-700">
          Verwendete Tech Stacks:
        </p>
        <ul class="list-disc pl-6 text-blue-700">
            <li>Backend: Spring Boot, Spring Security</li>
            <li>Frontend: Vue.js(Vue Router, Axios), TailwindCSS</li>
            <li>Database: PostgreSQL</li>
        </ul>

        <p class="mt-4 text-blue-700">
          <strong>Sprachen:</strong> 
        </p>
        <ul class="list-disc pl-6 text-blue-700">
            <li>Japanisch (Muttersprache)</li>
            <li>Deutsch (C1)</li>
            <li>Englisch (C1)</li>
            <li>Russisch (A2)</li>
            <li>Französisch (A2)</li>
        </ul>
      </div>

      <!-- 職歴 -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Berufserfahrung</h2>
        <ul class="mt-4 space-y-4 text-blue-700">
          <li>
            <span class="font-semibold">09/2020 – 12/2021:</span> Associate Director<br />
            Cabinet Office (Tokyo, Japan)
            <ul class="list-disc pl-6">
              <li>Ausarbeitung von Regulierungen zur Verhinderung des Einflusses krimineller Organisationen auf zuständige Branchen</li>
              <li>Ausarbeitung von Regulierungen zur Bekämpfung von Geldwäsche in zuständigen Branchen</li>
              <li>Zusammenarbeit mit ausländischen Regulierungsbehörden (z. B. in Singapur und Australien)</li>
              <li>Analyse und Entwicklung eines Systems zur Effizienzsteigerung von Genehmigungsprozessen</li>
            </ul>
          </li>
          <li>
            <span class="font-semibold">04/2018 – 09/2020:</span> Staff<br />
            Ministry of Land, Infrastructure, Transport and Tourism (Tokyo, Japan)
            <ul class="list-disc pl-6">
              <li>Ausarbeitung von Subventionen für zuständige Industrien in Krisenzeiten wie der Corona-Pandemie oder Naturkatastrophen</li>
              <li>Auswahl von Schwerpunktpolitiken zur Erstellung des Haushaltsentwurfs des Ministeriums</li>
              <li>Verfassen eines Weißbuches</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Freiwilliges Engagement</h2>
        <ul class="mt-4 text-blue-700 space-y-4">
          <li>
            <span class="font-semibold">07/2023 – Laufend:</span> Das Japanische Haus
            <p>Ein soziales Projekt zur Förderung der regionalen Entwicklung und des internationalen Verständnisses auf Bürgerebene</p>
            <p><strong>Aufgabenbereich:</strong> Planung und Durchführung von Veranstaltungen sowie gemeinsames Kochen für die regelmäßige Küfa („Küche für alle“)</p>
            <p><strong>(Frühere Veranstaltungen)</strong></p>
            <ul class="list-disc pl-6">
              <li>Planung und Durchführung von Veranstaltungen</li>
              <li>Solidarität Küfa: Geld, das durch Kufa gesammelt wurde, wird für soziale oder gesellschaftliche Probleme gespendet</li>
              <li>Fotoausstellung einer japanischen Fotografin</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Auslandserfahrung</h2>
        <ul class="mt-4 space-y-4 text-blue-700">
            <span class="font-semibold">10/1995 – 3/2002:</span> Kindergarten und Schule (London, UK)<br />
        </ul>
      </div>

      <!-- 趣味 -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-blue-800">Hobbys</h2>
        <p class="mt-4 text-blue-700">
          <strong>Kochen & Backen</strong>
        </p>
        <p class="mt-2 text-blue-700 leading-relaxed">
            Im Winter 24/25 habe ich zum ersten Mal eine selbstgestrickte Mütze gemacht.
        </p>
        <!-- photos -->
        <div class="flex flex-wrap justify-center gap-8 mt-6">
            <!-- 画像1 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Mütze"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Meine erste gestrickte Mütze</p>
            </div>

            <!-- 画像2 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Schal"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Ein warmer Schal</p>
            </div>

            <!-- 画像3 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Handschuh"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Handgestrickte Handschuhe</p>
            </div>
        </div>   
        <p class="mt-4 text-blue-700">
          <strong>Karaoke</strong>
        </p>
        <p class="mt-2 text-blue-700 leading-relaxed">
            Im Winter 24/25 habe ich zum ersten Mal eine selbstgestrickte Mütze gemacht.
        </p>
        <!-- photos -->
        <div class="flex flex-wrap justify-center gap-8 mt-6">
            <!-- 画像1 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Mütze"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Meine erste gestrickte Mütze</p>
            </div>

            <!-- 画像2 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Schal"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Ein warmer Schal</p>
            </div>

            <!-- 画像3 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Handschuh"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Handgestrickte Handschuhe</p>
            </div>
        </div>   
        <p class="mt-4 text-blue-700">
          <strong>Bouldern</strong>
        </p>
        <p class="mt-2 text-blue-700 leading-relaxed">
            Im Winter 24/25 habe ich zum ersten Mal eine selbstgestrickte Mütze gemacht.
        </p>
        <!-- photos -->
        <div class="flex flex-wrap justify-center gap-8 mt-6">
            <!-- 画像1 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Mütze"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Meine erste gestrickte Mütze</p>
            </div>

            <!-- 画像2 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Schal"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Ein warmer Schal</p>
            </div>

            <!-- 画像3 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Handschuh"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Handgestrickte Handschuhe</p>
            </div>
        </div>   
        <p class="mt-4 text-blue-700">
            <strong>Stricken</strong>
        </p>
        <p class="mt-2 text-blue-700 leading-relaxed">
            Im Winter 24/25 habe ich zum ersten Mal eine selbstgestrickte Mütze gemacht.
        </p>
        <!-- photos -->
        <div class="flex flex-wrap justify-center gap-8 mt-6">
            <!-- photo1 -->
            <div class="text-center">
            <img
                src="@/assets/Stricken.jpg"
                alt="Ein selbstgestrickter Mütze"
                class="rounded-full w-48 h-48 border-4 border-blue-600 shadow-lg object-cover"
            />
            <p class="mt-2 text-blue-700">Meine erste gestrickte Mütze</p>
            </div>
        </div>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
