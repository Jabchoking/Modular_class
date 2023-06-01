import {arr} from '../module/data.js'
import {cllist,cr,creList,onon,con} from '../module/hamsu.js'

const $clbut=document.querySelector('.cl');
const $listbut=document.querySelector('.sh');

$clbut.addEventListener('click',e=>{
    cllist();
})

$listbut.addEventListener('click',e=>{
    creList(arr)
})

creList(arr)
console.log(arr)