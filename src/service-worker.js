/* eslint-disable no-restricted-globals */
console.log("Hello from Service Worker!!")
const statics = self.__WB_MANIFEST
//Kolla att navigator.serviceworker. och kolla om client är online eller ej. Service worker svarar bara om vi är offline.
// cache.addAll(statics) Lägg till i install

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open('vårCache').then( cache =>
      cache.addAll(statics.map(staticFile => staticFile.url))
      ))
      self.skipWaiting()
      console.log("Installing!")
})

self.addEventListener("activate", async () => {
  console.log("Activate!")
})

self.addEventListener("fetch", event => {
  console.log("You are requesting ", event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      // If it is in in cache, respond with it
      if(response){ return response }
      // Otherwise, go to network
      return fetch( event.request )
    })
  )
})