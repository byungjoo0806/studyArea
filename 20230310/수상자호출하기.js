let students = ["조성현", "고휘근", "박병주", "이무헌", "황지섭", "이지우", "이충민"];
let award = ["이지우","이무헌","구진완"];

for(let b = 0; b <= award.length - 1; b++){
    for(let a = 0; a <= students.length - 1; a++){
        if(award[b] === students[a]){
            console.log(students[a])
        }
    }
}


let players = ["호날두","메시","모드리치","벤제마"];
let ballondor = ["메시"];

