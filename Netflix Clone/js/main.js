window.setTimeout(function(){

var TabItem = document.querySelectorAll(".tab-item")
var tabcontent = document.querySelectorAll(".tab-content-item");


for(i=0; i <tabcontent.length; i++){
    TabItem[i].addEventListener("click",function(){
        tabcontent[i].classList.add("show");
    })
};

for(i= 0; i< TabItem.length; i++){

    TabItem[i].addEventListener("click", function(){
        for(m=0; m<TabItem.length; m++){

            TabItem[m].classList.remove("tab-border");
            
        }
        this.classList.add("tab-border");
        
    })
    
}





},500)