const arr = [
    {name : '김 씨' , job : '택시 기사' , tel : '000-1100-0011'},
    {name : '이 씨' , job : '버스 기사' , tel : '000-2200-2200'},
    {name : '최 씨' , job : '지하철 운전사' , tel : '010-3300-3030'},
    {name : '박 씨' , job : '비행기 운전사' , tel : '010-4004-0440'},
    {name : '그거' , job : '그뭐시기그거' , tel : '010-5555-5555'}
]
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