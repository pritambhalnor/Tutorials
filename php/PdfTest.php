<?php include "function.php"; ?>
<?php 
$mainProdCat = getApi("/product-categories?_sort=UIDisplayOrder:asc");; 
?>
<?php 
foreach($mainProdCat as $test){
    echo '
    <div> ' . $test->Name .' </div>
    ';
    if ($test->PDFName){
        echo '<a class="btn pdfBtn" href="/pdf/' . $test->PDFName . '" download="' . $test->PDFName . '" target="_blank">Download product list<i style="margin-left: 10px;" class="fas fa-file-pdf"></i></a>';
    }
}
?>