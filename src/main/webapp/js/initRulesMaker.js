var maincontainer = document.getElementById('mainContainer');
//maincontainer.style.width = "1015px";
maincontainer.style.height = "1015px";
$('#exercisePrompt').html($('#taskContainer').html());
$('#taskContainer').remove();
$("#ntSubmit").click(function() {
	submitInitialTask();
	
});
$("#moSubmit").click(function() {
	goToRules("initConf");
});
$("#icSubmit").click(function() {
	goToRules("");
});


function submitInitialTask(){
	var sub = {
    	 "name": $('#nameTip').val(),
    	 "idTask": $('#idTask').val(),
    	 "description": $('#desc').val()
        };
    $.ajax({
        type: 'POST',
        contentType : 'application/json; charset=utf-8',
        dataType : 'json',
        url: "rulesMaker/submitInitial",
        data: JSON.stringify(sub),
        success: function(data){
        	goToRules("initModel");
        },
        error : function(jqXHR, status, error) {
        	goToRules("initModel");
        },
    });
}