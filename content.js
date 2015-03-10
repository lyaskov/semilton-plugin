inArray = Array.prototype.indexOf ?
    function (arr, val) {
        return arr.indexOf(val) != -1
    } :
    function (arr, val) {
        var i = arr.length
        while (i--) {
            if (arr[i] === val) return true
        }
        return false
    }



var total = 0;
var free_field = ["BLOG_POST_ID","CML2_LINK", "PRODUCT_PP", "PRODUCT_RRP","PRODUCT_VAT","PRODUCT_WO_PP","PRODUCT_WO_RRP","PRODUCT_WO_SP"];
if ((document.URL.indexOf("http://test.semilton.com/content_report.php")==0) || (document.URL.indexOf("http://semilton.sk/content_report.php"))==0){
$('.report-table tbody tr').each(function(){

name = $(this).find("td").eq(1).text();
val = $(this).find("td").eq(2).text();
if (name=="FORM_SKU_MAIN") {
	total += val*1;
} else if (name=="MORE_PHOTO" || name=="MORE_FOTO") {
	total += val*0.8;
} else if (name=="FORM_SKU_OFFER_MAIN") {
	total += val*0.3;
} else if (inArray(free_field, name)){
	total += val*0;
} else {
total += val*0.1;}

});
var totalRound = Math.round(total*100)/100;

var totalFormated = Number(totalRound).toFixed(2).toString().split('.');
alert(totalFormated[0] + "." + totalFormated[1] + ' грн.');
}