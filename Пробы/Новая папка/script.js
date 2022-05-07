function one(a, c, d) {

    let b = `<p class ="${c}">${a}</p>`
    document.querySelector(d).innerHTML = b;
}

one('Erorr', "red", '.first');
one('Erorr1', "orange", '.first2')


class Alert {
    constructor(a, c, d) {
        this.messege = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class ="${this.cssClass}">${this.messege}</p>`;
    }
}

class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon;
    }
    showIconAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><span class="material-icons">${this.icon}</span>${this.messege}</p>`
    }
}

let m = new Alert('Alert', 'orange', '.first');
let m2 = new Alert2('Hi', 'red', '.first', 'fingerprint')
console.log(m)
m.showAlert();
m2.showIconAlert()



let day = 1;
let coast = 16;

let res = ''
while(day<= 31){
day++
coast++
res = coast + 15/100
res ++
    console.log(res);

}
