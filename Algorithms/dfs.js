//DFS (Depth-First Search)
//提供整數a1、a2、a3…、an。請判斷從其中選幾個數值的和能否剛好等於k
//
//Ex.
//輸入 n= 4 、 a= {1,2,4,7} 、k = 13
//輸出 Yes (13=2+4+7)
//

var a = [];
var n,k;

function dfs (i,sum) {
	
    if(i==n){
	return sum == k;
    }

    if(dfs(i+1,sum)){
    	return true;
    }

    if(dfs(i+1,sum+a[i])){
	return true;
    }
    return false;
}

//測試區
a = [1,2,4,7];
n = 4;
k = 13;

console.log(dfs(0,0));

