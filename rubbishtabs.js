var tabularize = function() {
  var tabsWrapper = $(".tabs");
  var tabs = tabsWrapper.children("div");
  var tabLinks = tabsWrapper.find(".tab-link");

  var active = location.hash;
  // need to be more careful with hash
  if(active) {
    tabs.hide();
    $(active).show();
    $(".active").removeClass("active");
    $(".tab-link").each(function() {
      if($(this).attr("href") === active) {
        $(this).parent().addClass("active");
      }
    });
  }
  tabLinks.click(function() {
    tabs.hide();
    $($(this).attr("href")).show();
    $(".active").removeClass("active");
    $(this).parent().addClass("active");
    return false;
  });
};
