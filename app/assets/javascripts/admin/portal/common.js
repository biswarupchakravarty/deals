$(function () {
  $('#lnkLogOut').click(function () {
    $.ajax({
      url: '/admins/sign_out',
      method: 'DELETE'
    }).then(function () {
      window.location.reload(true);
    });
  });
});