
function setsotrage() {

    if (!localStorage.getItem('checkin_date')) {
      localStorage.setItem('checkin_date','')
    }
    if (!localStorage.getItem('checkout_date')) {
      localStorage.setItem('checkout_date','')
    }
    
  }
  
  setsotrage()

  