function processPayment(amount, creditCardNumber) {
    if (amount <= 0) {
        return 'Invalid amount';
    }
    if (!creditCardNumber) {
        return 'Credit card number is required';
    }
    // Dummy payment processing logic
    return 'Payment processed';
}
