var xmlhttp = new XMLHttpRequest();
var url = "https://script.google.com/macros/s/AKfycbxFWLAjEfbIEm8uMP1s5QKxx4VkaBa96V1aoE-8DmRkB5BnR54Q50nBv04l0YCUgsOP/exec";

xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data)
        FEE_paid_due_month = data.user.map(function(elem){
            return elem.FEE_paid_due_month;
        })
        Month_total_Paid = data.user.map(function(elem){
            return elem.Month_total_Paid;
        })
        //console.log(population)
        const ctx = document.getElementById('myChartlinepaid').getContext('2d');
        const myChart = new Chart(ctx, {
			
	  // Type of Chart - bar, line, pie, doughnut, radar, polarArea	
	  
			 type: 'line',
			
			

		
		
		  data: {
    // Data Labels
   // labels: ["Python", "JavaScript", "PHP", "Java", "C#", "C++"],
      labels: FEE_paid_due_month,
    datasets: [{
      // Data Set 1
      
        //  Chart Label
        //label: "Programming Languages",
          label: 'IN MONTH TOTAL Paid',
        // Actual Data
        //data: [13, 15, 1, 10, 9, 10],
        data: Month_total_Paid,
        // Background Color
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
		  "rgba(170, 204, 222, 0.2)",
		  
        ],

        // Border Color
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
		   "rgba(27, 197, 255, 1)",
		   "rgba(255, 27, 210, 1)",
        ],

        // Border Width  rgb(13 69 88);
        borderWidth: 3,
		
		 tension:0.4
      },


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
      lineHeight: 2,
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
 
  					
      scales: { /*---------------------------------------------- */
						x: {
							grid: {
							  color: '#2c2f46',
							  borderColor: 'red',
							  tickColor: '#808080'},
							ticks: {color: '#c9c4c4',}
						  },
											 
					   y: {
							grid: {
							  color: '#808080',
							  borderColor: 'red',
							  tickColor: '#808080'
							},
							ticks: {color: '#c9c4c4',}
						  }			 
            } /*---------------------------------------------- */
   
  
			   
			   
			   
			   
            }	
		
		

		});     // End  Chart(ctx, {
    }

}