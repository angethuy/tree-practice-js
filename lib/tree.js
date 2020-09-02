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

    add_helper(current, new_node) {
        if (current == null) { return new_node }

        if (new_node.key <= current) { //go left
            current.left = this.add_helper(current.left, new_node)
        } else {
            current.right = this.add_helper(current.right, new_node)
        }
        return current
    }

    // Time Complexity: ?
    // Space Complexity: ?
    add(key, value) {
        this.root = this.add_helper(this.root, new TreeNode(key, value))
    }


    find_helper(current, key) {
        if (current == null) return null
        if (current.key == key) return current.value

        if (key < current) { //go left
            current = current.left
        } else {
            current = current.right
        }
        return this.find_helper(current, key)
    }

    // Time Complexity: ?
    // Space Complexity: ?
    find(key) {
        return this.find_helper(this.root, key)
    }

    // Time Complexity: ?
    // Space Complexity: ?
    inorder() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    preorder() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    postorder() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    height() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    bfs() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Useful for printing
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;