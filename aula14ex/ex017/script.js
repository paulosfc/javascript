function gerar() {
    var n1 = document.getElementById('num')
    var res = document.querySelector("div#res")

    var c = 1
    while (n1 <= 10) {
        var s = n1 * c
        res.innerHTML = `${n1} x ${c} = ${s}`
        c++
    }
}
