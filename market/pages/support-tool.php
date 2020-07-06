<div class="about-section">
	<h3>Support Tool</h3>
	<p>Support betor 5etop functions: Profit Chart, Gift Chart, Refresh Rate Realtime.</p>
	<h3>Source Code</h3>
	<textarea id="textarea-support-tool" name="w3review" rows="4" style="width: 88%; resize: none">
	</textarea>
	<br>
	<button onclick="copyToClipboard()">COPY</button>
	<br>
	<h3>Profit Chart</h3>
	<p>Get the information of 5ETOP to calculate the user's profit chart from the last date provided by 5ETOP.</p>
	<h3>Gift Chart</h3>
	<p>Get the information of 5ETOP to calculate the user's gift chart from the last date provided by 5ETOP.</p>
	<h3>Refresh Rate Realtime</h3>
	<p>Automatically change the rate of a match without users having to reload the page.</p>
	<h3>Source Code</h3>
	<textarea id="textarea-support-tool-1" name="w3review" rows="4" style="width: 88%; resize: none">
	</textarea>
	<br>
	<button onclick="copyToClipboard()">COPY</button>
</div>
<style type="text/css">
	
</style>
<script>
	var code = '$("<script src=\'https://market.servegame.com/support-tool.js\'><\/script>").appendTo("body");';
	$('#textarea-support-tool').val(code);
	$('#textarea-support-tool-1').val(code);
	function copyToClipboard() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(code).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>
