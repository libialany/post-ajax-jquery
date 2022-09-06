
    var submitButton = document.getElementById('Btnuserform');
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        var data=  $('#userform').serializeJSON();
        $.ajax({
            data:data,
            dataType: "json",
            url: "http://localhost:4000/",
            contentType: 'application/json',
            type: "POST",
            data: JSON.stringify(data),
            success: function(data){
                
            }
        });
    });
    function loadUsers(){
        fetch('/listar',{method:'GET'}).
        then(res=>res.json()).
        
        then(data=>{
            const users=document.querySelector('#users-table')
            let html =''
            data.users.forEach(user=>{
                html+="<p>"
                html+=`<p>${user.email}</p>`
                html+=`<p><a class="btn btn-primary" href="#" role="button">Eliminar</a>`
                html+=`-<a class="btn btn-primary" href="#" role="button">Editar</a></p>`
                html+='</p>'
            })
            console.log(data);
            users.innerHTML=html;
        })
    }