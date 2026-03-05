self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("mindlift-cache").then(function(cache) {
      return cache.addAll([
        "index.html",
        "manifest.json"
      ]);
    })
  );
});
