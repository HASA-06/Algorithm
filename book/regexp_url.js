function regexp_url(uri) {
    var queryString = {};

    uri.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) {  queryString[$1] = $3;  }
    );

    return queryString;
}

console.log(regexp_url('http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv'));