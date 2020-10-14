$(document).ready(function(){

////////////////// Модальные окна

  $('*').on('show.bs.modal', function (e) {
    $('*').not(this).modal('hide');
  })

////////////////// Клик по телефону на мобильном
  
  $('.btn-tel').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header .btn--recall').toggleClass('d-none');
    $('.header .link-tel').toggleClass('d-none');
  });

////////////////// Корзина
  //////////////// поле ввода количества товара https://jqueryui.com/spinner/

  $('.cart-spinner').spinner({
    min: 1,
    max: 10,
  });

  //////////////// удалить товар из корзины

  // $('.cart-product-remove').click(function(e) {
  //   e.preventDefault();
  //   $(this).parents('.cart-table-item').remove();
  // });

//////////////// маска поля для телефона

  // $("input[type=tel]").mask("8 (999) 999-9999");


});