importScripts("/bug-pwa/precache-manifest.79cb5e559dc794d5894c7957ec7e735f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


const SW = '[Service Worker]';
self.addEventListener('push', event => {
  console.log(`${SW} Push Received.`);
  console.log(`${SW} Push had this data: ${event.data.text()}`);

  const title = '恭喜';
  const options = {
    body: '訊息：' + event.data.text(),
    // icon: '',
    // badge: ''
  };
  setTimeout(() => {
    event.waitUntil(self.registration.showNotification(title, options));
  }, 5000);
});

self.addEventListener('notificationclick', event => {
  console.log(`${SW} Notification click Received.`);
  event.notification.close();
  event.waitUntil(
   clients.openWindow(
      'https://alivedise.github.io/bug-pwa'
    )
  );
});

