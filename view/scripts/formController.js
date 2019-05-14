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
    $.ajax({
        url: '',
        dataType: 'text',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            user: getUserBiodata(),
            disc: getUserDisc(),
            riasec: getUserRiasec()
        },
        success: function( data, textStatus, jQxhr ){
            alert("Sucessful");
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert("Error");
        }
    });
}

$(document).ready(function(){
    addBiodataTemplate();
});