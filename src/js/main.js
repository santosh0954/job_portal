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
    $this.nextAll(".help-desc").fadeToggle();
    $this.nextAll(".btn-wrapper").fadeToggle();

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
});
