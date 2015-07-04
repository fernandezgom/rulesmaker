		var userName="tludmetal";
		var nLocale = getUrlVars()["locale"];
		var rm=false;
		if (nLocale ==null || nLocale =='' ){
			nLocale=getLocale();
		} 
		
		$(document).ready(function() {
			$("#help").hide();
			goToFractionsLab();
			$("#rm").click(function() {
				if (rm==true){
					goToFractionsLab();
				} else {
					goToRules();
				}
			});	
		});

		function goToFractionsLab(){
		    $.ajax({
		        type: 'GET',
		        url: "fractionsLab/",
		        data: {
		            
		            },
		        success: function(data, textStatus, jqXHR) {
		        	rm=false;
		        	$("#rm").val("Rules");
		        	document.getElementById("mainContainer").innerHTML=jqXHR.responseText;
		            var reponse = jQuery(jqXHR.responseText);
		            var reponseScript = reponse.filter("script");
					iloadedjs=0;
					loadedjs=[];
		            jQuery.each(reponseScript, function(idx, val) {
						loadedjs[iloadedjs]=val.src;
						iloadedjs++;						
		            	loadjscssfile(val.src, "js");
				    } );
		        },
		        error : function(jqXHR, status, error) {
		           alert('Sorry!, there was a problem');
		        },
		        complete : function(jqXHR, status) {
		        }
		    });
		}
		
		function goToRules(){
		    $.ajax({
		        type: 'GET',
		        url: "rulesMaker/",
		        data: {
		            
		            },
		        success: function(data, textStatus, jqXHR) {
		        	$("#rm").val("FL");
		        	rm=true;
		        	document.getElementById("mainContainer").innerHTML=jqXHR.responseText;
		            var reponse = jQuery(jqXHR.responseText);
		            var reponseScript = reponse.filter("script");
					iloadedjs=0;
					loadedjs=[];
		            jQuery.each(reponseScript, function(idx, val) {
						loadedjs[iloadedjs]=val.src;
						iloadedjs++;						
		            	loadjscssfile(val.src, "js");
				    } );
		        },
		        error : function(jqXHR, status, error) {
		           alert('Sorry!, there was a problem');
		        },
		        complete : function(jqXHR, status) {
		        }
		    });
		}

        function getLocale(){
        	var l_lang=getParameterByName("locale");
			if (l_lang=="" && navigator.userLanguage) // Explorer
			  l_lang = navigator.userLanguage;
			else if (l_lang=="" && navigator.language) // FF
			  l_lang = navigator.language;
			else if (l_lang=="")
			  l_lang = "en";
			return l_lang;
        }


    	function getUrlVars()
    	{
    	    var vars = [], hash;
    	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    	    for(var i = 0; i < hashes.length; i++)
    	    {
    	        hash = hashes[i].split('=');
    	        vars.push(hash[0]);
    	        vars[hash[0]] = hash[1];
    	    }
    	    return vars;
    	}
    	
    	function getParameterByName(name) {
		    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		        results = regex.exec(location.search);
		    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}

		function loadjscssfile(filename, filetype){
			 if (filetype=="js"){ //if filename is a external JavaScript file
			  var fileref=document.createElement('script')
			  fileref.setAttribute("type","text/javascript")
			  fileref.setAttribute("src", filename)
			 }
			 else if (filetype=="css"){ //if filename is an external CSS file
			  var fileref=document.createElement("link")
			  fileref.setAttribute("rel", "stylesheet")
			  fileref.setAttribute("type", "text/css")
			  fileref.setAttribute("href", filename)
			 }
			 if (typeof fileref!="undefined")
			  document.getElementsByTagName("head")[0].appendChild(fileref)
			}
			
		function removejscssfile(filename, filetype){
			var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
			var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
			var allsuspects=document.getElementsByTagName(targetelement)
			for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
			if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
				allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
			}
		}
		
		function alreadyInDOM(filename, filetype){
			var val=false;
			var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
			var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
			var allsuspects=document.getElementsByTagName(targetelement)
			for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
			if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
				val=true; //remove element by calling parentNode.removeChild()
			}
			return val;
		}
		
		function replacejscssfile(oldfilename, newfilename, filetype){
			var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
			var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
			var allsuspects=document.getElementsByTagName(targetelement)
			for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
				if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
					var newelement=createjscssfile(newfilename, filetype)
					allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
				}
			}
		}

