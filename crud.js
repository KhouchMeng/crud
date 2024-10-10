const data = [];

const renderTable = () =>{
    let tbody = '';
    data.map((item,index)=>{
        tbody+=`
            <tr class="table-danger">
                <td>${item.id}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
                <td>Image1</td>
                <td>
                    <button class="btn btn-warning"><i class="fa-solid fa-pen-to-square me-2"></i>Edit</button>
                    <button class="btn btn-danger"><i class="fa-solid fa-trash me-2"></i>Remove</button>

                </td>
            </tr>
        `;
    })
    document.querySelector('tbody').innerHTML = tbody;
}

const addData = () =>{
   const inputID = document.getElementById('id');
   const inputUsername = document.getElementById('username');
   const inputEmail  = document.getElementById('email');
   const inputPassword = document.getElementById('password')
   const inputProfile = document.getElementById('profile');

   const users ={
        id : inputID.value,
        username : inputUsername.value,
        email : inputEmail.value,
        password : inputPassword.value,    
   }
   data.push(users);
   renderTable();
}