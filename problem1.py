# Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
#   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
#   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

# Approach created a function which will take parameters as first number ,second number and operation in lower case 
# as user can type Divide or divide so both should word and did operations and printed the output


def calculator(first,second,op):
    if(op == 'add'):
        print(first+second)

    elif(op == 'substract'):
        print(first-second)

    elif(op == 'multiply'):
        print(first*second)

    elif(op == 'divide'):
        if(second != 0):
            print(first/second)
        else:
            print("Second number cannot be 0")
str=input("first number second number and operation space seperated")
arr=str.split(' ')
first=int(arr[0])
second=int(arr[1])
op=arr[2].lower()
calculator(first,second,op)
