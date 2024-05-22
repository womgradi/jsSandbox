const apiKey = 'L2btkaQXlp6FBuRRb3vO';  
const username = 'haldosomozayahoocom';  
const selectorWarning ="#divWarning";
const selectorLogin ="#divLogin";
const buttonToDisable="#_sieca_login_portlet_SiecaLoginPortlet_INSTANCE_ol1DXZlErfD3_inys";
const validaAmbitente="uat";

function validaFallos(){
	const url = 'https://api.statuscake.com/v1/uptime';

	$.ajax({
		url: url,
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + apiKey,
			'Accept': 'application/json'
		},
		success: function(response) { 			
			const arr= response.data;
			if(!arr.some(x => x.status !=="up" && x.paused == false && x.name.toLowerCase().includes(validaAmbitente) ) ){
				mostrarLogin(true);
			}else{
				mostrarLogin(false);
			}
			
		},
		error: function(xhr, status, error) {
			console.log("fail STC", response);		
		}
	});

}
 
function mostrarLogin(response){
	if(response ){
		$(selectorLogin).show();
		$(selectorWarning).hide();
		$(buttonToDisable).removeAttr("disabled");
		
	}else{
		$(selectorWarning).show();						
		$(selectorLogin).hide();						
		$(buttonToDisable).attr("disabled","disabled");
	}
	
}

function validar(){
	validaFallos();
	return ;
}

 