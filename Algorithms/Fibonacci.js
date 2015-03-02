// 費式數列Fibonacci
// F0 = 0
// F1 = 1
// Fn = Fn-1 + Fn-2 (n>=2)
// Reulst : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233……

//演算法區
//沒用Cache
var fib = function(n){
	if(n <= 1){
		return n;
	}

	return fib(n-1) + fib(n-2);
}

//有用Cache
var memo = [];
var count = 0;
var fib_cache = function(n){
	if(n <=1){
		return n;
	}

	if( typeof memo[n] !== 'undefined'){
		return memo[n];
	}else{
		memo[n] = fib_cache(n-1) + fib_cache(n-2);
		return memo[n];
	}
}

//執行區
//[Finished in 2.8s]
console.log(fib(40));

//[Finished in 0.1s]
console.log(fib_cache(40));
