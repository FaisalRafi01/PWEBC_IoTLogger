fetch("http://localhost:3000/user")
    .then(response) => response.json();
    .then(data) => {
        data.data.foreach ((user) =>{
            const userdata =document.getElementById("UserData");
            const user_detail =document.createElement("div");

            const user_name =document.getElementById("name");


            const user_studentId =document.getElementById("studentId");

            const user_username =document.getElementById("username");

            user_name.innerText = user.name;
            user_studentId.innerText = user.studentId
        })
    }
    .catch(error) => console.error("Error:"){
        
    }

;
