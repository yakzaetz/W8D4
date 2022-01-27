class Clock {
    constructor(){
        this.date = new Date();
        this.hh = this.date.getHours();
        this.mm = this.date.getMinutes();
        this.ss = this.date.getSeconds();

        // printTime()

        setTimeout(() => {
            console.log(printTime())
        }, 1000);
    }

    
}

const clock = new Clock();