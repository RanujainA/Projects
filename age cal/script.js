var spanyr=document.querySelector("#years");
var dobip=document.querySelector("#dob");
var spanmt=document.querySelector("#months");
var spandy=document.querySelector("#days");
var fordisplay=document.querySelector("p");
function calcAge(){
    var current=new Date();
    var curday=current.getDate();
    var curmonth=current.getMonth();
    var curyear=current.getFullYear();

    var dob=new Date(dobip.value);
    var dobday=dob.getDate();
    var dobmonth=dob.getMonth()+1;
    var dobyear=dob.getFullYear();
    fordisplay.style.display="block";
    //finding years
    var years=curyear-dobyear;
    spanyr.innerHTML=years + " years ";

    //finding months
    if(curmonth >= dobmonth){
        let months=curmonth-dobmonth;
        spanmt.innerHTML=months + " months ";
    }else{
        let months;
        years-=1;
        curmonth+12;
        months=curmonth-dobmonth;
        spanmt.innerHTML=months + " months ";
    }

    //finding days
    var daysinmonth=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(curday >= dobday){
        let days=curday-dobday;
        spandy.innerHTML=days + " days";
    }else{
        let days;
        dobday=daysinmonth[dobmonth-1]-dobday;
        months--;
        days=curday+dobday;
        spandy.innerHTML=days +" days";
    }
}





    

    
