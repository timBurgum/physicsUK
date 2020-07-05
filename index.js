var tabs = document.querySelectorAll(".tabBar ul li");
var pageInfo = document.querySelectorAll(".pageInfo");
console.log(pageInfo);
for(var i = 0;i<tabs.length;i++)
{

  tabs[i].addEventListener("click", function(e){


    console.log("you pressed " + this.innerHTML);
    //clear selected
    for(var n = 0;n<tabs.length;n++)
    {
      tabs[n].classList.remove("selected");
    }
    //add selected to 1
    this.classList.add("selected");

    //hide all sections
    for(var n = 0;n<pageInfo.length;n++)
    {
      pageInfo[n].classList.add("hidden");
    }
    //show selected content
    if(this.innerHTML == "Applications")
    {
      pageInfo[0].classList.remove("hidden");
    }
    if(this.innerHTML == "Useful Links")
    {
      pageInfo[1].classList.remove("hidden");
    }
    if(this.innerHTML == "MarkBOT")
    {
      pageInfo[2].classList.remove("hidden");
    }
    if(this.innerHTML == "Contact")
    {
      pageInfo[3].classList.remove("hidden");
    }

  });



};
