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
function removeSpecialChar($str)
{

  // Using preg_replace() function
  // to replace the word
  $res = preg_replace('/[^A-Z0-9]/i', '', $str);

  // Returning the result
  return $res;
}; ?>

<?php
function removeStringAfterChar($orinalString, $replaceBy)
{

  if (strpos($orinalString, $replaceBy) == true) {
    $filterString = substr($orinalString, 0, strpos($orinalString, $replaceBy));

    // Display value of variable 
    return $filterString;
  } else {
    return $orinalString;
  }
}
?>