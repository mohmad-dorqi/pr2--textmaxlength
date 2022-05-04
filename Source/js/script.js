let input = document.getElementById('input')
let lengtt =document.getElementById('lengt')
let max = input.getAttribute('maxlength')


input.addEventListener('keyup',function () {
  lengtt.innerHTML= max - input.value.length
})