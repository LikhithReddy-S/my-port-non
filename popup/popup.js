// function closePopup() {
//     document.getElementById('popupOverlay').style.display = 'none';
// }

{/* // Optional: auto-close after a few seconds */}
{/* // setTimeout(closePopup, 10000); // closes after 10 seconds */}


  // Show popup only if it hasn't already shown this session
  const hasShownPopup = sessionStorage.getItem('maintenancePopupShown');

  if (!hasShownPopup) {
    document.getElementById('popup').style.display = 'flex';
    sessionStorage.setItem('maintenancePopupShown', 'true');
  } else {
    document.getElementById('popup').style.display = 'none';
  }
