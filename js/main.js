
//----------------------contacts---------//
(() => {
    const selector = document.querySelector("input[type='tel']");
    im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);
    new JustValidate('.form',{
        rules:{
            name:{
                required: true,
                minLength: 2,
                maxLength: 30
            },
            tel:{
                required:true,
                function:(name,value)=>{
                    const tel = selector.Inputmask.unmaskedvalue()
                    return Number(tel) &&tel.length ===10
                }
            },
        },
        messages:{
            name:'Как вас зовут?',
            tel:'Укажите ваш телефон'
        }
    });
})();


