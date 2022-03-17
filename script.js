stack = Array();
flag = 1;
num = ''

function cal(value) {
 
    console.log('val',value)
    
   
    console.log('numfirst',num)
    
    
    // return 

    if (isNaN(value)) {
        flag = 2;
        num=''
        operation = value;
        console.log(operation);
        if(operation=="AC"){
            stack =[]
            num=''
            flag =1
        }
    }
    // console.log(flag);
    if(!isNaN(value)){
        num+=value
    }
    if (!isNaN(value)) {
        // num+=value
        console.log('num',num)
        stack.push(value);
        document.getElementById('var').innerHTML = value
        document.getElementById('result').innerHTML = value
        console.log('ht',stack.length)
        console.log('flag',flag);
        if (stack.length > 1 && flag == 1) {
            console.log('ui')
            stack.shift(num);
        }
    }
    if (stack.length == 3) {
        console.log('empty')
        stack = [];
        num=''
        flag =1
    }

    if (flag == 2 && stack.length == 2) {
        switch (operation) {
            case "+":
                
                sum = stack[0] + stack[1]
                document.getElementById('result').innerHTML = sum
                console.log("add", stack[0] + stack[1]);
                stack = []
                stack.push(sum);
                break;
            case "-":
                sub = stack[0] - stack[1]
                console.log("sub", stack[0] - stack[1]);
                stack = []
                stack.push(sub);
                break;
            case "X":
                mul = stack[0] * stack[1]
                console.log("mul", stack[0] * stack[1]);
                stack = []
                stack.push(mul);
                break;
            case "/":
                div = stack[0] / stack[1]
                console.log("divide", stack[0] / stack[1]);
                stack = []
                stack.push(div);
                break;
            case "%":
                per = stack[0] % stack[1]
                console.log("perc", stack[0] % stack[1]);
                stack = []
                stack.push(per);
                break;
           
        }
    }
    console.log(stack);
}
