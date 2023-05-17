
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

// Função para abrir o modal
const openModalFunction = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Função para fechar o modal
const closeModalFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Adiciona evento de clique para cada botão de abrir o modal
openModal.forEach(btn => btn.addEventListener('click', openModalFunction));

// Adiciona evento de clique no botão de fechar o modal
closeModal.addEventListener('click', closeModalFunction);

// Adiciona evento de clique na parte externa do modal que quando clicada fecha o modal
overlay.addEventListener('click', closeModalFunction);


const tabs = document.querySelectorAll('.operations-tab');
const tabsContainer = document.querySelector('.operations-tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations-tab');

  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('ope-active'));
  tabsContent.forEach(c => c.classList.remove('ope-content-active'));

  // Activate tab
  clicked.classList.add('ope-active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('ope-content-active');
});



        
            
          




