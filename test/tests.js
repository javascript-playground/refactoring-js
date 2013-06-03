module("navigating tabs", {
  setup: function() {
    location.hash = "";
    tabularize();
  }
});

test("tab1 active by default", function() {
  ok($("#tab1").is(":visible"), "By default tab 1 is shown");
});

test("clicking the links", function() {
  $(".tab-link").eq(1).trigger("click");
  ok($("#tab1").is(":hidden"), "The first tab gets hidden");
  ok($("#tab2").is(":visible"), "The second tab is shown");
  ok($(".tab-link").eq(1).parent().hasClass("active"), "The link has the active class");
});

module("hash detection", {
  setup: function() {
    location.hash = "#tab2"
    tabularize();
  }
});

test("it detects the hash", function() {
  ok($("#tab1").is(":hidden"), "The first tab gets hidden");
  ok($("#tab2").is(":visible"), "The second tab is shown");
  ok($(".tab-link").eq(1).parent().hasClass("active"), "The link has the active class");
});
