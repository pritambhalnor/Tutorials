<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
      .w50{
        width: 50%;
      }
    </style>
    <title>Document</title>
</head>
<body>
<?php include "function.php"; ?>
<?php 
$prodId = $_POST['id'];
if (empty($prodId)) {
	header("Location: index.php");
	exit;
}
$productCategoriesObj = getApi("/product-categories/" . $prodId);
?>
<?php 
echo $productCategoriesObj->Name;
foreach($productCategoriesObj->product_sub_categories as $productsubcatobj){
    
    echo '
    <div class="d-flex justify-content-between">
    <ul ">
    <li  onclick="test(' . $productsubcatobj->id . ')">' . $productsubcatobj->Name . '</li>
    </ul>
    <div class=" w50" >
    <div id="pname"></div></div></div>
    ';
}
// echo '<div id="name"></div>

// <div id="pname"></div>

// ';

?>


<script>
let prodsubcatdata;
const customFetch = (url, method = "GET", body = null) => {
    fetch(url)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        console.log("data", data);
        prodsubcatdata=data;
        console.log("data2",prodsubcatdata);
        // document.getElementById('name').innerHTML=prodsubcatdata.Name;
        display();
      })
      .catch((error) => {
        console.log(error);
      });
};

function test(id){
      const url="http://localhost:1337/product-sub-categories/";
      console.log(id);
      customFetch(`${url}${id}`);
}

function display(){
    let names="";
    prodsubcatdata.products.forEach((item) => {
    const { Name } = item;
    names+="<span class='row'>"+"<span class='row'>"+Name+"</span>"+"</span>";
    })
    document.getElementById('pname').innerHTML=names;
}

 window.onload=function(){
      const url="http://localhost:1337/product-sub-categories/";
      let id ="<?php echo $productCategoriesObj->product_sub_categories[0]->id?>";
      console.log(id);
        customFetch(`${url}${id}`);
};

</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
