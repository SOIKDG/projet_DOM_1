// Fonction pour recalculer le prix total
function calculateTotal() {
    let total = 0;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const price = parseFloat(card.querySelector('.unit-price').textContent);
      const quantity = parseInt(card.querySelector('.quantity').textContent);
      total += price * quantity;
    });
    document.querySelector('.total').textContent = `${total} FCFA`;
  }
  
  // Fonction d'ajout d'événement à chaque carte produit
  function initializeCard(card) {
    const plusBtn = card.querySelector('.fa-plus-circle');
    const minusBtn = card.querySelector('.fa-minus-circle');
    const trashBtn = card.querySelector('.fa-trash-alt');
    const heartBtn = card.querySelector('.fa-heart');
    const quantitySpan = card.querySelector('.quantity');
  
    // Ajouter un produit
    plusBtn.addEventListener('click', () => {
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      calculateTotal();
    });
  
    // Diminuer un produit
    minusBtn.addEventListener('click', () => {
      if (parseInt(quantitySpan.textContent) > 0) {
        quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
        calculateTotal();
      }
    });
  
    // Supprimer le produit
    trashBtn.addEventListener('click', () => {
      card.remove();
      calculateTotal();
    });
  
    // Aimer un produit (toggle de couleur rouge)
    heartBtn.addEventListener('click', () => {
      heartBtn.classList.toggle('text-danger');
    });
  }
  
  // Initialisation de tous les produits au chargement
  document.querySelectorAll('.card').forEach(card => {
    initializeCard(card);
  });
  