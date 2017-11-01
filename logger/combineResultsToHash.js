//**Simple Key Pair JSON structure**

    var datamouse = {"2017-07-30 18:18:41": [1417, 300], "2017-07-30 18:18:39": [1417, 1079], "2017-07-30 18:18:43": [1304, 222], "2017-07-30 18:18:44": [1372, 473], "2017-07-30 18:18:40": [838, 614]};

var datakeyboard = {"2017-07-30 18:25:45": 1, "2017-07-30 18:25:44": 1, "2017-07-30 18:25:47": 1, "2017-07-30 18:25:46": 1, "2017-07-30 18:25:41": 1, "2017-07-30 18:25:43": 1, "2017-07-30 18:25:49": 1, "2017-07-30 18:25:48": 1}

//**Usage JavaScript code to access the key pairs**
obj = {}

    for (var key in datamouse) 
      { if (!datamouse.hasOwnProperty(key))
        { continue; } 
        !obj[key.substr(0,16)] ?  obj[key.substr(0,16)]= 1 : obj[key.substr(0,16)] += 1;
<!--         document.getElementById("demo").innerHTML += key + ' -> ' +  data[key] + '<br />';
         -->   
         };
         
    for (var key in datakeyboard) 
      { if (!datakeyboard.hasOwnProperty(key))
        { continue; } 
        !obj[key.substr(0,16)] ?  obj[key.substr(0,16)]= 1 : obj[key.substr(0,16)] += 1;
<!--         document.getElementById("demo").innerHTML += key + ' -> ' +  data[key] + '<br />';
         -->   
         };
    for (var key in obj) 
      { if (!obj.hasOwnProperty(key))
        { continue; } 
        obj[key.substr(0,12)] = 1;
        document.getElementById("all").innerHTML += key + ' -> ' +  obj[key] + '<br />';
      };
