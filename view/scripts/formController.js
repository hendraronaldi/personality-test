import { biodataTemplate, saveBiodata, getUserBiodata } from "./biodata.js";
import { discTemplate, saveDisc, getUserDisc } from "./disc.js";
import { discLeastTemplate, saveDiscLeast, getUserDiscLeast } from "./discLeast.js";
import { riasecTemplate, saveRiasec, getUserRiasec } from "./riasec.js";
import { mbtiTemplate, saveMbti, getUserMbti } from "./mbti.js";

export function addBiodataTemplate(){
    biodataTemplate();
    saveBiodata();
}

export function addDiscTemplate(){
    discTemplate();
    saveDisc();
}

export function addDiscLeastTemplate(){
    discLeastTemplate();
    saveDiscLeast();
}

export function addRiasecTemplate(){
    riasecTemplate();
    saveRiasec();
}

export function addMbtiTemplate(){
    mbtiTemplate();
    saveMbti();
}

export function saveResult() {
    var result = {
        user: getUserBiodata(),
        disc: getUserDisc(),
        discLeast: getUserDiscLeast(),
        riasec: getUserRiasec(),
        mbti: getUserMbti()
    }

    $.ajax({
        url: '/personality',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(result),
        success: function( data, textStatus, jQxhr ){
            alert("Your data has been saved. Thanks a lot for your participation.");
            location.reload();
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert("Error");
        }
    });
}

$(document).ready(function(){
    addBiodataTemplate();
    // addDiscTemplate();
    // addDiscLeastTemplate();
    // addRiasecTemplate();
    // addMbtiTemplate();
});