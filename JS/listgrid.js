

function showList(e) {
    var $gridCont = $('.grid-container');
    var $bor= $('.bo');
    var $onlygrid= $('.onlygrid');
    var $onlylistcol1= $('.onlylistcol1');
    var $durationnonelist=$('.durationnonelist');
    var $butn_skill_seat_duration= $('.only_grid_butn_skill_seat_duration');
    var $only_list_butn_skill_seat_duration =$('.only_list_butn_skill_seat_duration');
    var $final_hr = $('.final_hr');
    e.preventDefault();
    $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
    $bor.hasClass('list-view') ? $bor.addClass('border-0') : $bor.removeClass('border-top');
    $onlylistcol1.hasClass('list-view') ? $onlylistcol1.addClass('d-flex') : $onlylistcol1.removeClass('d-none');
    $onlygrid.hasClass('list-view') ? $onlygrid.removeClass('.onlygrid'):$onlygrid.addClass('d-none');
    $durationnonelist.hasClass('list-view') ? $durationnonelist.removeClass('.durationnonelist') : $durationnonelist.addClass('d-none');
    $butn_skill_seat_duration.hasClass('list-view') ? $butn_skill_seat_duration.removeClass('d-none') : $butn_skill_seat_duration.addClass('d-none');
    $only_list_butn_skill_seat_duration.hasClass('list-view') ? $only_list_butn_skill_seat_duration.addClass('.only_list_butn_skill_seat_duration') : $only_list_butn_skill_seat_duration.removeClass('d-none');
    $final_hr.hasClass('list-view') ? $final_hr.removeClass('d-none') : $final_hr.addClass('d-none');
  }
  function gridList(e) {
    var $gridCont = $('.grid-container')
    var $bor= $('.bo');
    var $onlylistcol1= $('.onlylistcol1');
    var $onlygrid= $('.onlygrid');
    var $durationnonelist=$('.durationnonelist');
    var $butn_skill_seat_duration= $('.only_grid_butn_skill_seat_duration');
    var $only_list_butn_skill_seat_duration =$('.only_list_butn_skill_seat_duration');
    var $final_hr = $('.final_hr');
    // e.preventDefault();
    $gridCont.removeClass('list-view');
    $onlylistcol1.addClass('d-none');
    // $onlygrid.removeClass('d-none');
    $onlygrid.addClass('d-flex');
    $durationnonelist.removeClass('d-none');
    $durationnonelist.addClass('.durationnonelist');
    $bor.addClass('border-top');
    $butn_skill_seat_duration.removeClass('d-none');
    $butn_skill_seat_duration.addClass('.butn_skill_seat_duration');
    $only_list_butn_skill_seat_duration.addClass('d-none');
   $onlygrid.addClass('.onlygrid');
   $final_hr.removeClass('d-none')
  }
  
  $(document).on('click', '.btn-grid', gridList);
  $(document).on('click', '.btn-list', showList);
  

  var checkboxes = document.querySelectorAll(".checkbox");


let filtersSection = document.querySelector(".filters-section");

var listArray = [];

var filterList = document.querySelector(".filter-list");

var len = listArray.length;

for (var checkbox of checkboxes) {
    checkbox.addEventListener("click", function () {
        if (this.checked == true) {
            addElement(this, this.value);
        }
        else {

            removeElement(this.value);
            console.log("unchecked");
        }
    })
}


function addElement(current, value) {
    let filtersSection = document.querySelector(".filters-section");

    let createdTag = document.createElement('span');
    createdTag.classList.add('filter-list');
    createdTag.classList.add('ps-3');
    createdTag.classList.add('pe-1');
    createdTag.classList.add('me-2');
    createdTag.innerHTML = value;

    createdTag.setAttribute('id', value);
    let crossButton = document.createElement('button');
    crossButton.classList.add("filter-close-button");
    let cross = '&times;'



    crossButton.addEventListener('click', function () {
        let elementToBeRemoved = document.getElementById(value);

        console.log(elementToBeRemoved);
        console.log(current);
        elementToBeRemoved.remove();

        current.checked = false;




    })

    crossButton.innerHTML = cross;


    // let crossButton = '&times;'

    createdTag.appendChild(crossButton);
    filtersSection.appendChild(createdTag);

}

function removeElement(value) {

    let filtersSection = document.querySelector(".filters-section");

    let elementToBeRemoved = document.getElementById(value);
    filtersSection.removeChild(elementToBeRemoved);

}