let ele=document.getElementById("cont");

let nav=document.createElement("nav");
nav.className="navbar navbar-light  bg-dark";
ele.appendChild(nav);

let fluid=document.createElement("div");
fluid.className="container";
nav.appendChild(fluid);

let a=document.createElement("a");
a.innerText="Ice and Fire API";
a.className="navbar-brand text-light";
fluid.appendChild(a);

let form=document.createElement("form");
form.className="d-flex";
fluid.appendChild(form);

let put=document.createElement("input");
put.className="form-control me-2";
put.setAttribute("type","search");
put.setAttribute("placeholder","Search");
put.setAttribute("aria-label","Search");
form.appendChild(put);

let btn=document.createElement("button");
btn.innerText="Search";
btn.className="btn btn-outline-success btn-info";
btn.setAttribute("type","submit");
form.appendChild(btn);




async function get() 
{
    try {
        var data = await fetch("https://www.anapioficeandfire.com/api/books");
        var dataObj = await data.json();

        var z = document.getElementById("cnt");
        var a = document.createElement("div");
        a.className = "row mx-lg-n5";
        var addhtml = "";

        dataObj.forEach(function (dataObj) {
            addhtml += `<div class='col col-lg-4'> \n
                <div class='card' style=" margin:10px;  "> \n
                <h5 class='card-header' align="center" style="background-color:#db4c25; color: white">${dataObj.name}</h5> \n
                <div class='card-body'> \n
                    <center> \n
                        <p class='card-text'>ISBN: ${dataObj.isbn} <br> <br> Number of Pages: ${dataObj.numberOfPages} <br> Authors: ${dataObj.authors} 
                        <br> <br>Publisher: ${dataObj.publisher} <br> Release Date: ${dataObj.released}\n
                        </p>\n
                    </center>\n
                </div>\n
            </div >\n
        </div >`;
        });

        a.innerHTML = addhtml;
        z.appendChild(a);


    }
    catch (err) {
        console.log(err);
    }
}

get()




























