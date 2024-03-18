const toggle_btn=document.querySelector('.handburger');
const list_elements=document.querySelector('.nav_list');

var counter =0;
toggle_btn.addEventListener('click',()=>{
    if(counter%2==0){
        list_elements.style.display='flex';
        counter=1;
    }
    else{
        list_elements.style.display='none';
        counter=0
    }
});

// make email content
var Name = document.getElementById('name');
var Email = document.getElementById('email');
var Message = document.getElementById('message');

const sent_btn=document.querySelector('.sent');
function sentmail(){
    var detials={
        name:Name,
        email:Email,
        message:Message,
        }
        const serviceid="service_hsyv3kd";
        const templateid="template_ymnqzvh";
    
    if(Name.length==0){
        alert("Enter the name");
    }
    else if(Email.length==0){
        alert("Enter the Email");
    }
    else if(Message.length==0){
        alert("Enter the Message as you want");
    }
    else{
        emailjs.send(serviceid,templateid,detials)
        .then((res)=>{
            document.getElementById("name").value="";
            document.getElementById('email').value="";
            document.getElementById('message').value="";
            alert("Your message sent sucessfully!");    
        })
        .catch(err=>console.log("Message not Sended plese try again"));
    }
    
    
}

