import { createWidget, applyDecorators } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import DiscourseURL from 'discourse/lib/url';
import { ajax } from 'discourse/lib/ajax';
import { NotificationLevels } from "discourse/lib/notification-levels";
//import { userPath } from "discourse/lib/url";

const flatten = array => [].concat.apply([], array);

export default createWidget('sidebar-cat', {
  tagName: 'div.cat-panel',


   lookupCount(type) {
    const tts = this.register.lookup("topic-tracking-state:main");
    return tts ? tts.lookupCount(type) : 0;
  },

  showUserDirectory() {
    if (!this.siteSettings.enable_user_directory) return false;
    if (this.siteSettings.hide_user_profiles_from_public && !this.currentUser)
      return false;
    return true;
  },

  generalLinks() {
    const { siteSettings } = this;
    const links = [];

    const extraLinks = flatten(
      applyDecorators(this, "generalLinks", this.attrs, this.state)
    );
    return links.concat(extraLinks).map(l => this.attach("link", l));
},
 
  panelContents() {
    const { currentUser } = this;
    const results = [];

  
    results.push(
      this.attach("cat-panel", {
        name: "general-links",
        contents: () => this.generalLinks()
      })
    );


results.push(this.listCategories());

    return results;
  },
 

  listCategories() {

    var maxCategoriesToDisplay = 28;
 
    
    let categories = this.site.get("categoriesByCount");

    const moreCount = categories.length - maxCategoriesToDisplay;
    categories = categories.slice(0, maxCategoriesToDisplay);

    return this.attach("cat-categories", { categories, moreCount });
},




  html() {
    return this.attach('cat-panel', { contents: () => this.panelContents() });
  },

  clickOutside() {
    this.sendWidgetAction('toggleHamburger');
  }
});
