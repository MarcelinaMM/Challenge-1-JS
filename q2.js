let pairs = [];
let pairTemp = [];

const answer = ((augendsArray, sum) =>{
    for(i = 0; i < augendsArray.length; i++){
        for(j = i+1; j < augendsArray.length; j++){
            if(augendsArray[i] + augendsArray[j] === sum){
                pairTemp = [augendsArray[i], augendsArray[j]];
                pairs.push(pairTemp);
                pairTemp = [];
            };
        };
    };
    console.log(pairs);
    pairs = [];
});

answer([0, 1, 2, 3, 4], 4);
answer([2, 6, 8, 15, 3, 12, 1, 2, 5], 11);