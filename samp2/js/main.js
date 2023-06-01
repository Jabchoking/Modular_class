import {arr} from '../module/data.js'
const $list=document.querySelector('.boxbox');
const $clbut=document.querySelector('.cl');
const $listbut=document.querySelector('.sh');
const cllist=()=>{
    const  cll=document.querySelectorAll('li');
    cll.forEach(i=>{
        i.remove()
    })
}
$clbut.addEventListener('click',e=>{
    cllist();
})
let con='';
const cr=(it)=>{
    con+=`<li>
    <img src="https://picsum.photos/75/75/?random" alt="으앙주금">
    <div class="textbox">
        <h3 class="usname">${it.name}</h3>
        <strong class="job">${it.job}</strong>
        <span class="tel">${it.tel}</span>
    </div>
    <div class="iconbox"><i class="xi-home-o"></i></div>
</li>`
}
const creList =(ar)=>{
    con='';
    ar.map(i=>{
        cr(i)
    })
    $list.innerHTML=con;
    onon();
}
const onon = () => {
    const $icons = document.querySelectorAll('.iconbox');
    $icons.forEach(icon => {
        icon.addEventListener('click', e => {
            e.currentTarget.classList.toggle('on');
        });
    });
};
$listbut.addEventListener('click',e=>{
    creList(arr)
})

creList(arr)
console.log(arr)