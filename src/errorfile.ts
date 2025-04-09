// service-worker.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox.js');

if (workbox) {
  console.log('Workbox is loaded!');
  workbox.routing.registerRoute(
    new RegExp('/static/'),
    new workbox.strategies.CacheFirst()
  );
} else {
  console.log('Workbox failed to load');
}