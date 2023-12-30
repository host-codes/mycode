var xmlhttp = new XMLHttpRequest();
//var url = "http://localhost/bar-chart/js/jsonData.json";

var url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data)
        Nation = data.data.map(function(elem){
            return elem.Nation;
        }) 
        population = data.data.map(function(elem){
            return elem.Population;
        })
        //console.log(population)

        
		
		
		const ctx = document.getElementById('myChartradar2').getContext('2d');
        const myChart = new Chart(ctx, {
			
		 // type: 'polarArea',	
			 type: 'bar',
			
			
			
			
			
			
			
			
			
			
			
	
          
           /* data: {
                labels: Nation,
                datasets: [{
                    label: 'Population',
                    data: population,
                    backgroundColor: "#ff335e"
                    
                }]
            }, 
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }*/
        
		
		
		  data: {
    // Data Labels
   // labels: ["Python", "JavaScript", "PHP", "Java", "C#", "C++"],
 labels: Nation,
    datasets: [{
      // Data Set 1
      
        //  Chart Label
        //label: "Programming Languages",
        label: 'Population',
        // Actual Data
        //data: [13, 15, 1, 10, 9, 10],
        data: population,
        // Background Color
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],

        // Border Color
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        // Border Width
        borderWidth: 2,
      },

      // Data Set 2
      // {
      //   //  Chart Label
      //   label: "Framework",

      //   // Actual Data
      //   data: [10, 8, 3, 7, 8, 9],

      //   // Background Color
      //   backgroundColor: [
      //     "rgba(255, 97, 132, 0.2)",
      //     "rgba(54, 16, 235, 0.2)",
      //     "rgba(255, 26, 86, 0.2)",
      //     "rgba(75, 12, 192, 0.2)",
      //     "rgba(153, 2, 255, 0.2)",
      //     "rgba(255, 19, 64, 0.2)",
      //   ],
      // },
    ],
  },
		
		
		
		
	 options: {
		   responsive: false,
		   
		     // Set Padding
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    tooltips: {
      enabled: false, // Enable/Disable ToolTip By Default Its True
      backgroundColor: "red", // Set Tooltip Background Color
      titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
      titleFontSize: 30, // Set Tooltip Font Size
      titleFontStyle: "bold italic",
      titleFontColor: "yellow",
      titleAlign: "center",
      titleSpacing: 3,
      titleMarginBottom: 50,
      bodyFontFamily: "Comic Sans MS",
      bodyFontSize: 20,
      bodyFontStyle: "italic",
      bodyFontColor: "black",
      bodyAlign: "center",
      bodySpacing: 3,
    },
	
	   title: {
      display: true,
      text: "Custom Chart Title",
      position: "bottom",
      fontSize: 25,
      fontFamily: "cursive",
      fontColor: "#fff",
     // fontStyle: "bold italic",
	  fontStyle: "bold",
      padding: 20,
      lineHeight: -3,
    },
	    legend: {
      display: true,
      position: "bottom", // top left bottom right
      align: "end", // start end center
      labels: {
        fontColor: "#FFF",
        fontSize: 16,
        boxWidth: 20,
      },
    },

    animation: {
      duration: 5000,
      easing: "easeInOutBounce",
    },
                scales: {
					
					
                      r: {
        grid: {
          color: '#fff'
        }
		 
		
		
		
		}
		
		
                }
            }	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		});     // End  Chart(ctx, {
    }

}