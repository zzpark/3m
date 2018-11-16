$(function () {
  $(".password-rule-btn").click(function () {
    $(this).toggleClass("password-rule-btn-hover")
    $(".password-rule").toggle()
    //$(".password-rule").toggleClass("password-rule-display")
  })
  $(".password-rule-close").click(function () {
    $(".password-rule-btn").toggleClass("password-rule-btn-hover")
    $(".password-rule").toggle()
    //$(".password-rule").toggleClass("password-rule-display")
  })
});