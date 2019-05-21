import disc from './config/disc.js';
import { addDiscLeastTemplate } from './formController.js';
var userDisc;

export function getUserDisc() {
    var data = {}
    userDisc.forEach((field) => {
        data[field.name] = field.value;
    })
    return data;
}

export function discTemplate() {
    $("#card-form").empty();
    $("#card-form").append(`<form id="form-disc" class="form">
        <div class="card-header text-center">
            <h5>In every number, please choose the most fitted answer which describes yourself</h5>
        </div>
        <div id="disc" class="card-body" style="overflow:scroll; height:400px; text-align:left;">
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-info btn-round btn-lg btn-block" value="Next" />
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
        question += '<br/><hr/><br/>';
        $('#disc').append(question);
    })
}

export function saveDisc() {
    $("#form-disc").submit(function(e){
        userDisc = $("#form-disc").serializeArray();
        addDiscLeastTemplate();
        e.preventDefault();
    });
}