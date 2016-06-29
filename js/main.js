function getURLParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var img1 = getURLParameterByName("img1");
var img2 = getURLParameterByName("img2");
var label1 = getURLParameterByName("label1"); 
var label2 = getURLParameterByName("label2"); 

if (img1 !== "" && img2 !== "") {
    $("#img1").attr("src", img1);
    $("#img2").attr("src", img2);
    $("#img1").attr("data-label", label1);
    $("#img2").attr("data-label", label2);
} else {
    $(".juxtapose").after("Set images to compare in URL e.g. ?img1=http://image1.com&img2=http://image2.com&label1=before&label2=after");
}
