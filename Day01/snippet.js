console.log("Hello World!");

let x;
//JavaScriptの中で一番重要なデータ型はオブジェクト。
//オブジェクトは名前と値のペア、つまり、値に文字列を対応つけたものの集合。
let book ={
    topic: "JavaScript",
    edition:7
}
//オブジェクトのプロパティにアクセスするには「.」または「[]」を使う。
book.topic;
book['edition'];

//代入すると、新たなプロパティがつくられる
book.author = "Yuko Ishizu";
book.contents = {}; //{}は空のオブジェクトを意味する。

//条件付きでプロパティをアクセスする場合には？を使う
book.contents?.cho01?.sect1; 
console.log(book.contents?.cho01?.sect1);

//JavaScriptでは配列もサポート
let primes = [2,3,4,5];
primes[0];
primes.length;

//配列やオブジェクトには、別の配列やオブジェクトを格納できる
let points=[{x:0,y:0},{x:1,y:1}];

let data={trial1:[[1,2],[3,4]],trial2:[[5,6],[7,8]]};
console.log(data);

3+2 //=>4: 加算