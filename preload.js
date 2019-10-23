// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
var ps = require('ps-node');
const util = require('util');

// A simple pid lookup
function getProcess (name, callback) {
  ps.lookup({command: name}});
}

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) {
      element.innerText = text
    }
  }

  for (const type of ['chrome', 'node', 'electron']) {
    console.log(getProcess(type))
    replaceText(`${type}-version`, getProcess(type))
  }
})
