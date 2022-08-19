// step-1
document.getElementById('submit-btn').addEventListener('click',function(){
    // step-2
    // alaways remember to use (.value) to get text from an input field
    // console.log('click submit button')
    const emailfield = document.getElementById('useremail')
    const email = emailfield.value
    // console.log(email)

    const getpassword = document.getElementById('userpassword')
    const password = getpassword.value
    console.log(email,password);

    if(email === 'mybank@mail.com'&& password === '123456')
    {
       window.location.href = 'bank.html';
    }
    else{
      alert('invalid')
    }

})