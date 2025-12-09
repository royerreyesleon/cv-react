// declare global {
//   interface JQuery {
//     fotorama(options?: unknown): JQuery;
//   }
// }

// export {};

declare module 'fotorama/fotorama.js';

interface JQuery {
  fotorama(options?: unknown): JQuery;
}
