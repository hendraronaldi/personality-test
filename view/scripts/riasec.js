import riasec from './config/riasec.js';
import { addMbtiTemplate } from './formController.js';

var userRiasec;

export function getUserRiasec() {
    var data = {}
    userRiasec.forEach((field) => {
        data[field.name] = field.value;
    })
    return data;
}

export function riasecTemplate() {
    $("#card-form").empty();
    $("#card-form").append(`<form id="form-riasec" class="form">
        <div class="card-header text-center">
        <h5>Please choose the options which are fitted to describe yourself</h5>
        </div>
        <div id="riasec" class="card-body" style="overflow:scroll; height:400px; text-align:left;">
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-primary btn-round btn-lg btn-block" value="Next" />
        </div>
    </form>`);

    riasec.forEach((field, index) => {
        $('#riasec').append(`<div class="form-check">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="`+index+1+`" value="`+field.value+`">
                `+field.text+`
                <span class="form-check-sign">
                    <span class="check"></span>
                </span>
            </label>
        </div>`);
    })
}

export function saveRiasec() {
    $("#form-riasec").submit(function(e){
        userRiasec = $("#form-riasec").serializeArray();
        addMbtiTemplate();
        e.preventDefault();
    });
}