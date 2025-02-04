// Ajout d'un bouton "Retour en haut"
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.className = 'scroll-to-top';
  scrollToTopButton.textContent = '⬆ Retour en haut';

  Object.assign(scrollToTopButton.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    backgroundColor: '#f26419', // Orange
    color: '#f9f9f9', // Blanc cassé
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    display: 'none',
    zIndex: '1000',
  });

  document.body.appendChild(scrollToTopButton);

  // Montrer ou cacher le bouton
  window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  // Retour en haut de la page
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
