import { addDiscLeastTemplate } from './formController.js';

export function getUserBiodata(userBiodata) {
    $.ajax({
        url: '/discData',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(
            {
                id: userBiodata.value
            }
        ),
        success: function( data, textStatus, jQxhr ){
            var userDisc = data.disc;
            userDisc["id"] = userBiodata.value;
            addDiscLeastTemplate(userDisc);
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert("User not exist");
        }
    });
}

export function biodataTemplate() {
    $("#card-form").empty();
    $("#card-form").append(`<form id="form-biodata" class="form">
        <div class="card-header text-center">
            <h1>Biodata</h1>
        </div>
        <div id="biodata" class="card-body" style="text-align:left;">
            <div class="input-group no-border input-lg">
                <input name="id" type="text" class="form-control" placeholder="id" required>
            </div><br/>
        </div>
        <div class="card-footer text-center">
            <input type="submit" class="btn btn-info btn-round btn-lg btn-block" value="Next" />
        </div>
    </form>`);
}

export function saveBiodata() {
    $("#form-biodata").submit(function(e){
        var userBiodata = $("#form-biodata").serializeArray();
        getUserBiodata(userBiodata[0]);
        e.preventDefault();
    });
}