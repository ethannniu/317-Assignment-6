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
        let body = document.getElementById("root");
        if(body.children.length > 0) {
            body.removeChild(body.firstChild);
        }


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

                if(uniques[i][1] === uniques[i + 1][1]) {
                    console.log("dogsad");

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



        var div = document.createElement('div');

        let table = document.createElement("table");
        // var tblBody = document.createElement("tbody");

        const tr = table.insertRow();

        var th = document.createElement('th');
        th.innerHTML = "word_name";
        tr.appendChild(th);

        var th = document.createElement('th');
        th.innerHTML = "word_frequency";
        tr.appendChild(th);
        table.appendChild(tr);



        for (let i = 0; i < 5; i++) {
            const tr = table.insertRow();

            var td = document.createElement('td');
            if(uniques.length > i + 1) {
                td.innerHTML = uniques[i][0];
            }
            else(
                td.innerHTML = ""
            )
            tr.appendChild(td);

            var td = document.createElement('td');
            if(uniques.length > i + 1) {
                td.innerHTML = uniques[i][1];
            }
            else(
                td.innerHTML = ""
            )
            tr.appendChild(td);

            table.appendChild(tr);


        }


        div.append(table);
        console.log(table);
       
       
        body.append(div);

    }






    

  })();
  

