var selectField = document.getElementById('selectField');
var selectText = document.getElementById('selectText');
var option = document.getElementsByClassName('option');
var list = document.getElementById('list');
var arrowIcon = document.getElementById('arrowIcon');

selectField.onclick = function () {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
}

for (options of option) {
    options.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');


    }
}

