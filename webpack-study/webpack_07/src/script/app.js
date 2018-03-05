import '../css/common.css';
import layer from '../components/layer/layer.js';
const App = function(){
  var dom = document.getElementById('app');
  var layer = new layer();
  dom.innerHtml=layer.tpl({
    name:'john',
    arr:['apple','xiaomi','huawei']
  });
};
new App();
