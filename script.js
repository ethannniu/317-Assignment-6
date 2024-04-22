(function () {
    "use strict";
    /* Start of your code */

    var x = document.createElement("textarea");

    const button = document.createElement("INPUT");
    button.setAttribute("type", "submit");
    button.value = "Submit";

    document.body.append(x);
    document.body.append(button);
    
    button.onclick = function() {
        const text1 = x.value; 
        console.log(text1);

        const myArray = text1.split(" ");
        console.log(myArray);
      
        var count = {}, ele;
  
        for (let i = 0; i < myArray.length; i++) {
            ele = myArray[i];
            if (count[ele] > 0) {
                count[ele] += 1;
            } else {
                count[ele] = 1;
            }
        }
        console.log(count);

        var uniques = [];
        var value;
        for(ele in count) {
            var element = {};
            value = ele
            element[value] = count[ele];

            uniques.push(element);
        }
        console.log(uniques);

        function compareFrequency(a, b) {
            console.log(a.value);
            return a.value - b.value;

        }

        uniques.sort(compareFrequency);
        

        console.log(uniques);



        // for(let i = 0; i < uniques.length;i++) {
        //     var obj = {
        //         [uniques[i]]: count.uniques,
        //       }

        // }

        // const order = Object.values(count).sort();




        // let stop = 0
        // while(stop!=0) {
        //     stop = 0
        //     if(count.order[i] === count.order[i+1]){
        //         if(order[i]< Object.keys(count)[i + 1]) {
        //             let temp = order[i];
        //             order[i] = order[i+ 1];
        //             order[i+1] = temp;
        //             stop++;
        //         }
        //     }
        //     i++;
        //     if(i > order.length - 1) {
        //         i = 0;
        //     }

        // }
        // console.log(order);
        


        // function compare(a, b) {
        //     return count[b] - count[a];
        // }
        // var order = count.sort();

        // console.log(order);
    }

    // button.addEventListener('submit', function() {
    //     var text1 = x.value; 
    //     alert("click");

    // })
    
    // function countWords(text){
    //     const myArray = text.split(" ");
    //     console.log(myArray);
    // }





    

  })();
  

