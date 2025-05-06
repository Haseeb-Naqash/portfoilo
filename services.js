
  const services = document.querySelectorAll('.servicesItem');
  const popup = document.getElementById('servicePopup');
  const popupTitle = document.getElementById('popupTitle');
  const popupDescription = document.getElementById('popupDescription');

  services.forEach(service => {
    service.addEventListener('click', () => {
      const title = service.querySelector('h3').textContent;
      const description = service.querySelector('p').textContent;

      popupTitle.textContent = title;
      popupDescription.textContent = description;
      popup.style.display = 'flex';
    });
  });

  function closeServicePopup() {
    popup.style.display = 'none';
  }
