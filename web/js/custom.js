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

    if ($("body").hasClass("page-with-filter")) {
      $(".page-header").append(
        "<div class='column-filter-wrapper'><div class='column-options'><p class='column-label'>VIEW</p><a class='column-button selected' id='column-two'>2</a><a class='column-button' id='column-four'>4</a><p class='separator'>|</p></div><div class='filter-control-panel'><a class='filter-control-label' id='filter-control-label'>filter</a><p class='filter-count'></p></div><div class='clear-wrapper'><a id='clear-button'>clear</a></div></div>"
      )
    }
    $("#column-two").on("click", function () {
      $(this).addClass("selected")
      $("#column-four").removeClass("selected")
      $(".grid .product-items").removeClass("four-column")
    })
    $("#column-four").on("click", function () {
      $(this).addClass("selected")
      $("#column-two").removeClass("selected")
      $(".grid .product-items").addClass("four-column")
    })

    $("#clear-button").on("click", function () {
      // $(".block-actions.filter-actions a").trigger("click")
      $(location).attr("href", $(location).attr("href").split("?")[0])
      // console.log($(location).attr("href").split("?")[0])
    })

    var filterCount = $(".mana-selected.item").length
    if (filterCount > 0) {
      // $(".filter-count").text("(" + filterCount + ")")
      $(".filter-control-label").append("<span class='filter-count'>("+filterCount+")</span>")
      $(".clear-wrapper").addClass("selected")

    }

    // $(".mana-selected.item").length.change(function () {
    //   console.log($(".mana-selected.item").length)
    // })

    $("#filter-control-label").on("click", function () {
      $(this).parent().toggleClass("selected")
      $(".sidebar.sidebar-main").toggleClass("show")
      $(".clear-wrapper").toggleClass("show")
    })

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
