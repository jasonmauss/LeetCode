// Solution for: https://leetcode.com/problems/earliest-possible-day-of-full-bloom/
class Plant{
    plantTime:number
    growTime:number
}
const earliestFullBloom = (plantTime: number[], growTime: number[]): number => {

    let plantArray = plantTime.map((value, index)=> {
        let plant = new Plant();
        plant.plantTime = value;
        plant.growTime = growTime[index];
        return plant;
    });
    
    plantArray.sort((a,b) => b.growTime - a.growTime);
    
    let totalPlantTime:number = 0;
    let max:number = 0;

    plantArray.forEach((value)=>{

       totalPlantTime += value.plantTime;
       
       max = Math.max(max, totalPlantTime + value.growTime);
    });
    
    return max;

};



// some test cases
console.log(earliestFullBloom([1,4,3],[2,3,1])); // 9
console.log(earliestFullBloom([1,2,3, 2],[2,1,2,1])); // 9
console.log(earliestFullBloom([1],[1])); // 2