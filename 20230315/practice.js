// 배열 메소드
let sports = ["soccer","basketball","baseball","football","tennis","golf","track","swimming","soccer"];
sports.push("bodybuilding");
console.log(sports);

console.log(sports.indexOf("soccer")); // returns the index number of the item
console.log(sports.indexOf("bodybuilding"));
console.log(sports.indexOf("basketball"));

let sportsFind = sports.find(function(i){ // 배열에 해당 아이템이 있는지 확인; 있으면 해당 아이템 표출; 없으면 undefined
    return i === "basketball";
});
console.log(sportsFind);

let sportsFindIndex = sports.findIndex(function(i){ // produce the index number of 해당 아이템
    return i === "track";
});
console.log(sportsFindIndex);

let sportsFilter = sports.filter(function(i){ // find items with certain letters or numbers
    return i[0] === "b";
});
console.log(sportsFilter);

let sportsFilter2 = sports.filter(word => word.includes("ball"));
console.log(sportsFilter2);

let sportsMap = sports.map(function(i){ // filter items with given condition and return true or false
    return i[0] === "b";                // based on that condition
});
console.log(sportsMap);

sportsForEach = sports.forEach(function(i){ // give out each item one by one
    console.log(i);
});

let sportsJoin = sports.join(" "); // join the items in an array and return the result as text joined by
console.log(sportsJoin);           // what's in the parenthesis

let sportsSplice = sports.splice(1,2); // return items from index of first number to index of second number
console.log(sportsSplice);             // similar to .slice with text array

// 문자열 메소드
let longWord = "supercalifragilisticexpialidocious";
console.log(longWord.indexOf("s"));
console.log(longWord.indexOf("g"));

function multipleIndexes(word,item){ // arr : 해당 배열, item : index를 찾고싶은 아이템
    let indexes = []
    for(i = 0;i < word.length; i++){
        if(word[i] === item){
            indexes.push(i);
        }
    }
    console.log(indexes);
}
multipleIndexes(longWord,"s");

console.log(longWord.slice(2,3)); // from index of first number to index of second number - 1
console.log(longWord.slice(2,8));

console.log(longWord.split(""));  // split() 괄호안에 들어가는 문자의 위치에서 단어를 자르고 배열로 표출
console.log(longWord.split("l")); // 괄호안에 들어가는 문자는 더 이상 배열에 포함되지 않는다.

let longWordUp = longWord.toUpperCase();
console.log(longWordUp);
let longWordLow = longWordUp.toLowerCase();
console.log(longWordLow);
