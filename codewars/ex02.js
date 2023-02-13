const string = "ABcDEFgHIJbaslidbailsbdilasbdkanmsdklhkbHSJKHVDASH"

function getFatorial (n){
    let result = n;
    for (let i = 1; i < n; i++){
        result *= i
    }
    return result
}

function findUniq(string){
    if (string == ""){
        return BigInt(1)
    }

    string = string.toUpperCase()
    map = {}
    arr_caracters = string.split("")
    arr_length = arr_caracters.length

    for (e of arr_caracters){
        if (map[e]){
            map[e] += 1
        }
        else {
            map[e] = 1
        }
    }
    const saidas = Object.values(map)
    
    const fatoriais = saidas.map((e) => {
        return e = getFatorial(e)
    })?.reduce((acc, curr) => {
        return acc *= curr
    })
    resultado = getFatorial(arr_length) / fatoriais
    return BigInt(resultado)
}

console.log(findUniq(string))
//34111429518116758488933545882757275627520000000n
