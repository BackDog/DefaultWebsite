<table id="table-user" style="width:100%; background-color: white">
  <tr>
  	<th>ID</th>
    <th>Username</th>
    <th>Password</th> 
    <th>Email</th>
    <th>Action</th>
  </tr>
</table>
<script>
	load();
	async function load(){
		var user = await callServer('./database/api/api.php?type=User', 'GET', {});
		var html = '<tr>';
		user.successfully.forEach(element => {
			html = '<tr>';
			html+= '<td>' + element.id + '</td>';
			html+= '<td><input type="text" value="' + element.username + '"></td>';
			html+= '<td>' + element.password + '</td>';
			html+= '<td>' + element.email + '</td>';
			html+= '<td><button>Update</button>' + element.id + '</td>';
			html+= '</tr>';
			$("#table-user").append(html);
		});
	}
	async function update(){

	}
</script>