(function() {
    emailjs.init("VkhMsSSDHQSvo2Dnu"); // Public Key

    document.addEventListener('DOMContentLoaded', function() {
        
        const form = document.getElementById('contactForm');
        
        if (!form) {
            console.error("Форма не знайдена! Перевір id='contactForm'");
            return;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = form.querySelector('.contact_submit');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Відправляємо...';
            submitBtn.disabled = true;

            const templateParams = {
                from_name:    document.getElementById('contact-name').value,
                from_email:   document.getElementById('contact-email').value,
                phone:        document.getElementById('contact-phone').value,
                message:      document.getElementById('contact-message').value,
                time:         new Date().toLocaleString('uk-UA')
            };

            emailjs.send('service_shqq3s5', 'template_o6zl8b4', templateParams)
                .then(function(response) {
                    console.log('Успіх!', response);
                    alert('✅ Дякуємо! Повідомлення успішно відправлено.\nМи скоро з вами зв\'яжемося!');
                    form.reset();
                })
                .catch(function(error) {
                    console.error('Помилка:', error);
                    alert('❌ Не вдалося відправити. Спробуйте пізніше.');
                })
                .finally(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    });
})();