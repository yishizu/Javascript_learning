const { process_params } = require("express/lib/router");

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

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    distance(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

let p = new Point(1,1);
p.distance();
console.log(p.distance());

class DefaultMap extends Map{
    constructor(defaultValue){
        super();
        this.defaultValue = defaultValue;
    }
    get(key){
        if(this.has(key)){
            return super.get(key);
        }else{
            return this.defaultValue;
        }
    }
}

class Histogram{
    constructor(){
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }
    //
    add(text){
        text = text.replace(/\s/g,"").toUpperCase();
        //
        for(let character of text){
            let count = this.letterCounts.get(character);
            this.letterCounts.set(character, count+1);
            this.totalLetters++;
        }
    }
    //
    toString(){
        //
        let entries = [...this.letterCounts];
        //
        entries.sort((a,b)=>{
            if(a[1]===b[1]){
                return a[0] <b[0] ? -1:1;
            }else{
                return b[1] - a[1];
            }
        });
        //
        for(let entry of entries){
            entry[1] = entry[1]/this.totalLetters*100;
        }
        //
        entries = entries.filter(entry => entry[1] >=1);

        let lines = entries.map(
            ([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);

        return lines.join("\n");
        
    }
}

async function histogramFromStdin(){
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    for await(let chunk of process.stdin){
        histogram.add(chunk);
    }
    return histogram;
}
histogramFromStdin().then(histogram =>{console.log(histogram.toString());});