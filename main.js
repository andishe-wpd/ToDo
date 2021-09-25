$(document).ready(function() {
$('input[type=checkbox]').change(function() {

if (this.checked) {
$(this).next(".label-text").css("text-decoration-line", "line-through");
} else {
$(this).next(".label-text").css("text-decoration-line", "none");
}

});
});

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
$('#datey').append(time);



$('#myform').on('submit',(e)=>{
    e.preventDefault()
    let usersTxt = $('#ourfeild').val();
    createItem(usersTxt)
})


function createItem(usersTxt){
    $('#todos').append(`<div class="d-flex align-items-center">
                <label
                  ><input type="checkbox" class="option-input radio" /><span
                    class="label-text"
                    >`+usersTxt+`</span
                  ></label
                >
              </div>`)
}
