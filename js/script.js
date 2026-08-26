  document.querySelectorAll('.cert-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      document.querySelectorAll('.cert-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.cert-list').forEach(l=>l.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.cert-list[data-list="${tab.dataset.tab}"]`).classList.add('active');
    });
  });
