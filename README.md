# Sorting Algorithms

## Bubble Sort

* Takes the first value in an array and compares that to the next value
* If the second value is greater than the first, the two are swapped
* The next two numbers are compared
* This is repeated until the end of the array is reached
* The entire process is repeated until no values need to be swapped and all are in order

  #### Psuedocode

  ```
  bubbleSort(array)
    l = array.length
    for i = 0 ; i < l ; i++ (
      if array[i] > array[ i + 1 ]
        swap( array[i] with array[ i + 1 ] )
        swapped = true
    )
    if swapped = false (
      end
    )
    bubbleSort(array)

  swap(arr[i], arr[ i + 1 ])
    hold = arr[i]
    arr[i] = arr[ i + 1 ]
    arr[ i + 1 ] = hold
  end
  ```
  ##### Best Case
    * Already sorted
      `O(n)`


  ##### Worst Case
    * Reverse order
      `O(n^2)`

## Quick Sort

* Starting from a given value (pivot), all numbers in an array are sorted into two lists : either less than (left) or greater than/equal to (right)
* The new right and left lists keep splitting until there is only one number per list
* Then the lists are combined together in order : |Left|-|Pivot|-|Right|, until all lists are combined into one list

  #### Psuedocode

  ```
  quicksort(array)
    pivot = array[i] //qs can be optimized depending on position
    left = []
    right = []

    if pivot > array[ i + 1 ]
      push array[ i + 1 ] into left

    if pivot < array[ i + 1 ]
      push array[ i + 1 ] into right

    loop until array.length <= 1
      array = left + pivot + right

    return array
  ```
  ##### Best Case
    * Almost sorted
      `O(n)`


  ##### Worst Case
    * Already sorted
      `O(n^2)`

## Insertion Sort

* Starting from the second number in the array, compare this number with the number before it
* Move the number until it find a number before it that is less than or equal to the given number
* Do the same with all the numbers until the end of the array

  #### Psuedocode

  ```
  insertionSort(array)
    loop through all the values in the array
      if array[i] > array[ i - 1 ]
        swap values of array[i] with array [ i - 1 ]
  ```
  ##### Best Case
    * Already sorted
      `O(n)`


  ##### Worst Case
    * Reverse sorted
      `O(n^2)`

## Selection Sort

* Find the biggest number in an array and move it to the last spot
* Repeat with the remaining numbers, except the highest remaining number is moved to the second, third, fourth spot & so on

  #### Psuedocode

  ```
  selectionSort(array)
    loop
      max = findMaxValue(array)
      array(array.length - 1) = max
    return when all numbers have been sorted

  ```

  ##### Best Case
    * Already sorted
      `O(n)`


  ##### Worst Case
    * Reverse sorted
      `O(n^2)`

## Merge Sort
