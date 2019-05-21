import disc from './config/disc.js';
import { addRiasecTemplate, saveResult } from './formController.js';
import { getUserDisc } from './disc.js';
var userDiscLeast;

export function getUserDiscLeast() {
    var data = {}
    userDiscLeast.forEach((field) => {
        data[field.name] = field.value;
    })
    return data;
}

export function discLeastTemplate() {
    $("#card-form").empty();
    $("#card-form").append(`<form id="form-disc-least" class="form">
        <div class="card-header text-center">
            <h5>In every number, please choose the least fitted answer which describes yourself</h5>
        </div>
        <div id="disc-least" class="card-body" style="overflow:scroll; height:400px; text-align:left;">
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-info btn-round btn-lg btn-block" value="Next" />
        </div>
    </form>`);

    disc.forEach((field) => {
        var userDisc = getUserDisc();
        var question = `<p>`+field.name+`</p>`;
        var question;
        field.options.forEach((option) => {
            var disabled = option.value == userDisc[field.name] ? 'disabled' : '';
            var background = option.value == userDisc[field.name] ? 'style="background-color:green;"' : '';
            question += `<div class="form-check form-check-radio" `+background+`>
                <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="`+field.name+`" id="`+option.name+`" value="`+option.value+`" `+disabled+` required>
                    <span class="form-check-sign"></span>
                    `+option.name+`
                </label>
            </div>`
            }
        );
        question += '<br/><hr/><br/>';
        $('#disc-least').append(question);
    })
}

export function saveDiscLeast() {
    $("#form-disc-least").submit(function(e){
        userDiscLeast = $("#form-disc-least").serializeArray();
        addRiasecTemplate();
        e.preventDefault();
    });
}