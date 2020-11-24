// Add active class to the current button (highlight it)


$('.subMenu').hide();

$('.attendeePic').click(function(){
    console.log('ddddddddddddddd');
    $('.attendeePic').removeClass('picActive');    
    $(this).addClass('picActive');
})




function showData(id,dataObj) {
    console.log (dataObj.info);
    console.log (id);
    let html = "";
    switch (id) {
        case 'infoAgenda':      html = '<h1 class="header"> AGENDA </h1><p class="dataStyle">' + dataObj.info.agenda + '<p>'
                                break;
        case 'infoAttendees':  {
                                    attendees = "";
                                    dataObj.info.attendees.forEach(element => {
                                    attendees += '<p class="dataStyle">' + element + '<p>'    
                                    });
                                    html = '<h1 class="header"> ATTENDEES </h1><p class="dataStyle">' +attendees + '<p>'
                                }
                                break;
        case 'infoScheduled':   html = '<h1 class="header"> Scheduled To </h1><p class="dataStyle">' + dataObj.info.scheduledTo + '<p>'
                                break;
        case 'infoGoals'    :   {
                                    goals = "";
                                    dataObj.info.goals.forEach(element => {
                                        goals += '<p class="dataStyle">' + element + '<p>'    
                                    });
                                    html = '<h1 class="header"> GOALS </h1><p class="dataStyle">' +goals + '<p>'
                                }
                                break;
        case 'infoActionItems': {
                                    actions = "";
                                    dataObj.info.actionItems.forEach(element => {
                                        actions += '<p class="dataStyle">' + element + '<p>'    
                                    });
                                    html = '<h1 class="header"> ACTION ITEMS </h1><p class="dataStyle">' +actions + '<p>'
                                }
                                break;
    }
    console.log(html);
    $("#dataContainer").empty();
    $('#dataContainer').append(html);


}


function showSubMenu(id){
    console.log (id);
    switch (id) {
        case 'mmInfo'       : itemId = 'sm-info' 
                            break;
        case 'mmCompany'    : itemId = 'sm-company' 
                            break;
        case 'mmAttendees'  : itemId = 'sm-attendees'
                            break;
        case 'mmPrevious'  : itemId = 'sm-previous'
                            break;

    }
    
    console.log (itemId);
    $('.subMenu').hide();
    $('#'+itemId).show();
}

function updateAttendeesPicsBar(attendees) {
    html = '<div class="row justify-content-center">';
    var i=0;
    attendees.forEach(attendee =>{
        html += '<div class="imgContainer"> <img class="attendeePic img-thumbnail" src =" ' + attendee.picture +'" id="attendee'+ i + '" onclick="setActivePic(this.id)"> <p class="attendeeText"> ' + attendee.firstName + ' ' +attendee.lastName +  '</p></div>'
        i++;
    });
    html += "<div>"
    $("#dataContainer").append(html);
}

function setActivePic (id) {
    $('.attendeePic').removeClass('picActive');    
    $('#'+id).addClass('picActive');

}