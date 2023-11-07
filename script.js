// Initialize Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// Handle form submission
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', () => {
    // Validate and submit the current form based on the active slide
    const activeForm = document.querySelector('.swiper-slide-active');
    if (activeForm) {
        if (validateForm(activeForm)) {
            activeForm.submit();
        }
    }
});

// Validate the form using Validate.js
function validateForm(form) {
    if (form.id === 'payment-info-form') {
        // Validate credit card number and CVV
        const constraints = {
            'credit-card-number': {
                presence: true,
                format: {
                    pattern: /^\d{10}$/,
                    message: 'must be a 10-digit number',
                },
            },
            cvv: {
                presence: true,
                format: {
                    pattern: /^\d{3}$/,
                    message: 'must be a 3-digit number',
                },
            },
        };

        const formData = {};
        form.querySelectorAll('input').forEach((input) => {
            formData[input.name] = input.value;
        });

        const result = validate(formData, constraints);

        if (result) {
            alert(result[Object.keys(result)[0]][0]);
            return false;
        }
    }
    return true;
}
