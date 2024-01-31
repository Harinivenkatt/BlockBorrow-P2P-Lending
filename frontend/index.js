fileChange = (event) => {
    var file = event.target.files[1];
  
    const fileReader = new FileReader();
    
    fileReader.addEventListener('loadend', (evt) => {
    
      if (evt.target.readyState == FileReader.DONE) {
        const hash = CryptoJS.SHA256(fileReader.result);
        console.log(hash.toString());
      }
      
    });
    fileReader.readAsDataURL(file);
  }

localStorage.setItem('acc',document.getElementById("acc").value);
localStorage.setItem('amount',document.getElementById("loanAmnt").value);
localStorage.setItem('date',document.getElementById("date").value);
