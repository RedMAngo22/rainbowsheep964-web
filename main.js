var colors=[
"#FF9999",
"#FFD499",
"#FFFF99",
"#99FFBB",
"#99B2FF",
"#CC99FF",
];
window.addEventListener("load",function() {
    var backing=document.getElementById("backing");
    for (var i=0;i<6;i++) {
        backing.innerHTML+=('<div class="back" style="background-color: '+colors[i]+';left: '+16.667*i+'%;"></div>');
    }
});