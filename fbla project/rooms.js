let checkin_date = localStorage.getItem("checkin_date");
let checkout_date = localStorage.getItem("checkout_date");

function setsotrage() {

    if (!localStorage.getItem('checkin_date')) {
      localStorage.setItem('checkin_date','')
    }
    if (!localStorage.getItem('checkout_date')) {
      localStorage.setItem('checkout_date','')
    }
    
  }
  
  setsotrage()



  document.getElementById('chekin-date').value= checkin_date
  document.getElementById('chekout-date').value= checkout_date