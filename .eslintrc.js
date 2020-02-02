module.exports = {
  'root': true,
  'parserOptions': {
    'ecmaVersion': 8,
    'sourceType': 'module'
  },
  'globals': {
    'axios': true,
    'httpVueLoader': true,
    'marked': true,
    'SmoothScroll': true
  },
  'env': {
    'browser': true
  },
  'extends': [
    'tjw-base',
    'tjw-vue'
  ],
  'rules': {
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'never'
      }
    }],
    'vue/multiline-html-element-content-newline': ['off'],
    'vue/singleline-html-element-content-newline': ['off']
  }
};
