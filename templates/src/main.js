window.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const startButton = document.getElementById('start-button');
  const challengeText = document.getElementById('challenge-text');
  const pythonButton = document.getElementById('python-button');
  const terminalButton = document.getElementById('terminal-button');
  const statistics = document.getElementById('statistics');

let challengeOptions = [
"Linear Search Algorithm: Linear search is a simple algorithm that checks each element in a list sequentially until it finds the target element or reaches the end. It compares the target element with each element in the list, making it suitable for unsorted data.",
"Binary Search Algorithm: Binary search is a more efficient algorithm for searching in sorted lists. It divides the list in half at each step and compares the target element with the middle element. Based on the comparison, it narrows down the search range by half, repeatedly, until the target is found or deemed absent.",
"Bubble Sort Algorithm: Bubble sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order. It continues to pass through the list until the entire list is sorted.",
"Insertion Sort Algorithm: Insertion sort is another simple sorting algorithm that builds the final sorted list one element at a time. It takes each element from the unsorted part of the list and inserts it into the correct position in the sorted part of the list.",
"Selection Sort Algorithm: Selection sort is a sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the list and swapping it with the first unsorted element. It gradually moves the boundary of the sorted part of the list to the right.",
"Merge Sort Algorithm: Merge sort is a divide-and-conquer algorithm that divides the list into smaller sublists, sorts them individually, and then merges them back together to produce a sorted list. It uses a recursive approach to divide the problem into smaller subproblems.",
"Quick Sort Algorithm: Quick sort is another divide-and-conquer algorithm that picks a pivot element and partitions the list around the pivot. It recursively sorts the sublists before and after the pivot until the entire list is sorted.",
"Depth-First Search Algorithm: Depth-first search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It traverses the graph in a depthward motion, visiting all reachable vertices and marking them as visited.",
"Breadth-First Search Algorithm: Breadth-first search is a graph traversal algorithm that explores all the vertices of a graph in breadthward motion, starting from a given vertex. It visits all vertices at the current depth level before moving to the next level.",
"Dijkstra's Algorithm: Dijkstra's algorithm is a widely used algorithm for finding the shortest path between nodes in a graph. It starts from a source node and iteratively selects the node with the minimum distance, updating the distances to its adjacent nodes until the shortest path to all nodes is found.",
"Greedy Algorithm: Greedy algorithms make locally optimal choices at each step to find a global optimum. They make the best choice at each step without considering the overall future consequences. While efficient, they may not always produce the best solution.",
"Dynamic Programming: Dynamic programming is a technique used to solve complex problems by breaking them down into overlapping subproblems and solving them recursively. It stores the solutions to subproblems and reuses them to solve larger problems, avoiding redundant computations.",
"Prim's Algorithm: Prim's algorithm is a greedy algorithm used to find a minimum spanning tree in a weighted graph. It starts from an arbitrary vertex and repeatedly adds the nearest vertex not yet included in the tree, gradually expanding the tree until it spans all vertices.",
"Kruskal's Algorithm: Kruskal's algorithm is another greedy algorithm for finding a minimum spanning tree. It starts with an empty tree and repeatedly adds the shortest edge that does not create a cycle until all vertices are included, resulting in a minimum spanning tree.",
"Knapsack Problem: The knapsack problem is a combinatorial optimization problem that involves selecting a subset of items with maximum value, subject to a constraint on the total weight. It is often solved using dynamic programming or greedy algorithms.",
"A* Search Algorithm: A* search is an informed search algorithm commonly used in pathfinding and graph traversal. It evaluates nodes based on a heuristic function that estimates the cost to reach the goal, combining it with the actual cost to determine the best path.",
"Radix Sort Algorithm: Radix sort is a linear time sorting algorithm that sorts integers by processing their digits from the least significant to the most significant. It repeatedly distributes the numbers into digit-specific bins and collects them back in order.",
"Hashing: Hashing is a technique used to map data to a fixed-size array called a hash table. It uses a hash function to compute an index where the data is stored, allowing for efficient retrieval and insertion of elements.",
"Monte Carlo Algorithm: Monte Carlo algorithms use random sampling to approximate solutions to problems. They rely on statistical simulations and probability to estimate outcomes and make decisions.",
"Genetic Algorithms: Genetic algorithms are inspired by the process of natural selection and evolution. They use techniques such as mutation, crossover, and selection to iteratively search for optimal solutions in a population of potential solutions.",
];

  let codingStyle = false;
  let terminalStyle = false;
  let currentIndex = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let startTime = 0;
  let endTime = 0;

  pythonButton.addEventListener('click', () => {
    codingStyle = true;
    terminalStyle = false;
    challengeText.classList.remove('terminal-window');
    challengeText.classList.add('python-code');
    challengeText.textContent = getRandomChallenge(true);
    currentIndex = 0;
    updateCursor();
  });

  terminalButton.addEventListener('click', () => {
    codingStyle = false;
    terminalStyle = true;
    challengeText.classList.remove('python-code');
    challengeText.classList.add('terminal-window');
    challengeText.textContent = getRandomChallenge();
    currentIndex = 0;
    updateCursor();
  });

  startButton.addEventListener('click', () => {
    userInput.disabled = false;
    userInput.focus();
    startButton.disabled = true;
    userInput.value = '';
    currentIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    startTime = Date.now();
    updateCursor();
  });

  userInput.addEventListener('input', () => {
    const inputText = userInput.value.trim();
    const challengeTextContent = challengeText.textContent.trim();

    if (inputText === challengeTextContent.slice(0, inputText.length)) {
      userInput.classList.remove('incorrect');
      currentIndex = inputText.length;
      correctCount = inputText.length;
      incorrectCount = challengeTextContent.length - correctCount;
    } else {
      userInput.classList.add('incorrect');
      incorrectCount = inputText.length;
      correctCount = challengeTextContent.length - incorrectCount;
    }

    if (inputText === challengeTextContent) {
      userInput.disabled = true;
      startButton.disabled = false;
      userInput.value = '';
      endTime = Date.now();
      const totalTime = (endTime - startTime) / 1000; // in seconds
      const averageSpeed = Math.round((correctCount / totalTime) * 60); // in characters per minute
      statistics.innerHTML = `Correct: ${correctCount} | Average Speed: ${averageSpeed} CPM`;
      currentIndex = 0;
    }

    updateCursor();
  });

  function updateCursor() {
    const challengeTextContent = challengeText.textContent.trim();
    const highlightedText = challengeTextContent.slice(0, currentIndex);
    const remainingText = challengeTextContent.slice(currentIndex);
    challengeText.innerHTML = `<span class="highlight">${highlightedText}</span>${remainingText}`;
  }

  function getRandomChallenge(pythonFormat = false) {
    const randomIndex = Math.floor(Math.random() * challengeOptions.length);
    let randomChallenge = challengeOptions[randomIndex];
    if (pythonFormat) {
      randomChallenge = randomChallenge.replace(/,/g, ';\n');
    }
    return randomChallenge;
  }
});