import { biodataTemplate, saveBiodata, getUserBiodata } from "./biodata.js";
import { discTemplate, saveDisc, getUserDisc } from "./disc.js";
import { riasecTemplate, saveRiasec, getUserRiasec } from "./riasec.js";

export function addBiodataTemplate(){
    biodataTemplate();
    saveBiodata();
}

export function addDiscTemplate(){
    discTemplate();
    saveDisc();
}

export function addRiasecTemplate(){
    riasecTemplate();
    saveRiasec();
}

export function saveResult() {
    var result = {
        user: getUserBiodata()
        // 'disc': getUserDisc(),
        // 'riasec': getUserRiasec()
    }

    $.ajax({
        url: '/personality',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(result),
        success: function( data, textStatus, jQxhr ){
            alert(textStatus);
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert("Error");
        }
    });
}

$(document).ready(function(){
    addBiodataTemplate();
});