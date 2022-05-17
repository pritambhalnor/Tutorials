<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
  function getApi($subUrl)
  {
    // $api_url =  $GLOBALS["base_api_url"];
    $api_url= "http://localhost:1337";
    $cURLConnection = curl_init();
    curl_setopt($cURLConnection, CURLOPT_URL, $api_url . $subUrl);
    curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);

    $apiOutput = curl_exec($cURLConnection);
    curl_close($cURLConnection);

    $jsonArrayResponse = json_decode($apiOutput);

    return $jsonArrayResponse;
  }; 
  ?>
  <?php 
  $base_img_url = "http://localhost:1337";
  ?>
<?php
// echo'hi';
$blogId=$_POST['id'];
if(empty($blogId)){
  header("Location: index.php");
    exit;
}
$blogDetail=getApi('/blogs/'.$blogId);
?>
<!-- // echo'testing';
// $var = 'Metallica'; -->
<?php  
echo '
<div> '. $blogDetail->title . ' </div>
<div> '. $blogDetail->shortDescription . ' </div>

'
?>
<?php 
$imageUrl = $blogDetail->headerImage[0]->url;
echo '<img class="img-responsive blog-image" src="' . $base_img_url . $imageUrl . '" alt="">'
?>
<script>
   <?php
    //    echo "const jsvar ='$var';";
       echo "let detail ='$blogDetail';";
   ?>
   console.log(detail);
//     console.log(jsvar);
//    console.log(jsvar1); 
</script>

</body>
</html>