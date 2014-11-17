(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
  });

	var pages = document.querySelector('core-animated-pages'),
      coreMenu = document.querySelector('core-menu'),
      coreScaffold = document.querySelector('core-scaffold'),
      googleMap = document.querySelector('google-map');

  coreMenu.addEventListener('core-select', function(event) {
    event.detail.item.icon = event.detail.isSelected ?
      'radio-button-on' : 'radio-button-off';

    pages.selected = coreMenu.selected;
    coreScaffold.closeDrawer();
	});

  pages.addEventListener('core-animated-pages-transition-end', function() {
    //handles google map resize issue within core-animated pages
    //https://github.com/GoogleWebComponents/google-map/issues/33
    if(coreMenu.selected === 3){
      googleMap.resize();
    }
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
