$(function () {
  $(".toggle-btn").on("click", function () {
    const $this = $(this);
    const key = $this
      .find(".title")
      .text()
      .replace(/\n/g, "")
      .trim()
      .toLowerCase();

    $this.toggleClass("open");
    $this.next(".content").slideToggle(500);
    $this.nextAll(".help-desc").slideToggle();
    $this.nextAll(".btn-wrapper").slideToggle();

    sessionStorage.setItem(key, $this.hasClass("open"));
  });

  $(".toggle-btn").each(function () {
    const $this = $(this);
    const key = $this
      .find(".title")
      .text()
      .replace(/\n/g, "")
      .trim()
      .toLowerCase();
    $this.attr(
      "title",
      `Click to show/hide ${$this
        .find(".title")
        .text()
        .replace(/\n/g, "")
        .trim()}`
    );
    // if null set to false
    sessionStorage.getItem(key) === null && sessionStorage.setItem(key, "true");
    const isOpen = sessionStorage.getItem(key) === "true";
    if (isOpen) {
      $this.addClass("open");
      $this.next(".content").show(); // Use show() to prevent animation on load
      $this.nextAll(".help-desc").hide();
      $this.nextAll(".btn-wrapper").show();
    } else {
      $this.removeClass("open");
      $this.next(".content").hide();
      $this.nextAll(".help-desc").show();
      $this.nextAll(".btn-wrapper").hide();
    }
  });
  // toggle menu
  $(".menu-toggle-btn").on("click", function () {
    $(".navbar-nav").slideToggle();
  });

  // adding field on click
  $(".add-field").on("click", function () {
    let count = $(this).parent().find(">div").length;
    $(this).parent().find(">div").addClass("relative");
    let html = $(this).parent().find(">div").first().clone();
    $(html).append(
      `<button class="btn text-xs p-1 aspect-square flex items-center content-center border-red-300 bg-red-200 text-red-600 hover:border-red-600 opacity-70 hover:opacity-100 shadow-none hover:text-white hover:bg-red-600 absolute top-0 right-0" title="Remove field"> <i class="fa fa-close"></i> </button>`
    );
    $(html)
      .find(".btn")
      .on("click", function () {
        $(this).parent().remove();
      });
    $(html)
      .find("label")
      .each(function () {
        $(this)
          .attr("for", $(this).attr("for") + (count + 1))
          .append(` ${count + 1} `);
      });
    $(html)
      .find("input, textarea")
      .each(function () {
        $(this).attr("id", $(this).attr("id") + (count + 1));
      });
    $(this).parent().find(">div").last().after(html);
  });
  // category on change to visible admit, result publish
  $("#category").on("change", function () {
    let selected = $(this).val();
    if (selected === "1") {
      $(".publish-sec").slideDown();
    } else {
      $(".publish-sec").slideUp();
    }
  });
});
