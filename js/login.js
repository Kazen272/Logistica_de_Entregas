$('document').ready(function(){
 
	$("#btn-login").click(function(){
		var email = $("#login-email").val();
		var senha =$("#login-senha").val();
		$.ajax({
			type : 'POST',
			url  : '../sistema/login.php',
			data :{
				email:email,
				senha:senha
			}, 
			dataType: 'json',
			beforeSend: function()
			{	
				$("#loading").html("<img id='loading-png' src='../img/loading.png' width='100' height='50'>");
			},
			success :  function(response){						
				if(response.codigo == "1"){	
					window.location.href = "dashboard.html";
				} else
					{			
						$("#btn-login").html('Entrar');
						$("#mensagem").html(alert('Deu Ruim') + response.mensagem);
					}
			}
		});	
	});
});







/*

dataType: 'json',
			beforeSend: function()
			{	
				$("#loading").html("<img src='../img/loading.png'>");
			},
			success :  function(response){						
				if(response.codigo == "1"){	
					$("#btn-login").html('Entrar');
					window.location.href = "home.php";
				}
				else{			
					$("#btn-login").html('Entrar');
					$("#mensagem").html('<strong>Erro! </strong>' + response.mensagem);
				}
		    }
*/