                    ///// ARRRAYS  /////      
        


///минимум массива
/* let x = function findMid(arr){
let min = arr.length ? arr[0]:0;
for (let i =0;i<arr.length;i++){
    if(arr[i] < min){
        min = arr[i]
    }
}
console.log(`min is ${min}`)
}

x([3,4,5,6]) */




        ///найти среднее массива
/* function findAvg (arr) {
    let sum = 0;
    for (let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    let avg = arr.length ? sum/arr.length:0;
    console.log(avg)
}
findAvg([1,2,3]) */




            ////обход массива индекс-элемент
/* function arrayBypass (arr){
    for (let i=0;i<arr.length;i++){
       console.log(`array elem with ndex ${i} is ${arr[i]}`)
    } 
}
arrayBypass([2,3,4]) */









                //// MATRIX //////
//// MATRIX ////////// MATRIX ////////// MATRIX //////

let matrix = [
    [0,2,4],
    [4,7,6],
    [9,8,6]
];


/////обход матрицы индекс-элемент
/* function lofEachMatrixItem (matr){
    for (let i=0;i<matr.length;i++){
        for (let j=0;j<matr[i].length;j++){
            console.log(`matrix element ${i},${j} is ${matr[i][j]} `)
        }
    }
}
lofEachMatrixItem(matrix) */





////показать матрицу
/* function showMatrix (matr){
    for (let i=0;i<matr.length;i++){
    console.log(matr[i].join(" "))
      
    }
}
showMatrix(matrix) */





//// сумма чисел во всех рядах
/* function sumByRow (matr){
    let sum=0;
    for (let i=0;i<matr.length;i++){
for (let j=0;j<matr[i].length;j++){
    sum += matr[i][j];
}          
        }
        console.log(sum);
}

sumByRow(matrix) */


/////найти колонки матрицы где есть нули
/* function findColWithZero (matr){
    let cols=[];
    for (let i=0;i<matr.length;i++){
        for (let j=0;j<matr[i].length;j++){
            if(matr[i][j] === 0){
                if(!cols.includes(j)){
                    cols.push(j);
                }
            };
}          
        }
        console.log(cols);
}

findColWithZero(matrix) */




//// snake bypass
/* function snakeBypass (matr){
    for (let i=0;i<matr.length;i++){
    for (let j=0;j<matr[i].length;j++){
    let rownindex = i % 2 ===0 ? j:(matr[i].length - j - 1);
    console.log(matr[i][rownindex])
}          
}
}
snakeBypass(matrix) */




////diagonal
/* function diagonal (matr){
    for (let i=0;i<matr.length;i++){
    console.log(matr[i][i])
}}
diagonal(matrix) */



////reverse - diagonal
/* function diagonal (matr){
    for (let i=0;i<matr.length;i++){
        console.log(matr[i][matr[i].length - 1 - i]);
               
    }
    }
diagonal(matrix)  */



///show left-bottom triangle
/* function showBottomTriangle(matr){
let row;

for (let i=0;i<matr.length;i++){
    row=[];
    for (let j=0;j<=i;j++){
    row.push(matr[i][j])
}    
console.log(row.join(" "))      
}
}
showBottomTriangle(matrix) */







                                    /////stack////
/* function bracketsIssue() {
    const OPEN_BRACKETS = ['(', '{'];
    const BRACKETS_PAIR = {
      [')']: '(',
      ['}']: '{',
    };
  
    function isBracketsOk(str) {
      let stack = [];
  
      for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];
        
        if (OPEN_BRACKETS.includes(currentSymbol)) {
          stack.push(currentSymbol);
        } else {
          if (stack.length === 0) {
            return false;
          }
  
          let topElement = stack[stack.length - 1];
  
          if (BRACKETS_PAIR[currentSymbol] === topElement) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
  
      return stack.length === 0;
    }
  
    console.log('  check case - ()(()()) -', isBracketsOk('()(()())'));
    console.log('  check case - ())(() -', isBracketsOk('())(()'));
    console.log('  check case - (){}({}()) -', isBracketsOk('(){}({}())'));
    console.log('  check case - (}({}()) -', isBracketsOk('(}({}())'));
    console.log('  check case - ((()) -', isBracketsOk('((())'));
  }

  bracketsIssue() */








                    ////algorithms//////
////1.bubble
/* function bubbleSort(arr) {
    for (let i = 0; i <arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j + 1] < arr[j]) {
          let t = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = t;
        }
      }
    }
    return arr;
  }
  console.log(bubbleSort([4,1,3])) */


  ////2.fast sort
  /* function quickSort(arr) {
    if (arr.length == 0) return [];
    let a = [],
      b = [],
      p = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < p) a.push(arr[i]);
      else b.push(arr[i]);
    }
    return quickSort(a).concat(p, quickSort(b));
  }
  console.log(quickSort([4,8,2,1])) */


  ////3.binarySearch
 /*  const arr = [1, 2, 4, 6, 1, 100, 0, 10000, 3];

function binarySearch(arr, target) {
    let left=0;
    let right=arr.length-1;
  let mid;

  while (left <= right) {
    mid = Math.round((right-left)/2) + left;
   if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    right = mid -1;
  } else {
    left = mid + 1;
  }
}
return -1;
}
console.log(binarySearch(arr, 0)) */






//////list////////

/* class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // { value: 1, next: <obj_2> } -> { value: 2, next: null }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    add(value) {
      if (this.length === 0) {
        this.head = new Node(value);
      } else {
        let current = this.head;
  
        // move to the last node
        while(current.next) {
          current = current.next;
        }
  
        current.next = new Node(value);
      }
  
      this.length++;
    }
  
    insert(position, value) {
      if (position < 0 || position > this.length) {
        return false;
      }
  
      let node = new Node(value);
  
      if (position === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let current = this.head;
        let prev = null;
  
        let index = 0;
  
        while (index < position) {
          prev = current;
          current = current.next;
          index++;
        }
  
        prev.next = node;
        node.next = current;
      }
  
      this.length++;
    }
  
    get(position) {
      if (position < 0 || this.length <= position ) {
        return;
      }
  
      let current = this.head;
      let index = 0;
  
      while (index < position) {
        current = current.next;
        index++;
      }
  
      return current.value;
    }
  
    removeAt(position) {
      if (position < 0 || position >= this.length) {
        return null;
      }
  
      let current = this.head;
  
      if (position === 0) {
        this.head = current.next;
      } else {
        let prev = null;
        let index = 0;
  
        while (index < position) {
          prev = current;
          current = current.next;
          index++;
        }
  
        prev.next = current.next;
      }
  
      this.length--;
      return current.value;
    }
  
    remove(element) {
      this.removeAt( this.indexOf(element) );
    }
  
    indexOf(element) {
      let current = this.head;
      let index = 0;
  
      while (current) {
        if (current.value === element) {
          return index;
        }
  
        current = current.next;
        index++;
      }
  
      return -1;
    }
  
    size() {
      return this.length;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    print() {
      let current = this.head;
  
      while(current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  console.log('s01e11 - Linked List');
  
  let payload = { a: 4 };
  
  function addItems() {
    console.log('\n  Add Items');
  
    list.add( {a: 1} );
    list.add( {a: 2} );
    list.add( {a: 3} );
    
    list.insert(2, payload);
  
    list.insert(0, {a: 5});
    list.insert(5, {a: 6});
  
    list.print();
  }
  
  function getItems() {
    console.log('\n  Get Items');
  
    console.log('get(4):', list.get(4));
    console.log('get(0):', list.get(0));
    console.log('get(-5):', list.get(-5));
  
    console.log('indexOf {a: 5}:', list.indexOf({a: 5}));
    console.log('indexOf payload:', list.indexOf(payload));
  }
  
  function removeItems() {
    console.log('\n  Remove Items');
  
    console.log('   Before:');
    list.print();
  
    list.remove(payload);
  
    console.log('   After:');
    list.print();
  }
  
  
  let list = new LinkedList();
  
  addItems();
  getItems();
  removeItems(); */








  ///// дерево
   /* class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    add(value) {
      this.root = addWithin(this.root, value);
  
      function addWithin(node, value) {
        if (!node) {
          return new Node(value);
        }
  
        if (node.value === value) {
          return node;
        }
  
        if (value < node.value) {
          node.left = addWithin(node.left, value);
        } else {
          node.right = addWithin(node.right, value);
        }
  
        return node;
      }
    }
  
    has(value) {
      return searchWithin(this.root, value);
  
      function searchWithin(node, value) {
        if (!node) {
          return false;
        }
  
        if (node.value === value) {
          return true;
        }
  
        return value < node.value ? 
          searchWithin(node.left, value) : 
          searchWithin(node.right, value);
      }
    }
  
    remove(value) {
      this.root = removeNode(this.root, value);
  
      function removeNode(node, value) {
        if (!node) {
          return null;
        } 
   
        if (value < node.value) {
          node.left = removeNode(node.left, value);
          return node;
        } else if (node.value < value) {
          node.right = removeNode(node.right, value);
          return node;
        } else {  */
          // equal - should remove this item
/*            if (!node.left && !node.right) {
 */            // put null instead of item
          /*    return null;
          } 
  
           if (!node.left) { */
             // set right child instead of item
            /*  node = node.right;
            return node;
          }  */
  
          /*  if (!node.right) {
             // set left child instead of item
             node = node.left;
            return node;
          } 
   */
          // both children exists for this item
           /* let minFromRight = node.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          node.value = minFromRight.value;
  
          node.right = removeNode(node.right, minFromRight.value);
  
          return node;
        }
      }
    }
  
    min() {
      if (!this.root) {
        return;
      }
  
      let node = this.root;
      while (node.left) {
        node = node.left;
      }
  
      return node.value;
    }
  
    max() {
      if (!this.root) {
        return;
      }
  
      let node = this.root;
      while (node.right) {
        node = node.right;
      }
  
      return node.value;
    }
  
    leftTraverse(cb) {
      doLeft(this.root, cb);
  
      function doLeft(node, cb) {
        if (node) {
          doLeft(node.left, cb);
          cb(node.value);
          doLeft(node.right, cb);          
        }
      }
    }
  
    rightTraverse(cb) {
      doRight(this.root, cb);
  
      function doRight(node, cb) {
        if (node) {
          doRight(node.right, cb);
          cb(node.value);
          doRight(node.left, cb);
        }
      }
    }
  }
  
  console.log('s01e12 - BST (Binary Search Tree)');
  
  function addItems() {
    console.log('\n  Add Items');
    console.log('add 13, 15, 9, 20, 18, 32, 25');
  
    bst.add(13);
    bst.add(15);
    bst.add(9);
    bst.add(20);
    bst.add(18);
    bst.add(32);
    bst.add(25); 
   */
  
    //  Should get something like this:
    //    13
    //   /  \
    //  9    15
    //        \
    //         20
    //        /  \
    //       18   32
    //           /
    //          25
   /* }
  
  function getItems() {
    console.log('\n  Get Items');
  
    console.log('has 10', bst.has(10));
    console.log('has 15', bst.has(15));
    console.log('\n', bst);
  
    console.log('  Left Traverse:');
    bst.leftTraverse((val) => console.log(val));
  
    console.log('  Right Traverse:');
    bst.rightTraverse((val) => console.log(val)); 
  
    console.log('min:', bst.min());
    console.log('max:', bst.max());
  }
  
  function removeItem() {
    console.log('  Remove Item');
  
    bst.remove(15);
    console.log('remove 15');
    console.log(bst);
  
    console.log('  Left Traverse:');
    bst.leftTraverse((val) => console.log(val));
  }
  
  
  const bst = new BinarySearchTree();
  
  addItems();
  getItems();
  removeItem(); 
 */


class Nap {
  map="world";

constructor(name,city){
  this.name="dfdf";
  this.date=new Date();
  this.city="moscow"
}

sum (){
  console.log(this.name + this.date + this.city) 
}
}

let ss = new Nap("nyam", "moscow" );