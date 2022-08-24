(() => {
    const phoneElement = document.querySelector(".js-input-phone");

    const im = new Inputmask("+7(999) 999-99-99");
    im.mask(phoneElement);

    const validation = new window.JustValidate('.js-form', {
        errorFieldCssClass: 'invalid',
        errorLabelCssClass: 'label-invalid',
        errorLabelStyle: { color: '#D11616' },
        focusInvalidField: true,
        lockForm: true,
    });

    validation
    .addField('.js-input-name', [
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя должно содержать хотя бы 3 буквы'
    },
    {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя не может содержать более 30 символов'
    },
    {
        rule: 'required',
        errorMessage: 'Как вас зовут?'
    }
    ])
    
    .addField('.js-input-phone', [
    {
        validator: () => {
        const phone = phoneElement.inputmask.unmaskedvalue();
        const result = Number(phone) && phone.length === 10;
        return result === 0 ? false : result;
        },
        errorMessage: 'Укажите ваш телефон',
    }
    ]);
})();