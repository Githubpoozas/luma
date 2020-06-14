define(["jquery"], function ($) {
  "use strict"

  $(document).ready(function ($) {
    console.log("custom.js loaded")
    $(".header.content").prepend(
      "<div id='burger-wrapper'><img src='http://localhost/magento/pub/static/version1592159869/frontend/Magento/luma/en_US/images/burger.svg' id='burger-icon' width='32' height='32'></div>"
    )

    $("#burger-wrapper").hover(
      function () {
        $(".sections.nav-sections").hide()
      },
      function () {
        $(".sections.nav-sections").show()
      }
    )
  })
  return
})
