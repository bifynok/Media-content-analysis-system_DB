/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "3aa2e568a8fb1607a2f3fbd77ac31918"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.bcd040ba.css",
    "revision": "d8b4ad386149975297fbe47f4d4161c6"
  },
  {
    "url": "assets/img/Delete.3e6f9ffe.png",
    "revision": "3e6f9ffe8fea9ce0603a2fb993c07bfb"
  },
  {
    "url": "assets/img/Error.ecebbdab.png",
    "revision": "ecebbdab15c0cd71f94966700910fe06"
  },
  {
    "url": "assets/img/GetAll.bc447ca2.png",
    "revision": "bc447ca25c01206430ab1d7d6eb44f36"
  },
  {
    "url": "assets/img/GetById.355f74c9.png",
    "revision": "355f74c9ec863264a1998c5f1e36e132"
  },
  {
    "url": "assets/img/Patch.63ebbe65.png",
    "revision": "63ebbe650d7bb58e83ec0f197b514f15"
  },
  {
    "url": "assets/img/Post.16d33c51.png",
    "revision": "16d33c51f5b104ee53bedde8c6a87df4"
  },
  {
    "url": "assets/img/relational_schema.06c8bb4c.jpg",
    "revision": "06c8bb4c67301f964ac3ade6cd210bf6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.0af08699.js",
    "revision": "92870b239e7f52efcb0207c3d70bcba8"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.f302d2b9.js",
    "revision": "96af364c43178c1782bc4ee92b576d6c"
  },
  {
    "url": "assets/js/14.eed6fbcb.js",
    "revision": "fc8adf744f64945e3fb309f06e74d6fa"
  },
  {
    "url": "assets/js/15.be5fee15.js",
    "revision": "5e0eec27f980761549d0a9d065fb6c6b"
  },
  {
    "url": "assets/js/16.cf463377.js",
    "revision": "d28f494f87f81690d15b0c502f551e06"
  },
  {
    "url": "assets/js/17.2a3517c6.js",
    "revision": "710e16aedd0d94de3d45d2c898a547de"
  },
  {
    "url": "assets/js/18.693478bd.js",
    "revision": "73d5bfae04a5540626f55644d81b290f"
  },
  {
    "url": "assets/js/19.5103567b.js",
    "revision": "d6c90e0683fc071c80054550f15c0538"
  },
  {
    "url": "assets/js/2.cd227bce.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.15a7b89f.js",
    "revision": "9984799b079bf888a374c2ed7ac5a637"
  },
  {
    "url": "assets/js/21.c772d347.js",
    "revision": "29caf259a861d7dba334ed6dcade6f55"
  },
  {
    "url": "assets/js/22.9de0624c.js",
    "revision": "a2c34fbf4630d40040d6a7e20afad42a"
  },
  {
    "url": "assets/js/23.6e8439e6.js",
    "revision": "3fd191bfecfd48d73642021ea0892f78"
  },
  {
    "url": "assets/js/24.ecac71be.js",
    "revision": "ce91aa3fb2f3b34e80a249b96683cbaa"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.1a17d55a.js",
    "revision": "da12692cacd0e29dd4f83a42314ba884"
  },
  {
    "url": "assets/js/4.00897e76.js",
    "revision": "d90a096424916e5abc7bef734b036d65"
  },
  {
    "url": "assets/js/5.803ba629.js",
    "revision": "21d8987bf06060d74b00603dcfe589c4"
  },
  {
    "url": "assets/js/6.04503463.js",
    "revision": "9fc1e6f66a79ffd5ee26e937f91216b2"
  },
  {
    "url": "assets/js/7.17e35dd8.js",
    "revision": "0b6a3683bc0b50e2b14e27c5f63cba55"
  },
  {
    "url": "assets/js/8.7be0851e.js",
    "revision": "dd31e52a5cd3dab0e1aff0fed225c178"
  },
  {
    "url": "assets/js/9.30fcfcb7.js",
    "revision": "87f0ec0fd8b57284e02585d24e8d9f23"
  },
  {
    "url": "assets/js/app.4517769b.js",
    "revision": "2698585daf06d81606dc4c36b2b1e9a6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1cc205340152150a8de89c246225f1d2"
  },
  {
    "url": "design/index.html",
    "revision": "d55747448d6f9c1ef6a43b52d58c54fe"
  },
  {
    "url": "index.html",
    "revision": "273a25afb85698d72bafba276c3f56c4"
  },
  {
    "url": "intro/index.html",
    "revision": "54dc3b38b8fb0dc198ec6c81bd833e34"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "eb10306bde344978a4c7c0407a3645f6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "615679f61518ebd4380d4ddc861c770a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1d0eedcf277102b5840de51655bf9e3e"
  },
  {
    "url": "software/index.html",
    "revision": "a112a913e3035a652063e461b3eea7f8"
  },
  {
    "url": "test/index.html",
    "revision": "a99d4942cfbb5c50c27d4a8f1423f478"
  },
  {
    "url": "use cases/index.html",
    "revision": "18d7a175d0b2a46c1d5a525ef6aecfb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
