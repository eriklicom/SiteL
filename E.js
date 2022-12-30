var s = document.querySelectorAll("button.anin");

      s.forEach((e,i)=>{

        e.ontouchend = function(){

          e.classList.remove("hover");

        }

        e.ontouchstart = function(){

          e.classList.add("hover");

        }



      })
