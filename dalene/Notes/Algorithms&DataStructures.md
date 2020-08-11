Algorithms and Data Structures

Searching:
- Linear search = with linear search algorithms, if you have 100 items to search then the worst case scenario would require that you look at every item in the input before you came across your desired value. It is called linear because the time is takes to search is exactly correlated with the amount of items in the search (100 items/input =100 checks/complexity)

- Binary search = gets its name because the word binary means “of or relating to 2 things” and the algorithm works by splitting the input into two parts until it finds the item that is being searched. One half contains the search item and the other half doesn’t. The process continues until the spot where the input is split becomes the item that is being searched. Binary search is basically just a highly disciplined approach to the process of elimination. It’s faster than linear search, but it only works with ordered sequences.

Sorting:
- MergeSort = You first have a group of people, which are all huddled together, divide into two. Then you have each of the two groups divide into two again, and so on, until you are dealing entirely with individuals. You then begin to pair the individuals up, and have the taller of the two in each pair stand to the right of the other one. Pretty soon everyone is organized into these left-right ordered pairs.
Next, you start merging the ordered pairs into ordered groups of four; then merging the ordered groups of four into ordered groups of eight; and so on. Finally, you find that you have a complete, height-ordered line of people. Without knowing it, you have followed the MergeSort algorithm.

- QuickSort = we’ll create a separator at the beginning of the array and represent it with the pound-sign.  Moving from left to right through our array, our goal is to put any number smaller than the pivot (9) to the left of the separator, and any number greater than (or equal to) the pivot to the right of the separator. We start with the first number in our array: 4. To move it to the left of the separator, and so on.
4    2    13   6    15    12    7    9
#    4    2    13   6    15    12    7    9
4    #    2    13   6    15    12    7    9
4    2    #    13   6    15    12    7    9
4    2    #    6    13    15    12    7    9
4    2    6    #    13    15    12    7    9
4    2    6    #    7    15    12    13    9
4    2    6    7    #    15    12    13    9
4    2    6    7   #    9    12    13    15
Since all the numbers to the left of 9 are now smaller than 9, and all the numbers to the right of 9 are greater than 9, we’re done with our first cycle of QuickSort. Next, we’ll treat each set of four numbers on either side of the separator as a new array to apply QuickSort to.
The end result will be the following ordered list that took us less time to generate than it would have with the simpler MergeSort:
2    4    6    7    9    12    13    15

Sorting algorithms cheat sheet
- Heap sort
- Introsort
- Insertion sort
- Bubble sort, selection sort
- Counting sort
- Radix sort
- Bucket sort

- Trees
- Graphs
- Depth First Search (DFS)
Rather than going floor by floor, if you go elevator-by-elevator, checking the nearest rooms on each stop as you traverse the pyramid in vertical slices, you will be roughly performing a depth-first search for your friend Fiz. Again, the visualization below should help make this a bit more clear.
- Dynamic programming (DP)
If you’re facing an enormous, heavyweight programming problem that you can’t imagine solving on your own, Dynamic programming (DP) may come to your rescue. DP will help you turn the big problem into small sub-problems. Each time DP solves one of the sub-problems, it saves the results, and eventually puts all the results it’s saved together in order to tackle the big one.
- Hashing = when it comes to searching through lists with millions of items, hashing is often far faster.
- String pattern matching = say you are searching a book for all sentences that end in a question mark: that’s a job for string pattern matching.
- Binary Search Tree Data Structure = Nodes on left side lower than root, Nodes on right side higher than root.