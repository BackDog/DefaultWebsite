<!DOCTYPE html>
<html>
<head>
  <title>My Test Tool</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>

  <h2>Dev Tool</h2>
  <p>This site support for dev.</p>

  <ul>
    <li><a href="#home">Beautiful HTML</a></li>
    <li><a href="#news">Beautiful CSS</a></li>
    <li><a href="#contact">JSON</a></li>
    <li><a href="#about">PHP</a></li>
  </ul>
  <p>Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.

  If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox on the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.</p>

  <style type="text/css">
    .canEdit{
      border: dotted 1px;
    }
  </style>

  <div id="textHTML" class="canEdit">
    <button onclick="editHTML('textHTML')">Edit</button>
    11111111111
    <div id="test2" class="canEdit">
      <button onclick="editHTML('test2')">Edit</button>
      222222222
    </div>
  </div>

  <!-- Trigger/Open The Modal -->
  <button id="myBtn">Edit CSS</button>

  <!-- The Modal -->
  <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <textarea id="inputCURL" name="w3review" rows="20" cols="100">
      </textarea>
      <div id="htmlModal"></div>
<!--       <script>
        $('#inputCURL').bind('input propertychange', function(data) {
          $("#textHTML").html($('#inputCURL').val());
        });
      </script> -->
    </div>

  </div>

  <script>
            function myFunction(value, index, array) {
              var date = new Date(value.time * 1000);
              console.log('Đặt: ' + value.total + ' Ngày: ' + date); 
              console.log(value.value < 0 ? 'Thua: ' + value.value : 'Thắng: ' + value.value); 
            }
            $.ajax({
                url: '/api/match/list_user_press_history.do?data=loading',
                type: 'GET'
            }).done(function(ketqua) {
                console.log(ketqua);
                console.log('Trang hiện tại: '  + ketqua.datas.pager.current);
                console.log('Tổng trang: '  + ketqua.datas.pager.pages);
                console.log('Tổng kèo: '  + ketqua.datas.pager.total);
                ketqua.datas.list.forEach(myFunction);
            });
            $.ajax({
                url: '/api/match/list_user_press_history.do?data=loading&page=2&total=279&pages=14',
                type: 'GET'
            }).done(function(ketqua) {
                console.log(ketqua);
            });


    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //   modal.style.display = "block";
    // }

    function editHTML(id){
      console.log(id);
      modal.style.display = "block";
      $("#inputCURL").val($("#"+id).html());
      $("#htmlModal").html("<script> $('#inputCURL').bind('input propertychange', function(data) { $('#" + id +"').html($('#inputCURL').val());});</"+"script>");
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    $( '<script src="https://canhnguyenonline.000webhostapp.com/rabbit/rabbit.js"><'+'/script>' ).appendTo( "body" );

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    // https://canhnguyenonline.000webhostapp.com/rabbit/rabbit.js
    // $( '<div style="z-index: 1000;position: fixed; top: 40%; left: 10px; width: 50px; height: 50px; border-radius: 50%; background-color: red"></div>' ).appendTo( "body" );
  </script>
  

</body>
</html>