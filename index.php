

<?php
$user_name=$_POST['username'];
$pass_word=$_POST['password'];

$conn=new mysqli('localhost','root','','login_db');
if($conn->connect_error)
{
die('Connection Failed: '.$conn->connect_error);
}
else
{
$stmt=$conn->prepare("Insert into login_tbl(username,password) values(?,?)");
$stmt->bind_param("ss",$user_name,$pass_word);
$stmt->execute();
$stmt->close();
$conn->close();

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Guess</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="links">
 WordFinder
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="loginform.php">Sign Out</a></li> <!-- Added Login link -->
        </ul>
    </div>
    <section>
        <h2>Guess the word da!</h2>
        
        <div class="popup" onclick="myFunction()"><button>CHOOSE LEVEL</button>
            <span class="popuptext" id="myPopup">
                <div class="btn-group">
                    <button><a class="game" href="easylevel.html">Easy</a></button>
                    <button><a class="game" href="mediumlevel.html">Medium</a></button>
                    <button><a class="game" href="hardlevel.html">Hard</a></button>
                </div>
            </span>
        </div>

        <script>
            // When the user clicks on div, open the popup
            function myFunction() {
                var popup = document.getElementById("myPopup");
                popup.classList.toggle("show");
            }
        </script>
    </section>
</body>
</html>
