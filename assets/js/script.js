// data
const products = [
  { id: 1, description: "Harley 883", price: 12000, img: 'assets/img/mot1.jpeg'},
  { id: 2, description: 'Custom chinois', price: 5000, img: 'assets/img/mot2.jpeg'},
  { id: 3, description: 'Belle moto custom', price: 15000, img: 'assets/img/mot3.jpeg'},
  { id: 4, description: 'Belle moto custom', price: 18000, img: 'assets/img/mot4.jpeg'},
  { id: 5, description: 'Belle moto custom', price: 13000, img: 'assets/img/mot5.jpeg'},
  { id: 6, description: 'Belle moto custom', price: 16500, img: 'assets/img/mot6.jpeg'},
  { id: 7, description: 'Belle moto custom', price: 12500, img: 'assets/img/mot7.jpeg'},
  { id: 8, description: 'Belle moto custom', price: 12800, img: 'assets/img/mot8.jpeg'},
  { id: 9, description: 'Belle moto custom', price: 14800, img: 'assets/img/mot9.jpeg'},
  { id: 10, description: 'Très belle moto custom', price: 29, img: 'assets/img/mot10.jpeg'},
  { id: 11, description: 'Super belle moto custom', price: 87, img: 'assets/img/mot11.jpeg'},
  { id: 12, description: 'Magnifique  moto custom', price: 6, img: 'assets/img/mot12.jpeg'},
];

// set little red dot above icons nav
window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName('input'); 
  let notif = document.getElementById('nav-notif');

  // check if at least one of the checkboxes on the DOM is checked
  const checkboxCheck = () => { 
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  }

  // set red dot
  const setNotif = () => {
    if (checkboxCheck()){
      // console.log('true');
      notif.style.visibility = 'visible';
      notif.style.opacity = '1';
    } else {
      // console.log('false');
      notif.style.visibility = 'hidden';
      notif.style.opacity = '0';
    }
  }
  
  // check once if red dot is needed
  setNotif();

  // watch any change
  document.addEventListener('click', setNotif);

});

