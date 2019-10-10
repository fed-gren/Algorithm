class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(data) {
    this.stack1.push(data);
  }

  dequeue() {
    if (this.stack2.stack.length <= 0) {
      while (this.stack1.stack.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    this.stack2.pop();
  }

  getFront() {
    return this.stack2.stack.length > 0 ?
      this.stack2.stack[this.stack2.stack.length - 1] :
      this.stack1.stack[0];
  }
}

function processData(input) {
  const queue = new Queue();
  //개행 기준으로 나눠서 query 구분
  const queries = input.split("\n");
  //맨 앞을 쿼리 갯수로 받아옴.
  queries.shift();
  //queries를 순회하면서 각 쿼리를 파싱함
  queries.forEach(query => {
    //파싱 -> 쿼리[0]이 1인지, 2인지, 3인지에 따라 실행할 함수 만들기
    const queryArr = query.split(" ");
    switch (queryArr[0]) {
      case "1":
        queue.enqueue(queryArr[1]);
        break;
      case "2":
        queue.dequeue();
        break;
      case "3":
        console.log(queue.getFront());
        break;
      default:
        break;
    }
    //1일 때 enqueue
    //2일 때 dequeue
    //3일 때 front print
  })
}

let input;
input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;

processData(input);