## 6/7 CS with Eric

# Huffman coding tree

`Huffman coding assigns codes to characters so that the length of the code depends on the relative frequency or weight of the corresponding character. Any prefix-free binary code can be visualized as a binary tree with the encoded characters stored at the leaves.`

`Huffman tree is a full binary tree in which each leaf of the tree corresponds to a letter in the given alphabet. Define the weighted path length of a leaf to be its weight times its depth. It is the binary tree with minimum external path weight.It allows us to build a tree with the minimum external path weight.`

# Bubble sort

`Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.`

# Heap Sort Algorithm

`Heap sort builds the heap by adjusting the position of elements within the array itself.`

# Min Heap

`A Min-heap is where the value at the root of any subtree is less than or equal to the value of either of its children.`

# Max Heap

`A Max-heap where the value at the root of any subtree is more than or equal to the value of either of its children.`

`The two children do not have to be in the same order. Sometimes the value in the left child may be more than the value at the right child and some or it may be the other way round. In a heap the highest (or lowest) priority element is always stored at the root. A heap is not a sorted structure and can be regarded as partially ordered.`

# Huffman code

- `it is just putting all nodes in a queue, and replacing the two lowest frequency nodes with one node that has the sum of their frequencies so that the new node will be the parent of the two nodes. repeat this step till the queue just contains one node (tree root).`

# Decompression

- `construct Huffman tree, then loop in the input buffer to replace each code with its ASCII. the input buffer, in erics example, is a stream of bits containing the codes of each ASCII. to replace the code with the ASCII, i need to iterate Huffman tree with the bit stream till can find a leaf. then can append its ASCII at the output buffer`
