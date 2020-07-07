<!DOCTYPE html>
<html>
<head>
	<title>Market 5ETOP</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<link rel="icon" type="image/png" href="./assets/images/favicon.png"/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<style type="text/css">
		body {
			font-family: "Century Gothic",メイリオ,Meiryo,ヒラギノ角ゴ\20Pro\20W3,"Hiragino Kaku Gothic Pro",ＭＳ\20Ｐゴシック,Arial,Verdana,sans-serif !important;
			background-color: #222d32;
			background: url('./assets/images/body-bg.jpg');
			color: #001;
		}
	</style>
</head>
<body>
	<div style="width: 100%; height: 80px; background: url('./assets/images/header-2.png');">
		<div style="background-image: url('./assets/images/logo.jfif');background-size: contain; height: 80px; width: 80px; float: left;">
		</div>
		<div style="float: left;">
			<span style="color: white; font-size: 24px; font-weight: 500; padding: 32px 0 0 32px;">Market 5ETOP</span>
			<p style="padding: 0 0 0 32px;color: white; font-size: 12px;">Support for trading item Dota 2</p>
		</div>
	</div>

	<div style="position: absolute; top: 0; right: 5px; height: 20px; width: 80px; text-align: end; color: white; font-size: 11px;">
		Version: 1.0.0
	</div>
	<div style="position: absolute; top: 40px; border-top-left-radius: 20px; right: 0; height: 36px; width: 200px; text-align: end; color: white; font-size: 11px; background: url('./assets/images/body-bg.jpg'); border: 2px solid rgba(0,0,0,0.2);">
		<div class="dropdown">
		  <span style="color: white; font-size: 16px; text-shadow: 2px 2px 4px #000000; padding-right: 16px; margin-top: 12px;">Login</span>
		  <div class="dropdown-content">
		    <p>Hello World!</p>
		  </div>
		</div>
	</div>

	<div id="navigation-horizontal">
	</div>

	<div style="max-width: 1000px; margin-left: auto; margin-right: auto;" id="content">
	</div>

	<div id="modal" class="modal">
		<div class="modal-content">
			<span id="modal-close" class="close">&times;</span>
			<div id="modal-html"></div>
		</div>
	</div>

	<script type="text/javascript">
		var manifest = {
			application: {
				title: "Market 5ETOP",
				version: "1.0.0",
				copyRight: "rWorld"
			},
			menu: [
				{id: "home", name: "Home"},
				{id: "open-market", name: "Open Market"},
				{id: "support-tool", name: "Support Tool"},
				{id: "account", name: "Account"},
				{id: "contact", name: "Contact"},
				{id: "about", name: "About"}
			]
		};
		//MENU
		var currentPage = 'home';
		function renderNavigationHorizontal(){
			var i = 0;
			var content = "<ul>";
			do{
				content += '<li><a class="menu-item" id="menu-item-' + manifest.menu[i].id + '"  onclick="changePage(\'' +manifest.menu[i].id + '\')">'+manifest.menu[i].name+'</a></li>';
				i++;
			}while(i<manifest.menu.length)
			content += "</ul>";
			$("#navigation-horizontal").html(content);
		}
		function removeClassMenu(){
			$('.menu-item').removeClass('active');
		}
		async function callServer(url, method, data) {
		    return new Promise((resolve, reject) => {
		        $.ajax({
		            url: url,
		            type: method,
		            timeout: 30000,
		            contentType: method === 'GET' ? 'text' : 'application/json',
		            data: JSON.stringify(data),
		            success: (response) => {
		                resolve(response);
		            },
		            error: (response) => {
		                reject(response);
		            }
		        })
		    })
		}
		async function changePage(page){
			var dataPage = await callServer('./pages/' + page + '.php', 'GET', {});
			removeClassMenu();
			$("#menu-item-"+page).addClass("active");
			$("#content").html(dataPage);
		}
		renderNavigationHorizontal();
		changePage(currentPage);
		//MENU
		//MODAL
		var modal = document.getElementById("modal");
		var modalClose = document.getElementById("modal-close");
		function openModal(html){
			modal.style.display = "block";
			$("#modal-html").html(html);
		}
		modalClose.onclick = function() {
	    	modal.style.display = "none";
	    }
		window.onclick = function(event) {
	    	if (event.target == modal) {
	    		modal.style.display = "none";
	    	}
	    }
		//MODAL
		//ACCOUNT
		async function login(){
			var data = {
				username: "admin",
				password: "1234562"
			};
			var result = await callServer('./database/api/api.php?type=User&action=login', 'POST', data);
			console.log(result);
		}
		login();
		//ACCOUNT
	</script>
</body>
</html>