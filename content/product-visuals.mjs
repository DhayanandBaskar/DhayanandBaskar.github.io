// Populate only after native captures and generated illustrations are inspected.
// Keep original screenshots separate from the illustrated marketing assets.
export const productVisuals = {
  speaklet: [
    { kind: 'illustration', src: '/apps/assets/illustrations/speaklet-illustration.png', width: 1536, height: 1024, alt: 'Speaklet illustration with its Settings window and small graphite dictation capsule on paper.', caption: 'Hold a key. Say it. Keep going. Illustrated from the running app’s Settings and capsule.' },
    { kind: 'screenshot', src: '/apps/assets/screenshots/speaklet-settings.jpg', width: 1140, height: 1384, alt: 'Actual Speaklet Settings showing an empty API key field, transcription options, and hold shortcut controls.', caption: 'The actual Settings window: API setup, transcription options, and the hold shortcut. Captured from Speaklet 1.0.6.' },
    { kind: 'screenshot', src: '/apps/assets/screenshots/speaklet-controls.jpg', width: 1140, height: 1384, alt: 'Actual Speaklet controls showing text insertion, terminal paste, and granted Mac permissions.', caption: 'Insertion, terminal paste, and permission status in the running app. Original capture, including the pointer.' }
  ],
  still: [
    { kind: 'illustration', src: '/apps/assets/illustrations/still-illustration.png', width: 1536, height: 1024, alt: 'Still illustration showing its nested outline and quiet Markdown reading page on paper.', caption: 'Open the file. Find your place. Illustrated from Still’s bundled welcome document.' },
    { kind: 'screenshot', src: '/apps/assets/screenshots/still-reader.jpg', width: 3024, height: 1774, alt: 'Actual Still reader displaying its welcome document with a nested heading index and compact toolbar.', caption: 'The actual reader, with the bundled Welcome.md document and its heading index.' },
    { kind: 'screenshot', src: '/apps/assets/screenshots/still-focus.jpg', width: 3024, height: 1774, alt: 'Actual Still focus mode displaying the welcome document without the toolbar or sidebar.', caption: 'The same document in focus mode, with the sidebar and toolbar hidden.' }
  ]
};
