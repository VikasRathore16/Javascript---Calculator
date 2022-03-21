stack = Array();
flag = 1;
number = ''

function cal(value) {

    if (!isNaN(value)) {
        number += value
    }
   
    document.getElementById('var').innerHTML = number
    

    // console.log('number',number)
    if (isNaN(value)) {
        operation = value
        if (number != '') {
            stack.push(number)
        }
        if (isNaN(stack[2])) {
            stack.splice(1, 1)
            // stack.push(operation)
        }
        stack.push(operation)

        if (stack.length == 2 && operation == '=') {
            stack.splice(1, 1)
        }
        if (stack.length == 1 && isNaN(stack[0])) {
            stack.pop()
            console.log('lhasfdho', (stack[0]))
        }


        number = ''
        if (operation == 'AC') {
            stack = []
        }

    }


    console.log('number', number)
    console.log(stack)
    if (stack.length > 3 || (stack.length > 3 && stack[3] == '=')) {
        switch (stack[1]) {
            case "+":
                sum = (Number(stack[0]) + Number(stack[2]))
                console.log('sum', sum)
                operator = stack[stack.length - 1]
                console.log('operator', operator)
                stack = []
                stack.push(sum)
                if (operator != '=') {
                    stack.push(operator)
                }
                break

            case '-':
                sub = (Number(stack[0]) - Number(stack[2]))
                console.log('sub', sub)
                operator = stack[stack.length - 1]
                console.log('operator', operator)
                stack = []
                stack.push(sub)
                if (operator != '=') {
                    stack.push(operator)
                }
                break

            case 'X':
                mul = (Number(stack[0]) * Number(stack[2]))
                operator = stack[stack.length - 1]
                console.log('operator', operator)
                stack = []
                stack.push(mul)
                if (operator != '=') {
                    stack.push(operator)
                }
                break
            case '/':
                div = (Number(stack[0]) / Number(stack[2]))
                operator = stack[stack.length - 1]
                console.log('operator', operator)
                stack = []
                stack.push(div)
                if (operator != '=') {
                    stack.push(operator)
                }
                break

            case '%':
                per = (Number(stack[0]) % Number(stack[2]))
                operator = stack[stack.length - 1]
                console.log('operator', operator)
                stack = []
                stack.push(per)
                if (operator != '=') {
                    stack.push(operator)
                }
                break

        }
        console.log(stack)
        document.getElementById('result').innerHTML = stack[0]

    }
}