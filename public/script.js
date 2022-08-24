const radioButtons = document.querySelectorAll('.radio-buttons input');

radioButtons.forEach((input) => {
  input.addEventListener('click', (e) => {
    if (e.target.checked === true) {
      const booksForm = document.querySelector('.books');
      const authorsForm = document.querySelector('.authors');
      const publisherForm = document.querySelector('.publishers');
      const { name } = e.target;
      switch (name) {
        case 'books':
          radioButtons.forEach((innerInput) => {
            const inp = innerInput;
            if (inp.name !== 'books') inp.checked = false;
          });
          booksForm.style.display = 'flex';
          authorsForm.style.display = 'none';
          publisherForm.style.display = 'none';
          break;
        case 'author':
          radioButtons.forEach((innerInput) => {
            const inp = innerInput;
            if (inp.name !== 'author') inp.checked = false;
          });
          booksForm.style.display = 'none';
          authorsForm.style.display = 'flex';
          publisherForm.style.display = 'none';
          break;
        case 'publisher':
          radioButtons.forEach((innerInput) => {
            const inp = innerInput;
            if (inp.name !== 'publisher') inp.checked = false;
          });
          booksForm.style.display = 'none';
          authorsForm.style.display = 'none';
          publisherForm.style.display = 'flex';
          break;
        default:
          booksForm.style.display = 'flex';
          authorsForm.style.display = 'none';
          publisherForm.style.display = 'none';
      }
    }
  });
});
