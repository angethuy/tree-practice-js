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

        if (new_node.key <= current.key) { //go left
            current.left = this.add_helper(current.left, new_node)
        } else {
            current.right = this.add_helper(current.right, new_node)
        }
        return current
    }

    // Time Complexity: O(n)
    // Space Complexity: O(1)
    add(key, value) {
        let new_node = new TreeNode(key,value)
        this.root = this.add_helper(this.root, new_node)
    }


    find_helper(current, key) {
        if (current == null) return null
        if (current.key == key) return current.value

        if (key < current.key && current.left != null) { //go left
            current = current.left
        } else if(current.right != null) {
            current = current.right
        } 
        return this.find_helper(current, key)
    }

    // Time Complexity: O(n) since tree not guaranteed balanced, might have to visit all nodes
    // Space Complexity: O(1)
    find(key) {
        return this.find_helper(this.root, key)
    }

    inorder_helper(current, visited) {
        if (current.left != null) { //keep checking left
            this.inorder_helper(current.left, visited)
        } 
        visited.push({key: current.key, value: current.value}) 
        if (current.right != null) {
            this.inorder_helper(current.right, visited)
        }
        return visited
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    inorder() {
        if (this.root == null) return []
        return this.inorder_helper(this.root, [])
    }

    preorder_helper(current, visited) {
        visited.push({key: current.key, value: current.value}) 
        if (current.left != null) { //keep checking left
            this.preorder_helper(current.left, visited)
        } 
        if (current.right != null) {
            this.preorder_helper(current.right, visited)
        }
        return visited
    }
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    preorder() {
        if (this.root == null) return []
        return this.preorder_helper(this.root, [])
    }

    postorder_helper(current, visited) {
        if (current.left != null) { //keep checking left
            this.postorder_helper(current.left, visited)
        } 
        if (current.right != null) {
            this.postorder_helper(current.right, visited)
        }
        visited.push({key: current.key, value: current.value}) 
        return visited
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    postorder() {
        if (this.root == null) return []
        return this.postorder_helper(this.root, [])
    }

    height_helper(current, height) {
        if (current.left != null) {
            height = height + this.height_helper(current.left, height)
        } else if (current.right != null) {
            height = height + this.height_helper(current.right, height)
        } 
        return height
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    height() {
        if (this.root==null) return 0
        return this.height_helper(this.root, 1)
    }

    // bfs_helper(parent, current, visited) {
        // visited.push({key: current.key, value: current.value})
        // if (current.left != null) { //keep checking left
        //     this.bfs_helper(current, current.left, visited)
        //     if (parent.right != null) {
        //         this.bfs_helper(parent, current.right, visited)
        //     }
        // } else 
        // if (current.right != null) {
        //     this.bfs_helper(current.right, visited)
        // }
        // return visited
    // }

    // Time Complexity: ?
    // Space Complexity: ?
    // bfs() {
    //     if (this.root == null) return []
    //     return this.bfs_helper(null, this.root, [])
    // }

    // Useful for printing
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;