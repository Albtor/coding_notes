/*npm install lodash
Al instalar crea un campo nuevo en el package.json creado con dependencies
también un nuevo folder node_modules

npm uninstall lodash
*/

const _ = require('lodash');
let example = _.fill([1,2,3,4,5],"banana",1,4)
console.log(example);

