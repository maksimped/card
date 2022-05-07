function t1() {
    let a = 0;

    return function () {

        a = a + 1
        console.log(a)
    }
}
document.querySelector('button').onclick = t1()