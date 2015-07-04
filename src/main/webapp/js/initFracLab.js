				var maincontainer = document.getElementById('mainContainer');
				maincontainer.style.width = "815px";
				maincontainer.style.height = "615px";
				var idTask;
				var lowMessage="";
				var isEnabledLightBulb=true;
				$("#help").show();
				helpButtonEnable(false);
				var config = {
					width: 800,
					height: 600,
					params: { enableDebugging:"0" }

				};
				config.params["disableContextMenu"] = true;
				var u = new UnityObject2(config);

				jQuery(function() {

					var $missingScreen = jQuery("#unityPlayer").find(".missing");
					var $brokenScreen = jQuery("#unityPlayer").find(".broken");
					$missingScreen.hide();
					$brokenScreen.hide();

	                if ($('#idTask')){
	                	idTask=$('#idTask').html();
	                	$('#idTask').remove();
	                }
	                $('#exercisePrompt').html($('#taskContainer').html());
	                $('#taskContainer').remove();

					u.observeProgress(function (progress) {
						switch(progress.pluginStatus) {
							case "broken":
								$brokenScreen.find("a").click(function (e) {
									e.stopPropagation();
									e.preventDefault();
									u.installPlugin();
									return false;
								});
								$brokenScreen.show();
							break;
							case "missing":
								$missingScreen.find("a").click(function (e) {
									e.stopPropagation();
									e.preventDefault();
									u.installPlugin();
									return false;
								});
								$missingScreen.show();
							break;
							case "installed":
								$missingScreen.remove();
							break;
							case "first":
							break;
						}
					});
					if (idTask!=null && idTask.length>0){
						u.initPlugin(jQuery("#unityPlayer")[0], "/rulesmaker/assets/FractionsLab.unity3d?showStartPage=false&language="+nLocale+"&username="+userName+"&tip=/italk2learn/tip/"+idTask+".tip"+"&idtask="+idTask+userName);
						sendLanguageEvent();
					}
				});
				
				
				function Flstarted() {
					if (chTIS==true){
						sendEventEnabledTIStoTDS(true);
					} else {
						sendEventEnabledTIStoTDS(false);
					}
				}
				
				function getFLTaskID() {
					$.ajax({
						type: 'GET',
						url: "sequence/getFLTask",
						success: function (data) {
							u.initPlugin(jQuery("#unityPlayer")[0], "/italk2learn/sequence/FractionsLab.unity3d?showStartPage=false&language="+nLocale()+"&idtask="+data);
						},
						error: function (jqXHR, status, error) {
						}
					});
				}

				function initFractionsLab(data)
				{
				}
				
				
				function saveEvent(event){
				}
				
				function sendMessageToTIS(feedbackText, currentFeedbackType, feedbackID, level, followed, viewed){
					
				}
				
				function sendDoneButtonPressedToTIS(value){
				}
				
				function sendRepresentationTypeToSNA(value) {
					
				}
				
				function sendFeedbackTypeToSNA(feedbackType){
					
				}
				
				function sendMessageToLightBulb(message){
					helpButtonEnable(true);
					lowMessage=message;
				}
				
				
				function SendHighMessage(message)
				{
					var json = "{\"method\": \"HighFeedback\", \"parameters\": {\"message\": \"" + message +"\"}}";
					u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);
				}
				
				function SendLowMessage(message)
				{
					var json = "{\"method\": \"LowFeedback\", \"parameters\": {\"message\": \"" + message +"\"}}";
					u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);
				}

				function EnableHelpButton(message)
				{
					if (message.charAt(0)==='x'){
						helpButtonEnable(false);						
					}
					else {
						helpButtonEnable(true);
						lowMessage=message;
					}
				}
				
				function SendMessageToSupport(message)
				{
					var json = "{\"method\": \"SendMessageToSupport\", \"parameters\": {\"message\": \"" + message +"\"}}";
					u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);
				}
				
				function helpButtonEnable(value){
					if (value==true || value=="true" || value=="True"){
						$("#help").removeClass("it2lHelpbuttonOFF");
						$("#help").addClass("it2lHelpbuttonON");
						isEnabledLightBulb=true;
					}
					else {
						$("#help").removeClass("it2lHelpbuttonON");
						$("#help").addClass("it2lHelpbuttonOFF");
						isEnabledLightBulb=false;
					}
				}
				
				function arrowButtonEnable(value){
				}
				
				
				function SetNewStudentInfo(data)
				{
				}
				
				function isHelpButtonEnable(){
					return isEnabledLightBulb;
				}
				
				function helpButtonPressed(){
					if (isEnabledLightBulb==true){
						SendHighMessage(lowMessage);
						var json = "{\"method\": \"PlatformEvent\", \"parameters\": {\"eventName\": \"*lightBulbPressedON*\"}}";
	                    u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);
	                    helpButtonEnable(false);
					}
				}
				
				function enableTIS(enable){
					checkTIS(enable);
					sendEventEnabledTIStoTDS(enable);
				}
				
				function sendEventEnabledTIStoTDS(enable){
					if (enable==false){
						var json = "{\"method\": \"PlatformEvent\", \"parameters\": {\"eventName\": \"*switchTISOFF*\"}}";
	                    u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);
					}
					else {
						var json = "{\"method\": \"PlatformEvent\", \"parameters\": {\"eventName\": \"*switchTISON*\"}}";
	                    u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);
					}
				}
				
				function sendLanguageEvent(){
					var len=nLocale;
					if (len.indexOf("en") > -1) {
						var json = "{\"method\": \"PlatformEvent\", \"parameters\": {\"eventName\": \"*switchEnglishON*\"}}";
	                    u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);
					} else if (len.indexOf("de") > -1){
						var json = "{\"method\": \"PlatformEvent\", \"parameters\": {\"eventName\": \"*switchGermanON*\"}}";
	                    u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);						
					} else if (len.indexOf("es") > -1) {
						var json = "{\"method\": \"PlatformEvent\", \"parameters\": {\"eventName\": \"*switchSpanishON*\"}}";
                    	u.getUnity().SendMessage("ExternalInterface", "SendEvent", json);
                    }
				}
				
