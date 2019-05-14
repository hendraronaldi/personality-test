import biodata from './config/biodata.js';
import { addDiscTemplate } from './formController.js';

var userBiodata;

export function getUserBiodata() {
    return userBiodata;
}

export function biodataTemplate() {
    $("#card-form").empty();
    $("#card-form").append(`<form id="form-biodata" class="form">
        <div class="card-header text-center">
            <h1>Biodata</h1>
        </div>
        <div id="biodata" class="card-body">
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-primary btn-round btn-lg btn-block" value="Next" />
        </div>
    </form>`);

    biodata.forEach((field) => {
        $('#biodata').append(
            `<div class="input-group no-border input-lg">
                <input name="`+field.name+`" type="`+field.type+`" class="form-control" placeholder="`+field.label+`" required>
            </div>`
        );
    })
}

export function saveBiodata() {
    $("#form-biodata").submit(function(e){
        userBiodata = $("#form-biodata").serializeArray();
        addDiscTemplate();
        e.preventDefault();
    });
}