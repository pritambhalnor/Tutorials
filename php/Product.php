<?php include "function.php"; ?>
<?php
$base_img_url="http://localhost:1337";
$mainProdCat = getApi("/product-categories?_sort=UIDisplayOrder:asc");; ?>
<?php
foreach($mainProdCat as $mainProdCatobj){
    echo '
    <form action="/products.php" method="post">
                    <input type="hidden" name="id" value="' . $mainProdCatobj->id . '" />
                    <img class="img-responsive img-circle prodCatImg" src="' . $base_img_url . $mainProdCatobj->Image[0]->url . '" alt="' . $mainProdCatobj->Name . '">
                    <input class="btn" type="submit" name="submit" value="Know More" />
    </form>

    ';
}
?>