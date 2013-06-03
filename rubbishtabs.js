var tabularize = function() {

  var activateLink = function(elem) {
    $(".active").removeClass("active");
    elem.addClass("active");
  };

  var activateTab = function(tabHash) {
    tabs.hide();
    $(tabHash).show();
  };

  var tabsWrapper = $(".tabs");
  var tabs = tabsWrapper.children("div");
  var tabLinks = tabsWrapper.find(".tab-link");

  var active = location.hash;
  if(active) {
    activateTab(active);
    $(".tab-link").each(function() {
      if($(this).attr("href") === active) {
        activateLink($(this).parent());
      }
    });
  }
  tabLinks.on("click", function(e) {
    e.preventDefault();
    activateTab($(this).attr("href"));
    activateLink($(this).parent());
  });
};
