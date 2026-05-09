const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));

  let currentIndex = 0;

  function changeSlide() {
    cases[currentIndex].classList.remove('rotator__case_active');

    currentIndex++;

    if (currentIndex >= cases.length) {
      currentIndex = 0;
    }

    const currentCase = cases[currentIndex];

    currentCase.classList.add('rotator__case_active');
    currentCase.style.color = currentCase.dataset.color;

    setTimeout(changeSlide, currentCase.dataset.speed);
  }

  setTimeout(changeSlide, cases[currentIndex].dataset.speed);
});