$(document).ready(function () {
    $("#login-form").validate({
      rules: {
        username: {
          required: true,
          minlength: 5,
        },
        password: {
          required: true,
          minlength: 6,
        },
      },
      messages: {//mess của label được trỏ tới name =""; của thẻ html
        username: {
          required: "Hãy điền tài khoản",//yêu cầu
          minlength: "Tài khoản ít nhất 5 kí tự",
        },
        password: {
          required: "Hãy điền mật khẩu", 
          minlength: "Mật khẩu ít nhất 6 ký tự",
        },
      },
    });
});

// Preloader by me
$(window).on('load', function() {
  if ($('.preloader').length) {
    $('.preloader').delay(1000).fadeOut('slow', function() {
      $(this).remove();
    });
  }
});
  