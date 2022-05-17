<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #blog-search-panel.display-none {
            display: none !important;
        }
    </style>
    <title>Document</title>
</head>
<body>
<div class="form-group">
                    <div class="input-group search_input ">
                        <input id="blog-search-input" type="text" class="form-control" placeholder="Search Blogs by Title">
                        <div id="blog-search-panel" class="display-none">
                            <ul id="blog-search-list"></ul>
                        </div>
                    </div>
</div>
<?php 
echo'hello world';
$base_img_url = "http://localhost:1337";
?>
<script>
    <?php echo "const baseApiUrl ='$base_img_url';" ?>
    // console.log(baseApiUrl);
    // const baseApiUrl = "http://52.91.220.24:1337";
    let searchResultDiv=document.getElementById('blog-search-panel');
    let blogsListElement=document.getElementById('blog-search-list');
    let blogListHtml = "";
    document.getElementById('blog-search-input').addEventListener('keyup',(e)=>{
        console.log(e.target.value);
        const searchVal = e.target.value;
            if (searchVal.length <= 2) return searchResultDiv.classList.add("display-none");
            searchResultDiv.classList.remove("display-none");
            console.log(baseApiUrl);
            fetch(`${baseApiUrl}/blogs?title_contains=${searchVal}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.length === 0) {
                        blogsListElement.innerHTML = "<li>No blogs found.</li>"
                    } else {
                        data.forEach((blog) => {
                            blogListHtml += `<li>
                            <?php echo '<form action=" /test.php" method="post">' ?>
                            <input type="hidden" name="id" value="${blog.id}"> <input class="resetCss" type="submit" name="submit" value="${blog.title}">
                            </form>
                            </li>`;
                });
                blogsListElement.innerHTML = blogListHtml;
         }
        });
    });
</script> 
</body>
</html>
