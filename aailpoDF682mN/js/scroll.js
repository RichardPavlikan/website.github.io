export function checkScroll(el, num = 0){
    let rect = el.getBoundingClientRect();
    if(window.innerHeight >= rect.top +( el.offsetHeight + num)) return true;
    return false;
}