module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    'babel-plugin-parameter-decorator',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    // ['@babel/plugin-proposal-class-properties', {loose: true}],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src',
          '@Application': './src/application',
          '@Domain': './src/domain',
          '@Infrastructure': './src/infrastructure',
          '@Presentation': './src/Presentation',
          '@Shared': './src/shared',
          '@Navigation': './src/presentation/navigation',
          '@Screens': './src/presentation/screens',
          '@Components': './src/presentation/components',
          '@Assets': './src/presentation/assets',
          '@Store': './src/presentation/store',
          '@Hooks': './src/presentation/hooks',
        },
      },
    ],
  ],
};
