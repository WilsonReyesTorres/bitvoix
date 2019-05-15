



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }







function montrer(elem){
	document.getElementById(elem).style.display='block';
}

function cacher(elem){
	document.getElementById(elem).style.display='none';
}

function lister(){
	document.getElementById('formLister').submit();
}

function montrerBig(laPochette){
	document.getElementById('big').src=laPochette;
	document.getElementById('divBig').style.display='block';
}

function cacherBig(){
	document.getElementById('divBig').style.display='none';
}

function valider(){
	
	var titre=document.getElementById('titre').value;
	var res=document.getElementById('res').value;
	if(titre!="" && res!=""){
		return true;
	}else{
		alert("Verifiez vos donnees");
		return false;
	}

}

/*
// Actions on modal show and hidden events
$(function(){
    $('#modalUserAddEdit').on('show.bs.modal', function(e){
        var type = $(e.relatedTarget).attr('data-type');
        var userFunc = "userAction('add');";
        if(type == 'edit'){
            userFunc = "userAction('edit');";
            var rowId = $(e.relatedTarget).attr('rowID');
            editUser(rowId);
        }
        $('#userSubmit').attr("onclick", userFunc);
    });
    
    $('#modalUserAddEdit').on('hidden.bs.modal', function(){
        $('#userSubmit').attr("onclick", "");
        $(this).find('form')[0].reset();
        $(this).find('.statusMsg').html('');
    });
});*/