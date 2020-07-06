<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  margin-top: 24px;
  border-radius: 8px;
  padding: 24px;
  background-color: #888888;
  color: black;
}
</style>

<h3 style="color: white">Contact Form</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">Title</label>
    <input type="text" id="fname" name="firstname" placeholder="Title..">

    <label for="subject">Issue</label>
    <textarea id="subject" name="subject" placeholder="Write Issue.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>