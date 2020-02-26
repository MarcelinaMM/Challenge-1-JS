let pairs = [];
let pairTemp = [];

const answer = ((augendArray, sum) =>{
    for(i = 0; i < augendArray.length; i++){
        for(j = i+1; j < augendArray.length; j++){
            if(augendArray[i] + augendArray[j] === sum){
                pairTemp = [augendArray[i], augendArray[j]];
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