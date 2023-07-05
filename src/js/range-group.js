(() => {
  const rangeGroups = document.querySelectorAll('.range-group');

  if (!rangeGroups.length) {
    return;
  }

  function checkDisabledState(min, max, value, decrement, increment) {
    if (min === value) {
      decrement.setAttribute('disabled', '');
    }

    if (min < value) {
      decrement.removeAttribute('disabled');
    }

    if (max === value) {
      increment.setAttribute('disabled', '');
    }

    if (max > value) {
      increment.removeAttribute('disabled');
    }
  }

  rangeGroups.forEach((rangeGroup) => {
    const decrement = rangeGroup.querySelector('[data-action="decrement"]');
    const increment = rangeGroup.querySelector('[data-action="increment"]');
    const label = rangeGroup.querySelector('.form-label__value');
    const suffix = label.getAttribute('data-suffix') || '';
    const control = rangeGroup.querySelector('.range-group__control');
    const step = parseInt(control.getAttribute('step'), 10) || 1;
    const min = parseInt(control.getAttribute('min'), 10) || 0;
    const max = parseInt(control.getAttribute('max'), 10) || 100;

    control.addEventListener('input', (e) => {
      label.textContent = `${e.target.value} ${suffix}`;
      checkDisabledState(min, max, parseInt(e.target.value, 10), decrement, increment);
    });

    decrement.addEventListener('click', () => {
      if (control.value > min) {
        const value = parseInt(control.value, 10) - step;
        control.value = value;
        label.textContent = `${control.value} ${suffix}`;
        checkDisabledState(min, max, value, decrement, increment);
      }
    });

    increment.addEventListener('click', () => {
      if (control.value < max) {
        const value = parseInt(control.value, 10) + step;
        control.value = value;
        label.textContent = `${control.value} ${suffix}`;
        checkDisabledState(min, max, value, decrement, increment);
      }
    });
  });
})();
