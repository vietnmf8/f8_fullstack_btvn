// Javascript không dành cho lập trình hướng đối tượng

import {Male} from "./male.js";


class BoyStudent extends Male {

}

const duc = new BoyStudent('duc', 22, 'quynh')

duc.setName('viet');
duc.setGirlFriend('duc')
console.log(duc.getName(), duc.getGirlFriend())




