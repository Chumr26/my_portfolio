const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const arrow = $(".arrow-div");
const narBar = $(".tabs");
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const itemActive = $('.tab-item.active');
const degreeBtns = $$(".degree-btn button");

const tabLine = $('.tabs .line');
tabLine.style.left = itemActive.offsetLeft + 'px';
tabLine.style.top = itemActive.offsetTop + itemActive.offsetHeight - 5 + 'px';
tabLine.style.width = itemActive.clientWidth + 'px';

// khi bấm mũi tên
arrow.onchange = function() {
    narBar.classList.toggle('hidden');
}

tabs.forEach((element, index) => {
    const pane = panes[index]
    element.onclick = function () {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
        // tabLine.style.left = this.offsetLeft + 'px'
        // tabLine.style.width = this.offsetWidth + 'px'
        tabLine.style.left = this.offsetLeft + 'px'
        tabLine.style.top = this.offsetTop + this.offsetHeight - 5 + 'px'
        tabLine.style.width = this.clientWidth + 'px'
    }
});

// xử lý khi nhấn nút show cerfiticate
degreeBtns.forEach((button) => {
    button.onclick = toggleImg;
})
function toggleImg() {
    this.parentElement.previousElementSibling.classList.toggle('degree-img-visible');
    this.parentElement.previousElementSibling.classList.add('img-show');
    //thay đổi text của button
    let content = this.children[0].innerHTML;
    this.children[0].innerHTML = content == 'View' ? 'Hide' : 'View';
}
