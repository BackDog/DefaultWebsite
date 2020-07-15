<style type="text/css">
	.login{
		position: absolute; 
		top: 40px; 
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px; 
		right: 0; 
		height: 36px; 
		width: 200px; 
		color: white; 
		font-size: 11px; 
		background: url('./assets/images/body-bg.jpg'); 
		border: 2px solid rgba(0,0,0,0.2);
	}
	.login-button{
		color: white; 
		font-size: 16px;
		text-shadow: 2px 2px 4px #000000;
	}

	.avatar-login{
		float: left;
		background: url('./assets/images/avatar-test.jfif'); 
		background-repeat: no-repeat;
  		background-size: 36px auto;
		border-radius: 50%;
		width: 36px;
		height: 36px;
	}

	.dropbtn-login {
		width: 160px;
		color: white;
		padding: 10px;
		font-size: 16px;
		border: none;
		cursor: pointer;
		background-color: rgba(0,0,0,0);
		text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
	}

	.dropdown-login {
		position: relative;
		display: inline-block;
	}

	.dropdown-content-login {
		display: none;
		position: absolute;
		background-color: white;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
	}

	.dropdown-content-login a {
		color: black;
		font-size: 12px;
		padding: 8px 8px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content-login a:hover {
		font-weight: 700;
		text-shadow: 0 0 1px #FF0000, 0 0 1px #0000FF;
	}

	.dropdown-login:hover .dropdown-content-login {
		display: block;
		animation-name: example;
		animation-duration: 0.5s;
	}

	@keyframes example {
	  from {
	    height: 0px;
	  }
	  to {
	  	height: 90px;
	  }
	}

	.dropdown-login:hover .dropbtn-login {
	}
</style>
<div class='login'>
	<div class="avatar-login"></div>
	<div class="dropdown-login">
	  <button id="id-dropbtn-login" class="dropbtn-login">Rabbit</button>
	  <div class="dropdown-content-login">
		  <a href="#">Profile</a>
		  <a href="#">Setting</a>
		  <a href="#">Log Out</a>
	  </div>
	</div>
</div>
<script type="text/javascript">
	var isLogin = false;
	var data = {};
	function login(){

	}
	function logout(){

	}
	function signUp(){
		
	}
	function checkIsLogin(){

	}
	function renderList(){

	}
	function setLabelLogin(label){
		$('#id-dropbtn-login')[0].innerText = label;
	}
	setLabelLogin('Rabbit 1');
</script>