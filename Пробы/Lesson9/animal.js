const animal ={
    canEat: true,
    canSleep: true,
    canRun: true,
    canSwim: false,
    fill: 100,
    speed: 10,
    eat (addEat) {
        this.fill = this.fill + addEat;
        if (this.fill > 100) {
            console.error('overeaten');
            this.speed = 0.5*this.speed; // или this.speed *= 0.5;
        }
    },
    run(){
        if(this.fill < 20){
            console.error('tired');
        }else {
            this.fill -= 20;
            console.info('run', this.speed);
        }
    }
}


const rabbit = {
    name : 'rabbit'
};

rabbit.__proto__ = animal;

console.log(rabbit.fill);