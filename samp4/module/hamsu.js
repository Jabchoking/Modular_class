import { get, getAll } from './get.js'
import {arr} from '../module/data.js'
const $clbut = get('.cl');
const $listbut = get('.sh');
export const butex = () => {

    $clbut.addEventListener('click', e => {
        cllist();
    })

    $listbut.addEventListener('click', e => {
        creList(arr)
    })
}
export const cllist = () => {
    const cll = getAll('li');
    cll.forEach(i => {
        i.remove()
    })
}
export const cr = (it) => {
    con += `<li>
    <img src="https://picsum.photos/75/75/?random" alt="으앙주금">
    <div class="textbox">
        <h3 class="usname">${it.name}</h3>
        <strong class="job">${it.job}</strong>
        <span class="tel">${it.tel}</span>
    </div>
    <div class="iconbox"><i class="xi-home-o"></i></div>
</li>`
}
export const creList = (ar) => {
    con = '';
    ar.map(i => {
        cr(i)
    })
    const $list = get('.boxbox');
    $list.innerHTML = con;
    onon();
    butex()
}
export const onon = () => {
    const $icons = getAll('.iconbox');
    $icons.forEach(icon => {
        icon.addEventListener('click', e => {
            e.currentTarget.classList.toggle('on');
        });
    });
};
export let con = '';