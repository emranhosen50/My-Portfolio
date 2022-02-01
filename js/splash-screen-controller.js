jQuery(function($) {
    var roles = ['EMRAN HOSEN EMON', 'APPS DEVELOPERS', 'GRAPHIC DESIGNER', 'WEB DEVELOPER', 'COMPETITIVE PROGRAMMER', 'EXPERT IN EXCEL'];
    var counter = 0;
    var $role = $('#OwnerName')
    setInterval(function() {
        //display the role and increment the counter to point to next role
        $role.text(roles[counter++]);
        //if it is the last role in the array point back to the first item
        $role.animate({ opacity: '1.4' }, "slow");
        if (counter >= roles.length) {
            counter = 0;
        }
        $role.animate({ opacity: '0.4' }, "slow");

        //$role.animate(ball - roll)

    }, 2000)



})