import mbti from './config/mbti.js';
import { saveResult } from './formController.js';
var userMbti;

export function getUserMbti() {
    var data = {}
    userMbti.forEach((field) => {
        data[field.name] = field.value;
    })
    return data;
}

export function mbtiTemplate() {
    $("#card-form").empty();
    $("#card-form").append(`<form id="form-mbti" class="form">
        <div class="card-header text-center">
            <h5>In every statement, please choose the most fitted answer which describes yourself</h5>
        </div>
        <div id="mbti" class="card-body" style="overflow:scroll; height:400px; text-align:left;">
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-primary btn-round btn-lg btn-block" value="Submit" />
        </div>
    </form>`);

    mbti.forEach((field) => {
        var question = `<p>`+field.text+`</p>`;
        var question;
        field.options.forEach((option) => {
            question += `<div class="form-check form-check-radio">
                <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="`+field.name+`" value="`+option.value+`" required>
                    <span class="form-check-sign"></span>
                    `+option.text+`
                </label>
            </div>`
            }
        );
        question += '<br/><hr/><br/>';
        $('#mbti').append(question);
    })
}

export function saveMbti() {
    $("#form-mbti").submit(function(e){
        userMbti = $("#form-mbti").serializeArray();
        saveResult();
        e.preventDefault();
    });
}