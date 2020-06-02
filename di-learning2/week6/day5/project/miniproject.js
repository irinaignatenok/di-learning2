 const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

  // create a table
          
          // let table = document.createElement("table");
          // let row = document.createElement("tr");
        
// append new Elements
//           document.body.appendChild(container);
//           container.appendChild(table);
//           table.appendChild(row);
//           table.className = "myTable";
//           row.className = "container";

// // ADD TEXT
          const containerRobots = document.getElementById("container")
          for (x of robots) {
            let newRobot = document.createElement("div");
            let nameRobot = document.createTextNode(x.name);
            let imageRobot =  document.createElement("img");
            imageRobot.setAttribute("src", x.image);
            imageRobot.setAttribute("style", "width:200px; height: 200px;");
          imageRobot.className ="pic";
            let parag = document.createElement("p");
            parag.appendChild(document.createTextNode(x.email));
            [nameRobot, imageRobot, parag].forEach((value) => {
              newRobot.appendChild(value)
            });
            containerRobots.appendChild(newRobot);
            newRobot.classList.add("robots");
            // nameRobot.classList.add("name");
          }
          const names = [];
           const input = document.getElementById("myInput");
        input.addEventListener('keyup', function(e){
          const term = e.target.value.toLowerCase();

         for(item of robots) { 
          let title = item["name"];
        
          

          let newRobots = robots.filter((val) => {
            if( title.toLowerCase() == term) {
                return val.style.display ="block";
            }else
              return val.style.display = "none";
            })
        }
            })
      // input = document.getElementById("myInput");
      //       filter = input.value.toUpperCase();
      //  function myFunction(filter) {
      //   let newArray = [];
      //   robots.forEach((value) => {
      //     value.name.toLowerCase() == filter.toLowerCase() ? value.style.display ="none":
      //     value.style.display = "none";
      //   })
      //  }
        
           
            // if (title.toLowerCase.indexOf(term) != 1){
            //   return val.style.display ="block";
            // }else
            //   return val.style.display = "none";
        //     // })
        // }
        




        
         



         

