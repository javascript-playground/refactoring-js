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
    var link = $(".tab-link").filter("[href='" + active + "']").parent();
    activateLink(link);
  }
  tabLinks.on("click", function(e) {
    e.preventDefault();
    activateTab($(this).attr("href"));
    activateLink($(this).parent());
  });
};
