import biodata from './config/biodata.js';

var userBiodata;

function biodataTemplate() {
    $("#card-form").append(`<form id="form-biodata" class="form">
        <div class="card-header text-center">
            <h1>Biodata</h1>
        </div>
        <div id="biodata" class="card-body">
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-primary btn-round btn-lg btn-block" value="Submit" />
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

function saveBiodata() {
    $("#form-biodata").submit(function(e){
        userBiodata = $("#form-biodata").serializeArray();

        
        e.preventDefault();
    });
}

$(document).ready(function(){
    // biodataTemplate();
    // saveBiodata();
});