document.getElementById('btn').addEventListener('click', function () {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      var msg = document.getElementById('message');
      msg.innerHTML = '<img src="' + data[0].url + '" alt="Random cat" style="max-width:300px;max-height:300px;border-radius:12px;margin-top:1rem;box-shadow:0 4px 12px rgba(0,0,0,0.15);">';
    })
    .catch(function () {
      document.getElementById('message').textContent = 'Could not fetch a cat. Try again!';
    });
});
