
fetch("http://www.raydelto.org/json.php").then((respuesta)=>{
            return  respuesta.json();
        }).then((respuesta) =>{
            document.getElementById("nombrej").value=respuesta.name;
            document.getElementById("apellidoj").value=respuesta.lastName;
        })
        const API_URL = "http://jsonplaceholder.typicode.com";
        const HTMLResponse= document.querySelector("#xml")
        const ul = document.createElement('ul');
        var select=document.getElementById("search")

function mostrar(){

    var optionValue=document.getElementById("search").value

    fetch('http://jsonplaceholder.typicode.com/users').then((response)=> response.json()).then((users) =>{
        users.forEach((user)=>{
            let elem= document.createElement('li');
   
            if (optionValue=="p0"){
                elem.appendChild(document.createTextNode(user.id+"---"+user.name));
            
            }
            if (optionValue=="p1"){
                elem.appendChild(document.createTextNode(user.name));
            
            }
            if (optionValue=="p2"){
                elem.appendChild(document.createTextNode(user.username+"---"+user.name+" "));
            
            }
            if (optionValue=="p3"){
                elem.appendChild(document.createTextNode(user.email+"---"+user.name+" "));
            
            }
            if (optionValue=="p5"){
                elem.appendChild(document.createTextNode(user.address.street+"---"+user.name+" "));
            
            }
            if (optionValue=="p6"){
                elem.appendChild(document.createTextNode(user.address.suite+"---"+user.name+" "));
            
            }
            if (optionValue=="p7"){
                elem.appendChild(document.createTextNode(user.address.city+"---"+user.name+" "));
            
            }
            if (optionValue=="p8"){
                elem.appendChild(document.createTextNode(user.address.zipcode+"---"+user.name+" "));
            
            }
            if (optionValue=="p9"){
                elem.appendChild(document.createTextNode(user.address.geo.lat+"---"+user.name+" "));
            
            }
            if (optionValue=="p10"){
                elem.appendChild(document.createTextNode(user.address.geo.lng+"---"+user.name+" "));
            
            }
            if (optionValue=="p11"){
                elem.appendChild(document.createTextNode(user.phone+"---"+user.name+" "));
            
            }
            if (optionValue=="p12"){
                elem.appendChild(document.createTextNode(user.website+"---"+user.name+" "));
            
            }
            if (optionValue=="p13"){
                elem.appendChild(document.createTextNode(user.company.name+"---"+user.name+" "));
            
            }
            if (optionValue=="p14"){
                elem.appendChild(document.createTextNode(user.company.catchPhrase+"---"+user.name+" "));
            
            }
            if (optionValue=="p15"){
                elem.appendChild(document.createTextNode(user.company.bs+"---"+user.name+" "));
            
            }
            ul.appendChild(elem);
            
        });
        
        HTMLResponse.appendChild(ul);
    });

}
function principal(){
    localStorage.clear();
}

        