// 闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。
// 直观的说就是形成一个不销毁的栈环境。

// 闭包的特点：
// 1.作为一个函数变量的一个引用，当函数返回时，其处于激活状态。
// 2.一个闭包就是当一个函数返回时，一个没有释放资源的栈区。

function sayHello(name) {
     return function() {
         console.log("howdy, " + name);
     }
}

let bob = sayHello("Bob");
let conrad = sayHello("Conrad");
let grant = sayHello("Grant");

bob(); // howdy, Bob
conrad(); // howdy, Conrad
grant(); // howdy, Grant


var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());
console.log(add());
add();
console.log(add());