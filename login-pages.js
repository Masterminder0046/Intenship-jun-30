 
particlesJS("particles-js", {
      "particles": {
        "number": { "value": 80 },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3
        }
      },
      "interactivity": {
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
        }
      },
      "retina_detect": true
    });

    document.querySelector('.bi').addEventListener('click', function (e) {
      e.preventDefault();
      const email = document.querySelector('.login input[type="email"]').value;
      const password = document.querySelector('.login input[type="password"]').value;

      if (!email || !password) {
        alert("All fields are required!");
        return;
      }

      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert("Logged in as " + email);
    });
  