/** Build flags for content that must not go public yet. */
// The CJ customer story stays hidden until CJ confirms permission: build with SHOW_CJ=true to publish /customers/cj.
export const SHOW_CJ = process.env.SHOW_CJ === 'true';

/**
 * About page founder block: empty until the owner supplies a photo and a short story (no invented bio).
 * Fill in { name, photo: '/brand/founder.jpg', story: { en: '…', ko: '…', … } } to show it.
 */
export const FOUNDER: null | { name: string; photo: string; story: Record<string, string> } = null;

/** "See it work" demo video: set to a path under /public (with a .vtt captions file next to it) once the video exists. */
export const DEMO_VIDEO: null | { src: string; poster: string; captions: string } = null;
