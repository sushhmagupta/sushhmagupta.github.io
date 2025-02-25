export function  CalculateMoolank(mobile){
    if (!mobile) return 0; 
    let num = parseInt(mobile);
    let sum = 0;
    while(num>0){
        let lastBit = Math.floor(num%10);
        num = num/10;
        sum +=lastBit;
        if(sum>9){
            sum = sum-9;
        }

    }
    return sum;
  }