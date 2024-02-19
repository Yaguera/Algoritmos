function insertionSort(A) {
    console.log("Array original:", A);

    for (let j = 1; j < A.length; j++) {
        let key = A[j];
        let i = j - 1;
        
        console.log("--- Iteração " + j + " ---");
        console.log("i: "+ i)
        console.log( "A[i]: " + A[i])
        console.log("Chave: " + key);
        console.log("Sub-sequência ordenada:", A.slice(0, j));
        console.log(A[i] + " > " + key + " e " + i + " >= 0" +": " + (i >= 0 && A[i] > key))

        while (i >= 0 && A[i] > key) {
            console.log(i)
            A[i + 1] = A[i];
            console.log("Movendo " + A[i] + " para a direita");
            i--;
            console.log(i)
        }
        
        A[i + 1] = key;
        console.log("Inserindo " + key + " na posição " + (i + 1));
        console.log("Array atual:", A);
    }
    
    return A;
}

let A = [5, 2, 4, 6, 1, 3];
console.log("Array não ordenado:", A);

A = insertionSort(A);

console.log("Array ordenado:", A);
