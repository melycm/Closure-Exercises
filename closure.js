//1 
count1 = counter()
count2 = counter()
var count = 0;

function counter(){
    
    function newCount(){
        count++;
        return count;
    }
    return newCount();
}

var count1 = counter();
var count2 = counter();

console.log(count1);
console.log(count2);

// 2
count1 = counter(4);
count2 = counter(2);

function counter (x) {
    var count = x;
    var newCount = function () {
        count++;
        return count;
    }
    return newCount;
};
var count1 = counter(4);
var count2 = counter(2);

console.log(count1);
console.log(count2);

// 3
var count = new Counter(4);

function Counter(start) {
    this.start = start;
}

Counter.prototype.increment = function() {
    this.start += 1;
    return this.start;
}

Counter.prototype.decrement = function() {
    this.start -= 1;
    return this.start;
}

var count = new Counter(4)
count.increment()