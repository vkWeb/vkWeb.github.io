function openNav() {
          document.getElementById("mySidebar").style.width = "250px";
          document.getElementById("mySidebar").style.display = "block";
          document.getElementById("main").style.marginLeft = "250px";
          document.getElementById("button").style.display = "none";
        }
        function closeNav() {
          document.getElementById("mySidebar").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
          document.getElementById("button").style.display = "block";
        }