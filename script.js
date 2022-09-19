let btn = document.getElementById('calcbtn');

btn.addEventListener('click', function(){
    let weight = document.getElementById('weight-input').value;
    let height = document.getElementById('height-input').value;
    console.log(weight)
    console.log(height)
    let bmi = (weight/(height*height)*10000);
    var interpretation=" ";
    if (bmi<18.5) {
        interpretation=", so you are underweight.";
    }
    else if(bmi>=18.5&&bmi<25){
        interpretation=", so you have a normal weight."
    }
    else if(bmi>=25&&bmi<30){
        interpretation=", so you are overweight."
    }
    else 
        interpretation=", so you are obese."
    document.getElementById('bmires').value = "Your BMI is " +Math.floor(bmi) +interpretation;
})
function myFunc() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
