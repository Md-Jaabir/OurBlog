const apiUrl="https://formspree.io/f/xpzejoap";
const form = document.querySelector("form");
const sendContact=async (event)=>{
  let name=document.getElementById("name");
  let email=document.getElementById("email");
  let description=document.getElementById("description");
  event.preventDefault();
  console.log(event);
  if(name.value.length<5){
    alert("Name must contain at least 5 charecters");
    return;
  }

  if(description.value.length<15){
    alert("Descition must contain at least 15 charecters");
    return;
  }

  const res=await fetch(apiUrl,{
    method:"POST",
    body:JSON.stringify({
      name:name.value,
      email:email.value,
      description:description.value
    })
  });
  const response=await res.json();
  if(response.ok){
    alert("Contact shared successfully.");
  }else{
    alert("Something went wrong");
  }
  console.log(response);
}
form.onsubmit=sendContact
