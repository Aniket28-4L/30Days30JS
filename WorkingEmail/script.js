
  const scriptURL = 'https://script.google.com/macros/s/AKfycbykme3qvNMUS-NEQFW-Z_4BjAmoyo3viZO546NU3vXfOfk7UQqH3vHCr4vmY_o2DP_A/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
