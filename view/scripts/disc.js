import disc from './config/disc.js';

var userDisc;

function discTemplate() {
    $("#card-form").append(`<form id="form-disc" class="form">
        <div class="card-header text-center">
            <h1>DISC Personality Test</h1>
        </div>
        <div id="disc" class="card-body" style="overflow:scroll; height:400px;">
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-primary btn-round btn-lg btn-block" value="Submit" />
        </div>
    </form>`);

    disc.forEach((field) => {
        var question = `<p>`+field.name+`</p>`;
        var question;
        field.options.forEach((option) => {
            question += `<div class="form-check form-check-radio">
                <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="`+field.name+`" id="`+option.name+`" value="`+option.value+`" required>
                    <span class="form-check-sign"></span>
                    `+option.name+`
                </label>
            </div>`
            }
        );
        question += '<br/><br/>';
        $('#disc').append(question);
    })
}

function saveDisc() {
    $("#form-disc").submit(function(e){
        userDisc = $("#form-disc").serializeArray();
        
        e.preventDefault();
    });
}

$(document).ready(function(){
    discTemplate();
    saveDisc();
});