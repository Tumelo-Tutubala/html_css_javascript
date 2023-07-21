 fname = document.querySelector(".Fname");
 lname = document.querySelector(".Lname");
btn = document.querySelector(".btn");
form = document.querySelector(".form");
   


 
  function display(data){
    document.getElementById("percentage").innerHTML =  'Love Percentage  : ' + data.percentage + '%';
  
    document.getElementById("message").innerHTML =  'Message : ' + data.result;
     }
  
  
    
  form.addEventListener("submit", displayres);
  function displayres(e) {
    const First = fname.value.toUpperCase();
    const Second = lname.value.toUpperCase();
    e.preventDefault();
    fetch(
      "https://love-calculator.p.rapidapi.com/getPercentage?fname=" +
        First +
        "&sname=" +
        Second,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "ab12fc277emshff845f4cfb3c737p17440djsn9bac897570e9",
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        display(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }



  