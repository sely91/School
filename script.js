document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const cardNumber = document.getElementById('cardNumber').value;
    const sanitizedCardNumber = cardNumber.replace(/\s/g, ''); // Remove spaces
  
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardholderName = document.getElementById('cardholderName').value;
    const amount = document.getElementById('amount').value;
  
    // Check if any of the required fields are empty
    if (
      sanitizedCardNumber.length < 15 || sanitizedCardNumber.length > 16 ||
      expiryDate.trim() === '' || cvv.trim() === '' ||
      cardholderName.trim() === '' || amount.trim() === ''
    ) {
      showNotification('Please fill in all required fields.', 'error');
    } else {
      const isValidCardNumber = isValidCard(sanitizedCardNumber);
  
      if (isValidCardNumber) {
        showNotification('Payment successful!', 'success');
      } else {
        showNotification('Invalid card number! Please enter a valid 15 or 16-digit card number.', 'error');
      }
    }
  });
  
  function isValidCard(cardNumber) {
    const cardNumberRegex = /^\d{15,16}$/;
    return cardNumberRegex.test(cardNumber);
  }  
  
  function showNotification(message, type) {
    const notification = document.getElementById('customNotification');
    const notificationMessage = document.getElementById('notificationMessage');
  
    notificationMessage.innerText = message;
  
    notification.classList.add('show');
    setTimeout(function() {
      notification.classList.remove('show');
    }, 3000);
  }
  
