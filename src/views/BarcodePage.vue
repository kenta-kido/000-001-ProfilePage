<template>
  <div class="bg-blue-100 min-h-screen flex items-center justify-center py-14">
    <div class="text-left max-w-4xl px-6">
      <h1 class="text-4xl font-extrabold text-blue-800 mb-6">Barcode-Liste</h1>

      <!-- Descriptions -->
      <p class="mt-2 text-blue-700">
        Diese Seite ist Teil der selbst entwickelten App: <a href="https://portfolio-kenta-926ed757a371.herokuapp.com" target="_blank" class="text-blue-600 underline">Japanisches Rezeptportal "mogumogu"</a> und dient zur Demonstration der Barcode-Funktionalität. 
        Wählen Sie ein Produkt aus der Liste, um den zugehörigen Barcode anzuzeigen.
      </p>
      <p class="mt-4 text-blue-700">
        Navigieren Sie zur <a href="https://portfolio-kenta-926ed757a371.herokuapp.com/recipes/barcode" target="_blank" class="text-blue-600 underline">Barcode-Scanner-Seite</a> über die Navigationsleiste oder das Hamburger-Menü und erlauben Sie der Browserkamera den Zugriff, um die Barcode-Scanner-Funktion zu starten. 
        Wenn Sie einen neuen Barcode scannen möchten oder ein Lesefehler auftritt, klicken Sie auf "Erneut Scannen". Sobald ein Barcode korrekt gelesen wird, wird das zugehörige Rezept angezeigt.
      </p>
      <p class="mt-4 text-blue-700">
        Bitte beachten Sie, dass die Produktnamen in der Datenbank der <a href="https://world.openfoodfacts.org/" target="_blank" class="text-blue-600 underline">openfoodfacts-API</a> nicht immer eindeutig sind. 
        Um diese Unklarheiten zu behandeln, haben wir ein System zur Verarbeitung natürlicher Sprache integriert, was bedeutet, dass die angezeigten Rezepte möglicherweise nicht immer die genauen Zutaten des gescannten Produkts verwenden. 
        (Unklares Beispiel: Miso (Hikari Miso) → "Miso Rouge Biologique").
      </p>
      <p class="mt-4 text-blue-700">
        Für Testzwecke haben wir Barcodes von gängigen Supermärkten und asiatischen Lebensmittelgeschäften aufgenommen. Wenn Sie japanische Lebensmittel zu Hause haben, können Sie diese ebenfalls für Tests verwenden.
      </p>

      <!-- pull down menus -->
      <div class="mt-6">
        <label for="product-select" class="text-blue-800 font-bold">Produkt auswählen:</label>
        <select
          id="product-select"
          v-model="selectedProduct"
          class="block mt-2 p-2 border border-blue-600 rounded-lg w-full"
        >
          <option disabled value="">Bitte wählen Sie ein Produkt</option>
          <option v-for="product in products" :key="product.name" :value="product">
            {{ product.name }}
          </option>
        </select>
      </div>

      <!-- showing barcodes -->
      <div v-if="selectedProduct" class="mt-8 text-center">
        <p class="text-blue-700">
          <strong>Produkt:</strong> {{ selectedProduct.name }}
        </p>
        <img
          :src="selectedProduct.barcode"
          :alt="'Barcode für ' + selectedProduct.name"
          class="mt-4 rounded-lg border-4 border-blue-600 shadow-lg w-64 h-auto mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarcodePage",
  data() {
    return {
      selectedProduct: "", // selected items
      products: [
        {
          name: "Sojasauce(Alnatura)",
          barcode: require("@/assets/barcode/barcode1_Alnatura _Sojasauce.gif"),
        },
        {
          name: "Sojasauce(Kikkoman)",
          barcode: require("@/assets/barcode/barcode2_Kikkoman_Sojasauce.gif"),
        },
        {
          name: "Miso(Bamboo Garden)",
          barcode: require("@/assets/barcode/barcode3_Bambus_Miso.gif"),
        },
        {
          name: "Miso(Hikari Miso)",
          barcode: require("@/assets/barcode/barcode7_HikariMiso_Miso.gif"),
        },
        {
          name: "Mirin(Miyata)",
          barcode: require("@/assets/barcode/barcode6_Miyata_Mirin.gif"),
        },
        {
          name: "Mirin(King Jyozo)",
          barcode: require("@/assets/barcode/barcode10_KingJyozo_Mirin.gif"),
        },
        {
          name: "Dashi(Shimaya)",
          barcode: require("@/assets/barcode/barcode4_Shimaya_Dashi.gif"),
        },
        {
          name: "Tofu(TreiberTofu)",
          barcode: require("@/assets/barcode/barcode5_TreiberTofu_Tofu.gif"),
        },
        {
          name: "Tofu(dm)",
          barcode: require("@/assets/barcode/barcode8_Dm_Tofu.gif"),
        },
      ],
    };
  },
};
</script>

