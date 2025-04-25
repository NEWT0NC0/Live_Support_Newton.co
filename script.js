// Form validation
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errors = [];

  if (name.length < 2) errors.push("Please enter your name.");
  if (!/\S+@\S+\.\S+/.test(email)) errors.push("Please enter a valid email.");
  if (message.length < 10) errors.push("Message must be at least 10 characters.");

  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    alert("Message sent successfully! (Simulation)");
    document.querySelector("form").reset();
  }
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Wallet connect
async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider
