var tabularize = function() {

  var tabsWrapper = $(".tabs");
  var tabs = tabsWrapper.children("div");
  var tabLinks = tabsWrapper.find(".tab-link");

  var activateLink = function(elem) {
    tabsWrapper.find(".active").removeClass("active");
    elem.addClass("active");
  };

  var activateTab = function(tabHash) {
    tabs.hide();
    $(tabHash).show();
  };

  var transition = function(hash) {
    activateTab(hash);
    activateLink(tabLinks.filter(function() {
      return $(this).attr("href") === hash;
    }).closest("li"));
  };

  var active = location.hash;
  if(active) {
    transition(active);
  }
  tabLinks.on("click", function(e) {
    e.preventDefault();
    transition($(this).attr("href"));
  });
};
