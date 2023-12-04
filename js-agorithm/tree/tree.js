//二叉树（Binary Tree）
//二叉树是每个节点最多有两个子树的树结构，子树有左右之分，次序不能任意颠倒。
//二叉树的第i层至多有2i-1个结点；深度为k的二叉树至多有2k-1个结点；对任何一棵二叉树T，如果其终端结点数为n0，度为2的结点数为n2，则n0=n2+1。
//二叉树的性质
//性质1：在二叉树的第i层上至多有2i-1个结点（i>=1）
//性质2：深度为k的二叉树至多有2k-1个结点（k>=1）
//性质3：对任何一棵二叉树T，如果其终端结点数为n0，度为2的结点数为n2，则n0=n2+1。
//性质4：具有n个结点的完全二叉树的深度为log2(n+1)
//性质5：对完全二叉树，若从上至下、从左至右编号，则编号为i的结点，其左孩子编号必为2i，其右孩子编号必为2i+1；其双亲的编号必为i/2（i=1时为根,除外）。
//性质6：若对一棵有n个结点的完全二叉树（其深度为log2(n+1)）的结点按层序编号，则对任一结点i（1<=i<=n）有：
//如果i=1，则结点i是二叉树的根，无双亲；如果i>1，则其双亲parent(i)是结点[i/2]。
//如果2i>n，则结点i无左孩子（结点i为叶子结点）；否则其左孩子LChild(i)是结点2i。
//如果2i+1>n，则结点i无右孩子；否则其右孩子RChild(i)是结点2i+1。
//如果i<=n/2，则结点i为分支结点，否则是叶子结点。
//性质7：若对一棵有n个结点的完全二叉树（其深度为log2(n+1)）的结点按层序编号，则编号为i的结点，如果2i>n，则该结点无左孩子，否则其左孩子是结点2i；如果2i+1>n，则该结点无右孩子，否则其右孩子是结点2i+1。
//性质8：对一棵有n个结点的完全二叉树（其深度为log2(n+1)）的结点按层序编号，如果编号为i的结点有左孩子，则其左孩子的编号必为2i；如果编号为i的结点有右孩子，则其右孩子的编号必为2i+1；其双亲的编号必为[i/2]（i=1时为根,除外）。
//性质9：对完全二叉树，若从上至下、从左至右编号，则编号为i的结点，其左孩子编号必为2i，其右孩子编号必为2i+1；其双亲的编号必为[i/2]（i=1时为根,除外）。
//性质10：对完全二叉树，如果从上至下、从左至右编号，则编号为i的结点，如果i>1，则其双亲parent(i)的编号必为[i/2]；如果2i<=n，则其左孩子LChild(i)的编号必为2i；如果2i>n，则该结点无左孩子；如果2i+1<=n，则其右孩子RChild(i)的编号必为2i+1；如果2i+1>n，则该结点无右孩子。
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
//二叉搜索树（Binary Search Tree）
//二叉搜索树，也称二叉排序树、有序二叉树（Ordered Binary Tree）、排序二叉树（Sorted Binary Tree），是指一棵空树或者具有下列性质的二叉树：
//1.左子树上所有结点的值均小于它的根结点的值；
//2.右子树上所有结点的值均大于它的根结点的值；
//3.以此类推：左、右子树也分别为二叉查找树。（这就是重复性！）
/*class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}*/

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
console.log(bst.search(3)); // true
console.log(bst.search(6)); // false

