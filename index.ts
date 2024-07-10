const modal = document.getElementById('modal');
const btnTry = document.getElementById('btn-try');
const btnClose = document.getElementById('btn-close');

function setModalState(modalState: 'hidden' | 'visible') {
  if (modal) {
    modal.style.visibility = modalState;
  }
}

setModalState('hidden');

if (btnTry) {
  btnTry.onclick = () => setModalState('visible');
}

if (modal) {
  modal.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target instanceof HTMLElement) {
      if (target.classList.contains('modal')) {
        setModalState('hidden');
      }
    }
  });
}

if (btnClose) {
  btnClose.onclick = () => setModalState('hidden');
}
