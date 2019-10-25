//选择排序
function minIndexOf(numbers) {
    let index = 0
    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[index]) {
            index = i
        }
    }
    return index
}

function sort(numbers) {
    if (numbers.length > 2) {
        let index = minIndexOf(numbers)
        let min = numbers[index]
        numbers.splice(index, 1)
        return [min].concat(sort(numbers))
    } else {
        return numbers[0] < numbers[1] ? numbers : numbers.reverse()
    }
}
let y = sort([5, 6, 2, 8, 6, 1, 2, 78, 5, 1, 556, 2])
console.log(y)

//冒泡排序
function swap(numbers, a, b) {
    const temp = numbers[a]
    numbers[a] = numbers[b]
    numbers[b] = temp
}
function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                swap(numbers, j, j + 1)
            }
        }
    }
    return numbers
}
console.log(bubbleSort([79, 1, 5, 3, 6, 56, 4]))

//插入排序
function insertSort(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        let j = i
        while (j >= 0 && numbers[j - 1] > numbers[j]) {
            swap(numbers, j, j - 1)
            j = j - 1
        }
    }
    return numbers
}
console.log(insertSort([1, 5, 3, 15, 4, 2]))
//归并排序
function merge(a, b) {
    if (a.length === 0) { return b }
    if (b.length === 0) { return a }
    else {
        return (
            a[0] < b[0] ? [a[0]].concat(merge(a.slice(1), b))
                : [b[0]].concat(merge(b.slice(1), a)))
    }
}
function mergeSort(numbers) {
    if (numbers.length === 1) { return numbers }
    let left = numbers.slice(0, Math.floor(numbers.length / 2))
    let right = numbers.slice(Math.floor(numbers.length / 2))
    return merge(mergeSort(left), mergeSort(right))
}
console.log(mergeSort([1, 5, 3, 6, 4]))

//快速排序
function quickSort(numbers) {
    if (numbers.length <= 1) {
        return numbers
    } else {
        let left = []
        let right = []
        let pivotIndex = Math.floor(numbers.length / 2)
        let pivot = numbers.splice(pivotIndex, 1)[0]
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] <= pivot) {
                left.push(numbers[i])
            } else {
                right.push(numbers[i])
            }
        }
        return quickSort(left).concat(pivot, quickSort(right))
    }
}
//计数排序
function countSort(numbers) {
    let hashTable = {}
    let max = 0
    for (let i = 0; i < numbers.length; i++) {
        if (!(numbers[i] in hashTable)) {
            hashTable[numbers[i]] = 1
        } else if (numbers[i] in hashTable) {
            hashTable[numbers[i]] += 1
        }
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    let result = []
    for (let i = 0; i < max; i++) {
        if (i in hashTable) {
            for (let j = 1; j <= hashTable[i]; j++) {
                result.push(i)
            }
        }
    }
    return result
}

console.log(countSort([6, 2, 3, 5, 2, 6, 42, 35, 1]))

//堆排序
function heapSort(numbers) {
    for (let i = Math.floor(numbers.length / 2 - 1); i >= 0; i--) {
        shiftDown(numbers, i, numbers.length)
    }
    for (let i = numbers.length - 1; i > 0; i--) {
        swap(numbers, 0, i)
        shiftDown(numbers, 0, i)
    }
    return numbers

}

function shiftDown(A, i, length) {
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
        temp = A[i]
        if (j + 1 < length && A[j] < A[j + 1]) {
            j++
        }
        if (temp < A[j]) {
            swap(A, i, j)
            i = j
        } else {
            break
        }
    }
}
console.log(heapSort([5, 4, 8, 2, 4, 85, 1]))
