import disc from './config/disc.js';

export function getUserDiscLeast(userDiscLeast) {
    var data = {}
    userDiscLeast.forEach((field) => {
        data[field.name] = field.value;
    })
    return data;
}

export function discLeastTemplate(userDisc) {
    $("#card-form").empty();
    $("#card-form").append(`<form id="form-disc-least" class="form">
        <div class="card-header text-center">
            <h5>In every number, please choose the least fitted answer which describes yourself</h5>
        </div>
        <div id="disc-least" class="card-body" style="overflow:scroll; height:400px; text-align:left;">
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-success btn-round btn-lg btn-block" value="Submit" />
        </div>
    </form>`);

    disc.forEach((field) => {
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

export function saveDiscLeast(userDisc) {
    $("#form-disc-least").submit(function(e){
        var userDiscLeast = $("#form-disc-least").serializeArray();
        var discLeastData = getUserDiscLeast(userDiscLeast);
        var data = {};
        data["discLeast"] = discLeastData;
        data["id"] = userDisc["id"];
        $.ajax({
            url: '/discLeast',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data),
            success: function( data, textStatus, jQxhr ){
                alert("Your data has been saved. Thanks a lot for your participation.");
                location.reload();
            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert("Error");
            }
        });
        e.preventDefault();
    });
}