function submit(){ 
    const fn=document.getElementById("fullName").value;
     const em=document.getElementById("email").value;
      const mb=document.getElementById("mobile").value;
       const ab =document.getElementById("fullName").value;

    let pb=[];

    document
    .querySelectorAll("input[name='batch']:checked");
    .forEach((element) =>{
        pb.push(element.value);
    });
   const pt= document.querySelectorAll("input[name='batch']:checked");
    const q=document.getElementById("percentage").value;
}
