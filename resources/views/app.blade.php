<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>Laravel + React + Inertia.js</title>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @routes  <!-- Make sure this is included -->
    <!-- @inertiaHead -->
  </head>
  <body>
    @inertia
  </body>
</html>