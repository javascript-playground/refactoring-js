var tabularize = function() {

  var activateLink = function(elem) {
    $(".active").removeClass("active");
    elem.addClass("active");
  };

  var activateTab = function(tabHash) {
    tabs.hide();
    $(tabHash).show();
  };

  var transition = function(hash) {
    activateTab(hash);
    var link = $(".tab-link").filter("[href='" + hash + "']").parent();
    activateLink(link);
  };

  var tabsWrapper = $(".tabs");
  var tabs = tabsWrapper.children("div");
  var tabLinks = tabsWrapper.find(".tab-link");

  var active = location.hash;
  if(active) {
    transition(active);
  }
  tabLinks.on("click", function(e) {
    e.preventDefault();
    transition($(this).attr("href"));
  });
};
