const axios = require('axios');

const read_button = document.getElementById('read_button');
const CompanyNameForRead = document.querySelector('#CompanyNameForRead');

function verificar() {
    var auth = true;
    //console.log(User)
    //console.log(email_login.value);
    //console.log(password_login.value);
    //token = User.token;
    //console.log(token);
    const user = JSON.parse(localStorage.getItem('user'));

    axios.post('http://localhost:3000/auth', {}, {
        headers: {'authorization': `Basic ${user.token}`}
    })
    .then((res)=>{
        if(res.status === 401) 
            auth = false;
    })
    return auth;
}

const ReadJobClass = document.querySelector('.ReadJobClass');

function displayVagasDeEmprego(obj) {
    ReadJobClass.innerHTML = "";
        for(let i = 0; i < obj.length; i++) {
            const div = document.createElement("div");
            div.innerHTML = `<h3> VAGAS DE EMPREGO CRIADAS DA EMPRESA ${obj[i].Company}</h3>
            <table>
            <thead>
                <tr>
                    <th><b>Nome da vaga</b></th>
                    <th><b>Atividades</b></th>
                    <th><b>Requisitos</b></th>
                    <th><b>Salário</b></th>
                    <th><b>Número máximo</b></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>${obj[i].JobTitle}</th>
                    <th>${obj[i].Activities}</th>
                    <th>${obj[i].Requiriments}</th>
                    <th>${obj[i].Salary}</th>
                    <th>${obj[i].MaxNumber}</th>
                </tr>
            <tbody>

            </table>`;
            ReadJobClass.appendChild(div);
        }
}

if(read_button){
    read_button.addEventListener('click', (e) => {
        e.preventDefault();
        try{
            if(verificar()) {
                obj = {
                    data: CompanyNameForRead.value.toUpperCase(),
                }
                axios.post('http://localhost:3000/readjob', obj)
                .then((response)=> {
                    displayVagasDeEmprego(response.data)
                },(error) => {
                  console.log(error);
                })
            }
            else
                console.log('acesso negado');
        }
        catch(e){
            console.log(e);
        }
    })
}
