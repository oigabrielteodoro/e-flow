module.exports = {
  stories: ['../src/ui/components/**/**.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  features: {
    postcss: false,
  },
}
