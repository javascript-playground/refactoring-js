var Tabularize = function(elem) {
  this.tabsWrapper = $(elem);
  this.tabs = this.tabsWrapper.children("div");
  this.tabLinks = this.tabsWrapper.find(".tab-link");
  this.checkHash();
  this.bind();
};

Tabularize.prototype = {
  bind: function() {
    var self = this;
    this.tabLinks.on("click", function(e) {
      e.preventDefault();
      self.transition($(this).attr("href"));
    });
  },
  checkHash: function() {
    var active = location.hash;
    if(active) {
      this.transition(active);
    }
  },
  transition: function(hash) {
    this._activateTab(hash);
    var link = $(".tab-link").filter("[href='" + hash + "']").parent();
    this._activateLink(link);
  },
  _activateLink: function(elem) {
    $(".active").removeClass("active");
    elem.addClass("active");
  },
  _activateTab: function(hash) {
    this.tabs.hide();
    $(hash).show();
  }
}
