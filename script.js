function insertionSort(arr) {
    // Iterate through the array, starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        // Initialize a variable to track the position to insert
        let j = i - 1;

        // Shift elements of the sorted segment that are greater than current
        // to the right, to make space for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
let arr = [5, 2, 4, 6, 1, 3];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr.slice())); // Use slice() to create a copy of the array
