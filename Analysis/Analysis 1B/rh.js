module.exports = function () {
return (tree) => remove(tree, node => node.type === 'heading' && node.depth == 1);
}

