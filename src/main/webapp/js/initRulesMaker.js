var maincontainer = document.getElementById('mainContainer');
maincontainer.style.width = "1015px";
maincontainer.style.height = "1015px";
$('#exercisePrompt').html($('#taskContainer').html());
$('#taskContainer').remove();
$("#form1").alpaca({
    "schema": {
        "title": "What do you think of Rules Maker?",
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "title": "Name"
            },
            "ranking": {
                "type": "string",
                "title": "Ranking",
                "enum": ['excellent', 'not too shabby', 'Rules Maker built my hotrod']
            }
        }
    }
});