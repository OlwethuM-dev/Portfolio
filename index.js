
              //Mobile Nav-bar //
const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');

   
   burger.addEventListener('click', () => {
          //Toggle Nav //
       nav.classList.toggle('nav-active');

        //Animate Links //
   navLinks.forEach((link,index) => {
    if (link.style.animation) {
        link.style.animation = ''
    }
    else {
      link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
    }
   });
          
               //Burger Animation //
               burger.classList.toggle('toggle');
   });
}

navSlide();


       //Contact-Me-Form //

       console.log('It works!')

       $(document).ready(function () {
          $('.submit').click(function (event) {
             console.log('Clicked button')
    
          var name = $('.name').val ()
          var surname = $('.surname').val ()
          var email = $('.email').val () 
          var number = $('.number').val ()
          var message = $('.message').val ()
          var statusElm = $('.status')
          statusElm.empty()

          if(name.length > 50) {
             statusElm.append('<div>Your name is valid</div>')
          } else {
            event.preventDefault()
             statusElm.append('<div>Your name is not valid</div>')
          }

          if(surname.length > 50) {
             statuseElm.append('<div>Your surname is valid</div>')
          } else {
            event.preventDefault()
             statusElm.append('<div>Your surname is not valid</div>')
          }

          if(email.length > 15 && email.includes('@') && email.includes('.')) {
             statusElm.append('<div>Email address is valid</div>')
          } else {
            event.preventDefault()
             statusElm.append('<div>Email address is not valid</div>')
          }

          if (number.length > 10) {
             statusElm.append('<div>Phone number is valid</div>')
          } else {
            event.preventDefault()
             statusElm.append('<div>Phone number is not valid</div>')
          }

          if(message.length > 500) {
             statusElm.append('<div>Your message is valid</div>')
          } else {
            event.preventDefault()
             statusElm.append('<div>Your message is not valid</div>')
          }

    
          })
       })
    
