/* eslint-disable no-restricted-globals */
console.log("Hello from Service Worker!!")
const statics = self.__WB_MANIFEST

self.addEventListener("install", event => {
  console.log("Installing!")
  self.skipWaiting()
})

self.addEventListener("activate", async () => {
  console.log("Activate!")
  setTimeout(() => {
    self.registration.showNotification("  m  e k k o",  {body:'!!!'})
  }, 4000)
})

  self.addEventListener("push", event => {
    const payload = event.data.text();
    console.log(payload)
    event.waitUntil(
      self.registration.showNotification("MEEKO", {body: payload})
    )
})