/*
Given an array of integers nums and an integer target, return indices of the two numbers
such that they add up to target.You may assume that each input would have exactly one solution,
and you may not use the same element twice.You can return the answer in any order.
*/
const twoSum=(array,target)=>{
    const map={}
    for(let i=0;i<array.length;i++){
        let find=target-array[i]
        if(find in map){
            return [i,map[find]]
        }
        map[array[i]]=i
    }
    return []
}