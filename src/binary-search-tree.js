const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor() {
        this.rootNode = null
    }

    root() {
        return this.rootNode
    }

    add(data) {
        if (data) {
            const n_Node = new Node(data)
            this.rootNode === null ? this.rootNode = n_Node : this.addNode(this.rootNode, n_Node)
        }
    }

    addNode(node, n_Node) {
        if (n_Node.data < node.data) {
            if (node.left === null) {
                node.left = n_Node;
            } else {
                this.addNode(node.left, n_Node);
            }
        } else {
            if (node.right === null) {
                node.right = n_Node;
            } else {
                this.addNode(node.right, n_Node);
            }
        }
    }

    has(data) {
        return this.find(data) !== null
    }

    find(data) {
        const findF = (node, data) => !node ? null : node.data === data ? node : data < node.data ? findF(node.left, data) : findF(node.right, data)
        return findF(this.rootNode, data)
    }

    remove(data) {
        return this.removeNode(this.rootNode, data)
    }

    removeNode(node, data) {
        if (node === null) {
            return null
        }
        if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        }
        if (node.right === null) {
            node = node.left;
            return node;
        }
        node.data = this.l_rSearch(node.right, "left").data
        node.right = this.removeNode(node.right, node.data);
        return node;
    }

    min() {
        return this.l_rSearch(this.rootNode, "left").data
    }

    max() {
        return this.l_rSearch(this.rootNode, "right").data
    }

    l_rSearch(node, direction) {
        return !node[direction] ? node : this.l_rSearch(node[direction], direction)
    }


}

module.exports = {
    BinarySearchTree
};