particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    Math.random() > .5 ? confirm('bruh') : confirm('microphone')
    
  })
})