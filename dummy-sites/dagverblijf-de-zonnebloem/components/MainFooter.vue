<template>
  <footer class="bg-amber-100 mt-10 text-amber-900 py-10">
    <div class="container mx-auto grid grid-cols-12 gap-8 px-6">
      <!-- Over Ons -->
      <div class="col-span-12 md:col-span-4">
        <h2 class="text-lg font-bold text-amber-700">Over ons</h2>
        <p class="mt-2 text-sm">
          Bij onze kinderopvang creëren we een veilige, warme en speelse
          omgeving waarin kinderen zich vrij kunnen ontwikkelen. Ontdek hoe wij
          een tweede thuis bieden voor jouw kind!
        </p>
      </div>

      <!-- Snelle links -->
      <div class="col-span-6 md:col-start-6 md:col-span-3">
        <h2 class="text-lg font-bold text-amber-700">Snelle links</h2>
        <ul class="mt-2 space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">Over ons</a></li>
          <li><a href="#" class="hover:underline">Onze aanpak</a></li>
          <li><a href="#" class="hover:underline">Inschrijven</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <!-- Contactgegevens -->
      <div class="col-span-6 md:col-span-4">
        <h2 class="text-lg font-bold text-amber-700">Contact</h2>
        <ul class="mt-2 space-y-2 text-sm">
          <li>📍 Kinderopvang Zonnestraal</li>
          <li>📍 Hoofdstraat 123, 1234 AB Stad</li>
          <li>📞 06 - 123 456 78</li>
          <li>📧 info@kinderopvang.nl</li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-10 text-center text-xs text-amber-600">
      &copy; {{ new Date().getFullYear() }} Kinderopvang Zonnestraal. Alle
      rechten voorbehouden.
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
