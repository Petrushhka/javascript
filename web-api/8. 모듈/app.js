
// export한 데이터를 별칭을 붙여서 사용하는 것이 가능합니다.(as xxxxx); 
// Default가 되지 않은 export는 이름을 바꿀 수 없음.
//default가 아닌 export 데이터를 import할 때는 중괄호를 사용하여 import를 해아 합니다.
import {$btn} from './getDOM.js'
import clickFunc from './event.js' // default로 export된 데이터들은 변수명을 바꿔서 import받아도 된다.

//default로 export된 데이터 -> 객체형태
// 일단 변수로 imiport를 하고, 디스트럭쳐링을 통해 각각의 변수로 분해가능.
import calFun from  './operate.js';

const {pow, add} = calFun;
$btn.addEventListener('click', clickFunc);