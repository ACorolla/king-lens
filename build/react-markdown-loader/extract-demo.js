var removePosition = require('unist-util-remove-position');
var u = require('unist-builder');
var _ = require('lodash');

var helper = require('./helper');

function isParagraph(node, textPredicate) {
  return node.type === 'paragraph' &&
    node.children && node.children[0] && node.children[0].type === 'text' && textPredicate(node.children[0].value);
}

function isDemoStartText(text) {
  return /^\s*:::\s*demo/i.test(text);
}

function isDemoEndText(text) {
  return /^\s*:::\s*$/i.test(text);
}

function getDemoTitle(node) {
  var text = node.children[0].value;
  var match = /^\s*:::\s*demo\s+(.+)$/i.exec(text);
  text = match && match[1] || '';

  var textNode = u('text', text);
  var children = [textNode].concat(node.children.slice(1));
  return u('paragraph', children);
}

function getDemoDescription(nodes, startIndex, endIndex) {
  endIndex -= 1;
  var node = nodes.slice(startIndex + 1, endIndex);
  return node;
}

function isDemoAtIndex(nodes, index) {
  var nodeCount = nodes.length;
  var node = nodes[index];

  if (isParagraph(node, isDemoStartText)) {
    for (var endIndex = index;endIndex < nodeCount; endIndex++) {
      var tmpNode = nodes[endIndex];
      if (isParagraph(tmpNode, isDemoEndText)) {
        return endIndex;
      }
    }
  }
}

function getDemo(nodes, i, endIndex) {
  var demo = nodes[endIndex - 1];
  demo.title = { type: 'root', children: getDemoDescription(nodes, i, endIndex) };
  return demo;
}

module.exports = function transformer(tree) {
  removePosition(tree, true);

  var roots = [];
  var contentRoot, demoRoot;
  var nodes = tree.children;
  var numberOfTopLevelNodes = nodes.length;
  var i = 0;

  function addDemo(demo) {
    if (!demoRoot) {
      demoRoot = helper.createRoot({ contentType: 'demo' });
    }

    helper.addChild(demoRoot, demo);
  }

  function addContent(content) {
    if (!contentRoot) {
      contentRoot = helper.createRoot({ contentType: 'markdown' });
    }

    helper.addChild(contentRoot, content);
  }

  function saveRoot(r) {
    if (r) {
      roots.push(r);
    }
  }

  while (i < numberOfTopLevelNodes) {
    // 确保每个demo块只有一段代码
    saveRoot(demoRoot);
    demoRoot = undefined;

    var endIndex = isDemoAtIndex(nodes, i);
    if (endIndex) {
      saveRoot(contentRoot);
      contentRoot = undefined;

      addDemo(getDemo(nodes, i, endIndex));
      i = endIndex + 1;
    } else {
      addContent(nodes[i]);
      i++;
    }
  }
  // save the last section
  saveRoot(contentRoot);
  saveRoot(demoRoot);

  return roots;
};
