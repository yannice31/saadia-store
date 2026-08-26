const waBtn = document.querySelector('.whatsapp-btn');
  const form = document.querySelector('.order-form');
  waBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formValues = Object.fromEntries(new FormData(form));
    const message = `Commande :
Nom: ${formValues.name}
Prénom: ${formValues.nickname}
Email: ${formValues.email}
Numéro: ${formValues.number}
Produit: ${formValues.product}
Quantité: ${formValues.quantity}
Détails: ${formValues.details || '-'}`;
    const phone = '22674646209'; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
  
  const counter = document.getElementById("counter");
  fetch('Compteur.json')
    .then(res => res.json())
    .then(data => { counter.textContent = data.totalCommandes; });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById("confirmation-message").classList.remove("hidden");
      form.reset();
      await fetch('Update_Compteur.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
      })
      .then(res => res.json())
      .then(data => { counter.textContent = data.totalCommandes; });
    } else {
      alert("❌ Une erreur est survenue. Réessayez plus tard.");
    }
  });