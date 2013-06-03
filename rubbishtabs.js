/*
 * general problems
 * 1. reusing selectors
 * 2. not very DRY
 * 3. click()
 * 4. return false
 * 5. tied to specific HTML
 */
var tabularize = function() {
  var active = location.hash;
  // need to be more careful with hash
  if(active) {
    $(".tabs").children("div").hide();
    $(active).show();
    $(".active").removeClass("active");
    $(".tab-link").each(function() {
      if($(this).attr("href") === active) {
        $(this).parent().addClass("active");
      }
    });
  }
  $(".tabs").find(".tab-link").click(function() {
    $(".tabs").children("div").hide();
    $($(this).attr("href")).show();
    $(".active").removeClass("active");
    $(this).parent().addClass("active");
    return false;
  });
};
