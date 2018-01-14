var btnAll = document.getElementById("sort-all"),
    btnDesign = document.getElementById("sort-design"),
    btnCoop = document.getElementById("sort-coop"),
    btnCourse = document.getElementById("sort-course"),
    btnSide = document.getElementById("sort-side"),
    btnHackathons = document.getElementById("sort-hackathons"),
    btnHS = document.getElementById("sort-hs"),
    cards = {design:["Waterloop", "watonomous", "biotron"], coop:["im", "ford"],
             course:["1A", "tron-days"], side: ["elongboard", "drone", "website", "app", "3D"],
             hackathons:["penn", "princeton", "wearhacks", "IEEE"], hs:["robotics-hs", "catapult"]},
    cardsAll = ["Waterloop", "watonomous", "biotron", "im", "ford", "1A", "tron-days", "elongboard", "drone", "website", "app", "3D",
               "penn", "princeton", "wearhacks", "IEEE", "robotics-hs", "catapult"];

function sort(type){
    var sortedCards;
    console.log("Sort: " + type);
    if (type === "design"){
        sortedCards = cards.design;
    }
    else if (type === "coop"){
        sortedCards = cards.coop;
    }
    else if (type === "course"){
        sortedCards = cards.course;
    }
    else if (type === "side"){
        sortedCards = cards.side;
    }
    else if (type === "hackathons"){
        sortedCards = cards.hackathons;
    }
    else if (type === "hs"){
        sortedCards = cards.hs;
    }
    /* Make all but type hidden */
    for (var i = 0; i < cardsAll.length; i ++){
        var card = document.getElementById(cardsAll[i]);
        if(sortedCards.includes(cardsAll[i])){
            card.style.display = "block";
            console.log(cardsAll[i] + ": " + card.style.display);
        }
        else{
            card.style.display = "none";
        }
    }
    console.log("DONE");
}

function sortAll(){
    for (var i = 0; i < cardsAll.length; i ++){
        document.getElementById(cardsAll[i]).style.display = "block";
        console.log(document.getElementById(cardsAll[i]).style.display);
    }
}

$(document).ready(function($) {
    /* If All Button is Clicked */
    $('#sort-all').on('click', function(){
        /* Make sort-all active */                   
        if (btnAll.classList.contains("btn-inactive")){
            console.log("activate sort-all");
            btnAll.classList.remove("btn-inactive");
            sortAll();
        }
        else{
            console.log("sort-all is already active");
        }
        /* Make rest inactive */ 
        if (!btnDesign.classList.contains("btn-inactive")){
            btnDesign.classList.add("btn-inactive");
            console.log("deactivate btn-design")
        }
        else if (!btnCoop.classList.contains("btn-inactive")){
            btnCoop.classList.add("btn-inactive");
            console.log("deactivate btn-coop")
        }
        else if (!btnCourse.classList.contains("btn-inactive")){
            btnCourse.classList.add("btn-inactive");
            console.log("deactivate btn-course")
        }
        else if (!btnSide.classList.contains("btn-inactive")){
            btnSide.classList.add("btn-inactive");
            console.log("deactivate btn-side")
        }
        else if (!btnHackathons.classList.contains("btn-inactive")){
            btnHackathons.classList.add("btn-inactive");
            console.log("deactivate btn-hackathons")
        }
        else if (!btnHS.classList.contains("btn-inactive")){
            btnHS.classList.add("btn-inactive");
            console.log("deactivate btn-hs")
        }
    });
    /* If Design Team Button is Clicked */
    $('#sort-design').on('click', function(){
        /* Make sort-design active */                   
        if (btnDesign.classList.contains("btn-inactive")){
            console.log("activate sort-design");
            btnDesign.classList.remove("btn-inactive");
            sort("design");
        }
        else{
            console.log("sort-design is already active");
        }
        /* Make rest inactive */ 
        if (!btnAll.classList.contains("btn-inactive")){
            btnAll.classList.add("btn-inactive");
            console.log("deactivate btn-all")
        }
        else if (!btnCoop.classList.contains("btn-inactive")){
            btnCoop.classList.add("btn-inactive");
            console.log("deactivate btn-coop")
        }
        else if (!btnCourse.classList.contains("btn-inactive")){
            btnCourse.classList.add("btn-inactive");
            console.log("deactivate btn-course")
        }
        else if (!btnSide.classList.contains("btn-inactive")){
            btnSide.classList.add("btn-inactive");
            console.log("deactivate btn-side")
        }
        else if (!btnHackathons.classList.contains("btn-inactive")){
            btnHackathons.classList.add("btn-inactive");
            console.log("deactivate btn-hackathons")
        }
        else if (!btnHS.classList.contains("btn-inactive")){
            btnHS.classList.add("btn-inactive");
            console.log("deactivate btn-hs")
        }
    });   
    /* If Coop Button is Clicked */
    $('#sort-coop').on('click', function(){
        /* Make sort-coop active */                   
        if (btnCoop.classList.contains("btn-inactive")){
            console.log("activate sort-coop");
            btnCoop.classList.remove("btn-inactive");
            sort("coop");
        }
        else{
            console.log("sort-coop is already active");
        }
        /* Make rest inactive */ 
        if (!btnAll.classList.contains("btn-inactive")){
            btnAll.classList.add("btn-inactive");
            console.log("deactivate btn-all")
        }
        else if (!btnDesign.classList.contains("btn-inactive")){
            btnDesign.classList.add("btn-inactive");
            console.log("deactivate btn-design")
        }
        else if (!btnCourse.classList.contains("btn-inactive")){
            btnCourse.classList.add("btn-inactive");
            console.log("deactivate btn-course")
        }
        else if (!btnSide.classList.contains("btn-inactive")){
            btnSide.classList.add("btn-inactive");
            console.log("deactivate btn-side")
        }
        else if (!btnHackathons.classList.contains("btn-inactive")){
            btnHackathons.classList.add("btn-inactive");
            console.log("deactivate btn-hackathons")
        }
        else if (!btnHS.classList.contains("btn-inactive")){
            btnHS.classList.add("btn-inactive");
            console.log("deactivate btn-hs")
        }    
    
    });
    /* If University Course Projects Button is Clicked */
    $('#sort-course').on('click', function(){
        /* Make sort-course active */                   
        if (btnCourse.classList.contains("btn-inactive")){
            console.log("activate sort-course");
            btnCourse.classList.remove("btn-inactive");
            sort("course");
        }
        else{
            console.log("sort-course is already active");
        }
        /* Make rest inactive */ 
        if (!btnAll.classList.contains("btn-inactive")){
            btnAll.classList.add("btn-inactive");
            console.log("deactivate btn-all")
        }
        else if (!btnCoop.classList.contains("btn-inactive")){
            btnCoop.classList.add("btn-inactive");
            console.log("deactivate btn-coop")
        }
        else if (!btnDesign.classList.contains("btn-inactive")){
            btnDesign.classList.add("btn-inactive");
            console.log("deactivate btn-design")
        }
        else if (!btnSide.classList.contains("btn-inactive")){
            btnSide.classList.add("btn-inactive");
            console.log("deactivate btn-side")
        }
        else if (!btnHackathons.classList.contains("btn-inactive")){
            btnHackathons.classList.add("btn-inactive");
            console.log("deactivate btn-hackathons")
        }
        else if (!btnHS.classList.contains("btn-inactive")){
            btnHS.classList.add("btn-inactive");
            console.log("deactivate btn-hs")
        }
    });
    /* If Side Projects Button is Clicked */
    $('#sort-side').on('click', function(){
        /* Make sort-side active */                   
        if (btnSide.classList.contains("btn-inactive")){
            console.log("activate sort-side");
            btnSide.classList.remove("btn-inactive");
            sort("side");
        }
        else{
            console.log("sort-side is already active");
        }
        /* Make rest inactive */ 
        if (!btnAll.classList.contains("btn-inactive")){
            btnAll.classList.add("btn-inactive");
            console.log("deactivate btn-all")
        }
        else if (!btnCoop.classList.contains("btn-inactive")){
            btnCoop.classList.add("btn-inactive");
            console.log("deactivate btn-coop")
        }
        else if (!btnDesign.classList.contains("btn-inactive")){
            btnDesign.classList.add("btn-inactive");
            console.log("deactivate btn-design")
        }
        else if (!btnCourse.classList.contains("btn-inactive")){
            btnCourse.classList.add("btn-inactive");
            console.log("deactivate btn-course")
        }
        else if (!btnHackathons.classList.contains("btn-inactive")){
            btnHackathons.classList.add("btn-inactive");
            console.log("deactivate btn-hackathons")
        }
        else if (!btnHS.classList.contains("btn-inactive")){
            btnHS.classList.add("btn-inactive");
            console.log("deactivate btn-hs")
        }
    });
    /* If Hackathons Button is Clicked */
    $('#sort-hackathons').on('click', function(){
        /* Make sort-hackathons active */                   
        if (btnHackathons.classList.contains("btn-inactive")){
            console.log("activate sort-hackathons");
            btnHackathons.classList.remove("btn-inactive");
            sort("hackathons");
        }
        else{
            console.log("sort-hackathons is already active");
        }
        /* Make rest inactive */ 
        if (!btnAll.classList.contains("btn-inactive")){
            btnAll.classList.add("btn-inactive");
            console.log("deactivate btn-all")
        }
        else if (!btnCoop.classList.contains("btn-inactive")){
            btnCoop.classList.add("btn-inactive");
            console.log("deactivate btn-coop")
        }
        else if (!btnDesign.classList.contains("btn-inactive")){
            btnDesign.classList.add("btn-inactive");
            console.log("deactivate btn-design")
        }
        else if (!btnCourse.classList.contains("btn-inactive")){
            btnCourse.classList.add("btn-inactive");
            console.log("deactivate btn-course")
        }
        else if (!btnSide.classList.contains("btn-inactive")){
            btnSide.classList.add("btn-inactive");
            console.log("deactivate btn-side")
        }
        else if (!btnHS.classList.contains("btn-inactive")){
            btnHS.classList.add("btn-inactive");
            console.log("deactivate btn-hs")
        }
    });
    /* If High School Button is Clicked */
    $('#sort-hs').on('click', function(){
        /* Make sort-hs active */                   
        if (btnHS.classList.contains("btn-inactive")){
            console.log("activate sort-hs");
            btnHS.classList.remove("btn-inactive");
            sort("hs");
        }
        else{
            console.log("sort-hs is already active");
        }
        /* Make rest inactive */ 
        if (!btnAll.classList.contains("btn-inactive")){
            btnAll.classList.add("btn-inactive");
            console.log("deactivate btn-all")
        }
        else if (!btnCoop.classList.contains("btn-inactive")){
            btnCoop.classList.add("btn-inactive");
            console.log("deactivate btn-coop")
        }
        else if (!btnDesign.classList.contains("btn-inactive")){
            btnDesign.classList.add("btn-inactive");
            console.log("deactivate btn-design")
        }
        else if (!btnCourse.classList.contains("btn-inactive")){
            btnCourse.classList.add("btn-inactive");
            console.log("deactivate btn-course")
        }
        else if (!btnSide.classList.contains("btn-inactive")){
            btnSide.classList.add("btn-inactive");
            console.log("deactivate btn-side")
        }
        else if (!btnHackathons.classList.contains("btn-inactive")){
            btnHackathons.classList.add("btn-inactive");
            console.log("deactivate btn-hackathons")
        }
    
    });
});


