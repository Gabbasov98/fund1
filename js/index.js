$(document).ready(function(){
  let containerMargin = parseFloat($(".container").css("margin-left"));
  console.log(containerMargin);

  let containerWidth =parseFloat($(".container").css("width"));
  console.log(containerWidth);

  // $("body").css("widt")

  let containerPaddingLeft =parseFloat($(".container").css("padding-left"));
  let containerPaddingRight =parseFloat($(".container").css("padding-right"));
  console.log(containerPaddingLeft);
  console.log(containerPaddingRight);

  let width = containerWidth - containerPaddingLeft - containerPaddingRight
  console.log(width);
  // $(".current1__progress-table")css("width",width);
  // $(".current1__progress-table th:nth-child(2) > span").css("width",width*0.1  );
  // $(".current1__progress-table th:nth-child(4) > span").css("width",width*0.2 + "px" );
  // $(".current1__progress-table th:nth-child(6) > span").css("width",width*0.25 +"px");
  // $(".current1__progress-table th:nth-child(8) > span").css("width",width*0.3+ "px");
  // $(".current1__progress-table th:nth-child(10) > span").css("width",width*0.15 +"px");

  $(".fixed-menu").css("left",containerMargin+20);
  $("#menu2").click(function(){
    $(".fixed-menu__item-hiden").addClass("click");

    setTimeout((function(){
      $(".fixed-menu__item-hiden").removeClass("click");
    }),2000);
  });

  $(".current__top-nav-btn").click(function () {
    // $(this).css("display","none");
    $(".current__top-nav-btn-hiden").css("display","block");
  });

  $(".current__top-nav-btn-hidden").click(function () {
    // $(".current__top-nav-btn").css("display","block");
    $(".current__top-nav-btn-hiden").css("display","none");
  });
  $(".current__top-nav-btn-hiden").click(function () {
    // $(".current__top-nav-btn").css("display","block");
    $(".current__top-nav-btn-hiden").css("display","none");
  });

  $(".key-point__table-row  td").click(function(){
    $(".table__modal-bg").css("display","block");
    $(this).css("position","relative");
    let tableModal = $(this).children('.table__modal');
    tableModal.css("display","flex");
    $(".table__modal-bg").css("display","block");
    $(".table__modal-bg").click(function(){
      tableModal.css("display","none");
      $(".table__modal-bg").css("display","none");
    })
  })

  $(".table__top-btn.grey").click(function(){
    $(".table__top-btn").toggleClass("grey");
    $(".table__top-btn").toggleClass("green");

  })



});
