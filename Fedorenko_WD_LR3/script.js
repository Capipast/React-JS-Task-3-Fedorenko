//2
const Fibonacci=(number)=>{
    const F=(n)=>{
        if(n<=1){
            return n;
        }
        return F(n-1)+F(n-2);
    }

    if(number>=0){
        return F(number);
    }
    else{
        number=Math.abs(number);
        return Math.pow(-1,number+1)*F(number);
    }
}

console.log(`Завдання 2:`);
for(let i=-19;i<20;++i){
    console.log(`F(${i}) =`,Fibonacci(i));
}

//3
const filter=(array, handler)=>{
    let filteredArray=[];
    array.forEach(a => {
        if(handler(a)){
            filteredArray.push(a);
        }
    });

    return filteredArray;
}


const dataList=filter([1,2,3,4,5,6],(a)=>a%2);
console.log(`\nЗавдання 3:\n`, dataList);

//4
const pow=(number,power)=>{
    if(number===0){
        return power===0?NaN:power>0?0:Infinity;
    }
    else{
        if(power===0){
            return 1;
        }
        else{
            let result=number;
            const p=power>0?power:-power;
            
            for(let i=1;i<p;++i){
                result*=number;
            }

            return power>0?result:(1/result);
        }
    }
}

console.log(`\nЗавдання 4:\n`);

console.log(`2^1 =`,pow(2,1));
console.log(`-1^2 =`,pow(-1,2));
console.log(`2^4 =`,pow(2,4));
console.log(`3^3 =`,pow(3,3));
console.log(`-1^1 =`,pow(-1,1));
console.log(`0^12 =`,pow(0,12));
console.log(`123^0 =`,pow(123,0));
console.log(`0^0 =`,pow(0,0));
console.log(`0^-2 =`,pow(0,-2));
console.log(`2^-2 =`,pow(2,-2));
console.log(`10^-3 =`,pow(10,-3));
console.log(`10^8 =`,pow(10,8));
console.log(`5^3 =`,pow(5,3));
console.log(`4^12 =`,pow(4,12));

//5
const powList=(list,p)=>list.map(l=>pow(l,p));

const list=[-5,-2,-1,0,1,2,3,4,5,6,7,10,25,100, 1.25, -4.55, 2.57];

console.log(`\nЗавдання 5:\n`);

console.log(`Масив: `+list);

console.log(`pow = 2`, powList(list,2));
console.log(`pow = -1`, powList(list,-1));
console.log(`pow = 3`, powList(list,3));
console.log(`pow = 0`, powList(list,0));
console.log(`pow = 1`, powList(list,1));

//6
const powAndFilter=(list,p,min)=>filter(powList(list,p),(l)=>l>=min);

console.log(`\nЗавдання 6:\n`);

console.log(`Масив: `+list);

console.log(`pow = 2, min = 16`, powAndFilter(list,2,16));
console.log(`pow = -1, min = 10`, powAndFilter(list,-1, 10));
console.log(`pow = 2, min = 71`, powAndFilter(list,3, 71));
console.log(`pow = 0, min = 2`, powAndFilter(list,0, 2));
console.log(`pow = 1, min = 8`, powAndFilter(list,1, 8));

//7

const handler=()=>[1,2,3];
const sum=(handler)=>{
    const list=handler();
    const calc=()=>list.reduce((acc,l)=>(acc+l),0);
    return calc;
}

console.log(`\nЗавдання 7:\n`);

console.log(`handler:`,handler());

let calc=sum(handler);

console.log(`calc:`,calc());
