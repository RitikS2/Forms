let form= document.querySelector("form");
    let main =document.querySelector(".main");
    let cAll =document.querySelector("#cALL")
    form.addEventListener("submit", (event) => {
        let name= event.target.uname.value;
        let email= event.target.email.value;
        let phone = event.target.Phone.value;
        let checkStatus=0;
         
        let userData=JSON.parse(localStorage.getItem("userdetails")) ?? [];
         for (let v of userData){
            if(v.email==email || v.phone==phone){
                checkStatus=1;
                break;
            }   
         }   
         if(checkStatus==1){
            alert("Email or Phone number Already Exist");
         } else { userData.push({
            'name': name,
            'email': email,
            'Phone': phone 
     })
        localStorage.setItem("userdetails",JSON.stringify(userData))
        event.target.reset();
        displayData();
        } 
        // console.log(userData)
        // console.log(name, email, phone)
        event.preventDefault();
     })

        let displayData= ()=>{
            let userData=JSON.parse(localStorage.getItem("userdetails")) ?? [];
            let finalData=''; 
            userData.forEach((element,i) => {
                
                finalData+=`<div class="items">
            <span onclick='removeData(${i})'>&times;</span>
            <h5>name</h5>
            <div>${element.name}</div>

            <h5>Email</h5>
            <div>${element.email}</div>

            <h5>Phone</h5>
            <div>${element.phone}</div>
        </div>`                
            });



            main.innerHTML=finalData;

        }   
        
            let removeData=(index)=>{ 
                let userData=JSON.parse(localStorage.getItem("userdetails")) ?? [];
                userData.splice(index,1);

                localStorage.setItem("userdetails",JSON.stringify(userData)) 

                displayData();
        }
    cAll.addEventListener("click",()=>{
         localStorage.clear("userDetails");
         displayData();
    })
      displayData();