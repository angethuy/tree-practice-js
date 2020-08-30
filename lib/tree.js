class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    add(key, value) {
        const newNode = new TreeNode(key, value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (current) {
            if (key <= current.key) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    return;
                }
            } else {
                if (current.right) {
                    current = current.right
                } else {
                    current.right = newNode;
                    return;
                }
            }
        }

    }

    // Time Complexity: ?
    // Space Complexity: ?
    find(key) {
        if (this.root === null) return null;
        let current = this.root;
        while (current) {
            if (key === current.key) {
                return current.value;
            } else if (key < current.key) {
                current = current.left
            } else {
                current = current.right
            }
        }

    }

    // Time Complexity: ?
    // Space Complexity: ?
    inorder() {
        let nodes = [];

        function visit(node) {
            if (!node) return;
            visit(node.left);
            nodes.push({ key: node.key, value: node.value })
            visit(node.right);
        }

        visit(this.root);
        return nodes;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    preorder() {
        let nodes = [];

        function visit(node) {
            if (!node) return;
            nodes.push({ key: node.key, value: node.value })
            visit(node.left);
            visit(node.right);
        }

        visit(this.root);
        return nodes;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    postorder() {
        let nodes = [];

        function visit(node) {
            if (!node) return;
            visit(node.left);
            visit(node.right);
            nodes.push({ key: node.key, value: node.value })
        }

        visit(this.root);
        return nodes;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    height() {

        function maxDepth(node) {
            if (!node) return 0;
            const right = maxDepth(node.right);
            const left = maxDepth(node.left);
            return Math.max(left, right) + 1
        }

        return maxDepth(this.root);

    }

    // Time Complexity: ?
    // Space Complexity: ?
    bfs() {
        if (!this.root) return [];
        let queue = [];
        let nodes = [];
        let current;

        queue.push(this.root);

        while (queue.length > 0) {
            current = queue.shift();
            nodes.push({ key: current.key, value: current.value });
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return nodes;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;