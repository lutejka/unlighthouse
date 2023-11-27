export default {
  site: 'https://harlanzw.com',
  cache: false,
  scanner: {
    device: 'desktop',
    throttle: false,
  },
  ci: {
    budget: {
      'best-practices': 75,
      'seo': 75,
      'accessibility': 75,
    },
    reporter: 'jsonExpanded',
  },
  debug: true,
}
