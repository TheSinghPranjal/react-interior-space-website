/** Display dimensions for tablet mockups (scaled for web; capture at 2x on real device). */
export const TABLET = {
  landscape: {
    width: 520,
    height: 390,
    captureWidth: 1194,
    captureHeight: 834,
  },
  portrait: {
    width: 360,
    height: 480,
    captureWidth: 834,
    captureHeight: 1194,
  },
} as const;

export const TABLET_CAPTURE_DEVICE =
  "iPad Pro 11\" or Samsung Galaxy Tab S9 (landscape for blueprint views)";
