import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('sidebar-right', {
  buildKey: (attrs) => 'sidebar-r',
 
 html(attrs, state) {
  let contents = []
  
  
  contents.push( new RawHtml({ html: `<div>test2</div>`}));    

return contents;
}});
