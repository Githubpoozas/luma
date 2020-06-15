define(["jquery"], function ($) {
  "use strict"

  $(document).ready(function ($) {
    $(".header.content").prepend(
      "<div id='burger-wrapper'><img src='" +
        document.location.origin +
        "/magento/pub/static/version1592159869/frontend/Magento/luma/en_US/images/burger.svg' id='burger-icon' width='32' height='32'></div>"
    )
    $(".block.block-search").remove()
    $(".header.content").append(
      "<div id='search-wrapper'><a href='#'><span id='search-text'>search</span> <span id='search-line'></span></a></div>"
    )

    $(".panel.header .header.links .authorization-link").after(
      "<li class='help-wrapper'><a href='#'>help</a></li>"
    )
    //  $(".minicart-wrapper .showcart").prepend(
    //     "<img id='cart-logo' src='" +
    //       document.location.href +
    //       "pub/static/version1592159869/frontend/Magento/luma/en_US/images/briefcase.svg'height='32' width='32' />"
    //   )
    $(".minicart-wrapper").appendTo($(".panel.header"))

    $(".sidebar-nav-wrapper a").on("click", function (e) {
      if ($(this).next("ul").length) {
        e.preventDefault()
        if ($(this).parent().hasClass("selected")) {
          $(this).parent().removeClass("selected")
        } else {
          $(this).parent().addClass("selected")
          $(this).parent().siblings().removeClass("selected")
        }
      }
    })

    $("#burger-wrapper").hover(
      function () {
        $(".sidebar-nav").addClass("show")
      },
      function () {
        $(".sidebar-nav").removeClass("show")
      }
    )
    $(".sidebar-nav").hover(
      function () {
        $(this).addClass("show")
      },
      function () {
        $(this).removeClass("show")
      }
    )
    console.log("custom jquery loaded")
  })
  return
})
