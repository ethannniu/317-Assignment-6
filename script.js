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

        let uniques = [];
        for(var word in count) {
            uniques.push([word, count[word]]);
        }
        console.log(uniques);

        uniques.sort(function(a, b) {
            return b[1] - a[1];
        });

        console.log(uniques);
        let r = 0;
        let bool = true;
        console.log(uniques.length);

        while(bool) {
            r = 0;
            for(let i = 0;i < uniques.length - 1; i++) {
                // console.log(uniques);
                // console.log(uniques[i][1]);
                // console.log(uniques[i + 1][1]);

                if(uniques[i][1] === uniques[i + 1][1]) {
                    console.log("dogsad");

                    // console.log(uniques[i][0]);
                    // console.log(uniques[i + 1][0]);
                    // console.log(uniques[i][0] > uniques[i + 1][0])
                    if(uniques[i][0] < uniques[i + 1][0]){

                        var temp = uniques[i];
                        uniques[i] = uniques[i + 1];
                        uniques[i + 1] = temp;
                        r--;
                    }
                    r++;
                }
                else{  
                    r++;
                }   
            }
            if(r ===uniques.length - 1) {
                break;
            }
        }

        console.log(uniques);

        var sorted = Object.fromEntries(uniques);
        console.log(sorted);


        let table = document.createElement('table');
        table.insertRow();

        // let keysSorted = Object.keys(count).sort(function(a,b){return count[a]-count[b]})

        // console.log(keysSorted);

        // var value;
        // for(ele in count) {
        //     var element = {};
        //     value = ele
        //     element[value] = count[ele];

        //     uniques.push(element);
        // }
        // console.log(uniques);

        // function compareFrequency(a, b) {
        //     console.log(a.value);
        //     return a.value - b.value;

        // }

        // uniques.sort(compareFrequency);
        

        // console.log(uniques);



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






    

  })();
  

