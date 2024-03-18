function talent(){
    document.getElementById("talent").classList.remove("hidden");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("contact").classList.add("hidden");
    document.getElementById("talent-click").classList.add("talent-bg");
    document.getElementById("about-click").classList.remove("talent-bg");
    document.getElementById("contact-click").classList.remove("talent-bg");
}
function about(){
    document.getElementById("about").classList.remove("hidden");
    document.getElementById("talent").classList.add("hidden");
    document.getElementById("contact").classList.add("hidden");
    document.getElementById("about-click").classList.add("talent-bg");
    document.getElementById("talent-click").classList.remove("talent-bg");
    document.getElementById("contact-click").classList.remove("talent-bg");
}
function contact(){
    document.getElementById("contact").classList.remove("hidden");
    document.getElementById("talent").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("contact-click").classList.add("talent-bg");
    document.getElementById("about-click").classList.remove("talent-bg");
    document.getElementById("talent-click").classList.remove("talent-bg");
}