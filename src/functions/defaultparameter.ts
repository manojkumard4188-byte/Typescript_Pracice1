// function setStatus(status:string = "Active"): string {
//     return `status: ${status}`;
//     }
//     console.log (setStatus());



    // function calcDiscount(price:number,discount : number=20): number{
    //     return price - (price*discount)/200; 
    // }
    // console.log ("Discount:", calcDiscount(200));

    // function buildMessage (name:string="user",score:number=0): string {
    //     if(score>=50) return`${name} passsedwith ${score}`;
    //     return `${name}needs improvement (${score})`;

    // }
    
    // console.log ("message:",buildMessage());

    // function repeatWord (word:string= "Hi",times:number=8): string {
    //     let result="";
    //     for(let i=0;i<times;i++) result +=word+ "";
    //     return result.trim();

    // }
    // console.log("repeat:",repeatWord());

    // function createRange(start:number=1,end:number=5): number[] {
    //     const nums:number[]=[];
    //     for (let i=start;i<=end; i++) nums.push(i);
    //     return nums;
    // }
    // console.log("range:",createRange());

    function logLevel (message:string,level:string="INFO"): void {
      console.log(`[${level}]: ${message}`);
    } 
    logLevel ("server started");
