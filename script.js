document.querySelectorAll('.draggable').forEach(img => {
  img.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('src', e.target.src);
  });
});

document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  cell.addEventListener('drop', (e) => {
    e.preventDefault();
    const src = e.dataTransfer.getData('src');
    if (src) {
      cell.innerHTML = `<img src="${src}" />`;
    }
  });
});
