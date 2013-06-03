var tabularize = function() {

  var activateLink = function(elem) {
    $(".active").removeClass("active");
    elem.addClass("active");
  };

  var tabsWrapper = $(".tabs");
  var tabs = tabsWrapper.children("div");
  var tabLinks = tabsWrapper.find(".tab-link");

  var active = location.hash;
  if(active) {
    tabs.hide();
    $(active).show();
    $(".tab-link").each(function() {
      if($(this).attr("href") === active) {
        activateLink($(this).parent());
      }
    });
  }
  tabLinks.on("click", function(e) {
    e.preventDefault();
    tabs.hide();
    $($(this).attr("href")).show();
    activateLink($(this).parent());
  });
};
