$(document).ready(function(){
    $("#sigup-form").validate({// gọi hàm
        rules: {
            email: {
                required: true,
                email: true,
            },
            username: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 6,
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#password",
            },
            agree: "required",
        },
        messages: {
            email: {
                required: "Hãy điền email",
                email: "Email không hợp lệ",
            },
            username: {
                required: "Hãy điền tài khoản",//yêu cầu
                minlength: "Tài khoản ít nhất 5 kí tự",
            },
            password: {
                required: "Hãy điền mật khẩu", 
                minlength: "Mật khẩu ít nhất 6 ký tự",
            },
            confirm_password: {
                required: "Hãy điền mật khẩu", 
                minlength: "Mật khẩu ít nhất 6 ký tự",
                equalTo: "Hãy nhập cùng 1 mật khẩu",
            },
            agree: "Bạn phải đồng ý!!!",
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