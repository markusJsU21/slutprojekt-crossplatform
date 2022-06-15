/* eslint-disable no-restricted-globals */
console.log("Hello from Service Worker!!")
const statics = self.__WB_MANIFEST
//Kolla att navigator.serviceworker. och kolla om client är online eller ej. Service worker svarar bara om vi är offline.
// cache.addAll(statics) Lägg till i install


self.addEventListener("install", event => {

  event.waitUntil(
    caches.open('vårCache').then( cache =>
      cache.addAll(statics.map(static => static.url))
      ))
      self.skipWaiting()
      console.log("Installing!")
})

self.addEventListener("activate", async () => {
  console.log("Activate!")
  // setTimeout(() => {
  //   self.registration.showNotification("  m  e k k o",  {body:'!!!'})
  // }, 4000)
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


//   self.addEventListener("push", event => {
//     const payload = event.data.text();
//     console.log(payload)
//     event.waitUntil(
//       self.registration.showNotification("MEEKO", {body: payload})
//     )
// })