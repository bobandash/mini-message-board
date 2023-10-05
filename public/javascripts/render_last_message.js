document.addEventListener('DOMContentLoaded', function(){
  let lastMessage = Array.from(document.querySelectorAll('.message')).slice(-1)[0]
  lastMessage.scrollIntoView();
})