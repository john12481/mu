let yesScale = 1; // Starting scale for Yes button
let noClicks = 0; // Count of No clicks
const compliments = [
  "Pls say yes I love you and you are the best mama",
  "You make my heart skip a beat every day!",
  "You're my sunshine on the cloudiest days.",
  "I can't imagine life without your smile.",
  "You're the most amazing person I've ever met.",
  "Say yes and let's create forever together!",
  "You're my everything, my love, my Val.",
  "I promise to cherish you always.",
  "You're the one who completes me.",
  "Pls, my heart is yours—say yes!",
  "You're beautiful inside and out.",
  "I love your laugh, your kindness, everything!",
  "Let's make memories that last a lifetime.",
  "You're my dream come true.",
  "I adore you more than words can say.",
  "Say yes and be my forever Val!",
  "You're the best thing that's ever happened to me.",
  "I love you to the moon and back.",
  "You're my queen, my love.",
  "Pls say yes, I need you in my life!"
];

document.getElementById('noBtn').addEventListener('click', function() {
  noClicks++;
  yesScale += 0.2; // Make Yes button bigger each time
  document.getElementById('yesBtn').style.transform = `scale(${yesScale})`;
  
  // Add more pleading text
  const messageDiv = document.getElementById('message');
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  messageDiv.innerHTML += `<p>${randomCompliment}</p>`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
  // Hide everything and show thank you
  document.querySelector('.container').innerHTML = `
        <h1>Thank you mama for accepting!</h1>
        <p>I love you so much! ❤️</p>
    `;
  
  // Notification action: Email notification (opens email app)
  window.location.href = "mailto:akposj423@gmail.com?subject=She Said Yes!&body=Hey, she accepted the proposal! Time to celebrate. ❤️";
  
  // Option 2: WhatsApp notification (uncomment if preferred)
   window.open("https://wa.me/09072210059?text=She said Yes! Proposal successful. ❤️", "_blank");
});