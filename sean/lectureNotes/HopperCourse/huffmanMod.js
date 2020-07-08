function buildHuffTree(nodeHeap){
    const InternalNode = class{
        constructor(leftChild, rightChild){
            this.frequency = left.frequency + right.frequency;
            this.leftChild = leftChild;
            this.rightChild = rightChild;
        }
    };
    while (nodeHeap > 1){
        let right = popFromHeap(nodeHeap, nodeHuffCompare),
            left = popFromHeap(nodeHeap, nodeHuffCompare);
        addToHeap(nodeHeap, huffNodeCompare, new InternalNode(left, right))

    };
    return nodeHeap[0];
}

//takes an object as parameter, outputs array of objects where each element obj.key = {key: val}
function convertObjToKeyValArr(obj){
    let arrOfObj = [];
    for(key in obj){
        arrOfObj.push({key: obj.key});
    };
    return arrOfObj;
}

//specialized function
//takes two objects as params where each object has a key and a value
//the value of each property must be a real number
//outputs the numerical difference between each value
function keyValObjCompare(left, right){
    let leftDestruct = Object.entries(left);
    let rightDestruct = Object.entries(right);
    return leftDestruct[1] - rightDestruct[1];
};

function huffTreeFromString(s){
    let charValuePairs = charCounter(s);
    charValuePairs = convertObjToKeyValArr(charValuePairs);
    //heapsort function needs to be modified to use compare function
    let heap = heapsortWithCompare(charValuePairs, keyObjCompare);
    heap = buildHuffTree(heap);
}

function heapsortWithCompare(array_to_sort, compare)  // modifies input array
{
    let a = array_to_sort;
    const heap_begin_idx = 0;  // Begin is always the first thing, and end is one past the last thing
    let heap_end_idx = 1;
    if (a.length < 2) {
        return a;
    }
    while (heap_end_idx < a.length) {
        let current_child_idx = heap_end_idx;
        heap_end_idx = heap_end_idx + 1;
        while (current_child_idx > heap_begin_idx) {
            let current_parent_idx = Math.floor((current_child_idx - 1) / 2)
            // If our invariant is broken for this parent and child
            if (compare(a[current_child_idx],a[current_parent_idx]) > 0) {
                // Fix it
                const saved_value = a[current_child_idx];
                a[current_child_idx] = a[current_parent_idx];
                a[current_parent_idx] = saved_value;
                // Move up to see if maybe we just broke the invariant for the parent.
                current_child_idx = current_parent_idx;
            } else {
                // The invariant has been restored! Yay!
                break;
            }
        }
    }
    // We're done!  Now we have a heap!

    while (heap_end_idx > heap_begin_idx) {
        {
            heap_end_idx = heap_end_idx - 1;
            const saved_value = a[heap_end_idx];
            a[heap_end_idx] = a[heap_begin_idx];
            a[heap_begin_idx] = saved_value;
        }
        //   11    1    9   4    10    7  | 12
        let parent_idx = heap_begin_idx;
        let bigger_child_idx = parent_idx * 2 + 1;  // Assume the left hand child is biggest
        while (bigger_child_idx < heap_end_idx) {
            if (((bigger_child_idx + 1) < heap_end_idx)  // If we have right hand child
                && (compare(a[bigger_child_idx], a[bigger_child_idx + 1]) < 0))  // and the right hand child happens to be bigger
            {
                bigger_child_idx = bigger_child_idx + 1;  // Fix our mistaken assumption
            }
            if (compare(a[parent_idx], a[bigger_child_idx] < 0)) {
                const saved_value = a[bigger_child_idx];
                a[bigger_child_idx] = a[parent_idx];
                a[parent_idx] = saved_value;
                parent_idx = bigger_child_idx;
                bigger_child_idx = parent_idx * 2 + 1;
            } else {
                break;
            }
        }
    }
    return a;
}

function huffmanParse (hufftree){
    let letterAssociation = {};
    function nextLvl (node, path = []) {
        if (!'letter' in node) {
            path.push(0)
            nextLvl(node.left, path);
            path.pop()
            //returns later function to trigger inbuilt tail-recursion optimization
            return nextLvl(node.right, path.push(1))
        } else {
            letterAssociation[node.symbol] = path;
            return;
        }
    };
    nextLvl(hufftree);
    return letterAssociation
}

//DO NOT PUSH THIS BUTTON!!!
function allArraysAreSums () {
    function arrayToSum (elem) {
        if(Array.isArray(elem)){
            elem = elem.reduce((sum, val) => {
                if (Array.isArray(val)){
                    arrayToSum(val);
                }
                return sum + val;
            });
        } else if (typeof elem === 'object'){
            for (prop in elem) {
                arrayToSum(elem.prop);
            }
        } else {
            console.log(elem);
        }
    };
    arrayToSum(window);
    console.log('lulz');
    return ({} + []);
};