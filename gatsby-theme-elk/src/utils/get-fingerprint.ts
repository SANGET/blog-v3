import Fingerprint2 from 'fingerprintjs2';

/**
 * get client fingerprint
 */
const FPStoage = 'FPStoage';
export const getClientFingerprint = () => {
  // const storage = null;
  const storage = localStorage.getItem(FPStoage);
  // console.log(storage)
  return new Promise((resolve, reject) => {
    if (storage) {
      return resolve(storage);
    }
    const getFP = () => {
      Fingerprint2.get({
        excludes: {
          // canvas: true,
          webgl: true,
          adBlock: true,
          fonts: true,
          enumerateDevices: true,
        }
      }, (components) => {
        const values = components.map((component) => { return component.value; });
        const murmur = Fingerprint2.x64hash128(values.join(''), 31);
        localStorage.setItem(FPStoage, murmur);
        resolve(murmur);
      });
    };
    if (typeof window.requestIdleCallback == 'function') {
      requestIdleCallback(() => {
        getFP();
      });
    } else {
      setTimeout(() => {
        getFP();
      }, 500);
    }
  });
};

// async function test() {
//   return new Promise((resolve, reject) => {
//     const getFP = () => {
//       Fingerprint2.get({
//         excludes: {
//           canvas: true,
//           // webgl: true,
//           adBlock: true,
//           fonts: true,
//           enumerateDevices: true,
//         }
//       }, (components, ...other) => {
//         const values = components.map((component) => { return component.value; });
//         const murmur = Fingerprint2.x64hash128(values.join(''), 31);
//         console.log(murmur, components, other);
//         resolve(murmur);
//       });
//     };
//     const { Fingerprint2, requestIdleCallback } = window;
//     if (requestIdleCallback) {
//       requestIdleCallback(() => {
//         getFP();
//       });
//     } else {
//       setTimeout(() => {
//         getFP();
//       }, 500);
//     }
//   });
// }
// test();
