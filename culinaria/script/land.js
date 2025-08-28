document.getElementBy 'contactForm' .addEventlistener('submit', function(event) 
 .preventDefault()

     const formData = new FormData (event.target);
     const data = {};
     formData.forEach (value, key )  
          data[key] = value;


     console.log(data); // Adiciona esta linha para //verificar os dados no console
    
     fetch('https://script.google.com/macros/s/AKfycbzqX7FB8BAOoyyzdiUdDb36p7_lem8MPVsg46H3FJbogyDwVXAozKHYvM_dFD',{
        method: 'POST',
        body: new URLSearchParams (data)
    })
    .then(response => resposnse.json())
    .then (responseData => {
         if (resposnseData.result  === 'success') {
                alert('Dados enviados com sucesso!') 
                Event.target.reset(); // Limpa o formulario 
          } else if (responseData.result === 'error' && responseData.message ==='Email already')
                alert('Erroo:o email ja existe.');
        } else {
                alert('erro ao enviar os dados.');
         
     }) 
            .catch(error =>  console.error('Error:'. error));
    ]);


    
