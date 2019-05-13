import biodata from './config/biodata.js';

function biodataTemplate() {
    biodata.forEach((field) => {
        $('#biodata').append(
            `<div class="input-group no-border input-lg">
                <input type="`+field.type+`" class="form-control" placeholder="`+field.label+`" required>
            </div>`
        );
    })
}

$(document).ready(function(){
    biodataTemplate();
});