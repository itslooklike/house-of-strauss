module.exports = {
  customSyntax: '@stylelint/postcss-css-in-js',
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-recommended', 'stylelint-config-rational-order'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
