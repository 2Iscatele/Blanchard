// Модальное окно в Галерее (инф о картине)
let previousActiveElement = null;
const gallaryContainer = document.querySelector('.gallary__container');
const openPictureCardButtons = document.querySelectorAll('.swiper-slide');
const modal = document.querySelector('.modal');
const modalPictureCard = modal.querySelector('.modal-picture-card');


openPictureCardButtons.forEach((openPictureCardButton) => {
  openPictureCardButton.addEventListener('click', (event) => {
    const imgElement = event.currentTarget.querySelector('.gallery__image');
    const pictureImgSrc = imgElement.getAttribute('src');
    console.log(pictureImgSrc);
    const pictureWrapper = modalPictureCard.querySelector('.modal-picture-info__left');
    pictureWrapper.style.backgroundImage = `url("${pictureImgSrc}")`;
    const pagePosition = openModal(modalPictureCard);
    controlModal(modalPictureCard, pagePosition);
  });
});

function controlModal(modalElement, pagePosition) {
  modal.addEventListener('click', clickCloseButtonHandler);
  window.addEventListener('keydown', keydownCloseHandler);

  function clickCloseButtonHandler(ev) {
    const clickedElement = ev.target;
    if (clickedElement.classList.contains('modal') || clickedElement.classList.contains('modal-close-btn')) {
      closeModal(modalElement, pagePosition);
      deleteEvents();
    };
  };

  function keydownCloseHandler(e) {
    if (e.key === 'Escape') {
      if (modal.classList.contains('is-open')) {
        closeModal(modalElement, pagePosition);
        deleteEvents();
      };
    };
  };

  function deleteEvents() {
    modal.removeEventListener('click', clickCloseButtonHandler);
    window.removeEventListener('keydown', keydownCloseHandler);
  };
};


function openModal(modalContainer) {
  previousActiveElement = document.activeElement;
  modal.classList.add('is-open');
  const pagePosition = disableScroll();
  modalContainer.classList.add('modal-open');
  setTimeout(() => {
    modalContainer.classList.add('animate-open');
    modalContainer.querySelector('.modal-close-btn').focus();
  }, 300);

  Array.from(siteContainer.children).forEach((child) => {
    child.inert = true;
  });

  return pagePosition;
};

function closeModal(modalElement, pagePosition) {
  modalElement.classList.remove('animate-open');
  setTimeout(() => {
    modal.classList.remove('is-open');
    modalElement.classList.remove('modal-open');
    const imgElement = modalElement.querySelector('.modal-picture-info__img');
    if (imgElement) {
      imgElement.remove();
    };
    enableScroll(pagePosition);
    previousActiveElement.focus();
    previousActiveElement = null;
  }, 300);

  Array.from(siteContainer.children).forEach((child) => {
    child.inert = false;
  });
};

function disableScroll() {
  const pagePosition = window.scrollY;
  lockPadding();
  document.body.classList.add('disable-scroll');
  document.body.style.top = -pagePosition + 'px';
  return pagePosition;
};

function enableScroll(pagePosition) {
  unlockPadding();
  document.body.style.top = 'auto';
  document.body.classList.remove('disable-scroll');
  window.scroll({ top: pagePosition, left: 0 });
  document.body.removeAttribute('data-position');
};

const fixBlocks = document.querySelectorAll('.fix-block');

function lockPadding() {
  const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  fixBlocks.forEach((fixBlock) => {
    fixBlock.style.paddingRight = paddingOffset;
  });
  document.body.style.paddingRight = paddingOffset;
};

function unlockPadding() {
  fixBlocks.forEach((fixBlock) => {
    fixBlock.style.paddingRight = '0px';
  });
  document.body.style.paddingRight = '0px';
};
