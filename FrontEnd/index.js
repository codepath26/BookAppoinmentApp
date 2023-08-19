let productId = [];
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
const form = document.querySelector("#form-data");
const item = document.getElementById("item-list");
form.addEventListener("submit", addData);
document.addEventListener("DOMContentLoaded", loaddata);
item.addEventListener("click", itemClicked);

async function loaddata(e) {
  let data1 = await axios.get("http://localhost:4000/appointmentDetail");
  data1.data.forEach((obj) => {
    display(obj);
    productId.push(obj.id);
  });
}
async function addData(e) {
  e.preventDefault();
  try {
    let obj = {
      name: name1.value,
      number: number.value,
      email: email.value,
    };
    let result = await axios.post(
      "http://localhost:4000/appointmentDetail",
      obj
    );
    display(result.data);
    productId.push(result.data.id);

    name1.value = "";
    number.value = "";
    email.value = "";
  } catch (err) {
    console.log(err);
  }
}

// delete and edit functionality
async function itemClicked(e) {
 
  if (e.target.classList.contains("delete")) {
    let li = e.target.parentNode;
    let list = Array.from(li.parentNode.children);
    let index = list.indexOf(e.target.parentNode);
    let id = productId[index];
    try{
   console.log(productId)
    let mess = await axios.delete(`http://localhost:4000/appointmentDetail/${id}`);
    console.log(mess)
     item.removeChild(li);
     productId.splice(index,1);
    }
    catch(err){
      console.log(err);
    }
  }
  if (e.target.classList.contains("edit")) {
    let li = e.target.parentNode;
    let list = Array.from(li.parentNode.children);
    let index = list.indexOf(e.target.parentNode);
    let id = productId[index];
    try{
      let result =await axios.get(`http://localhost:4000/appointmentDetail/${id}`);
      console.log(result)
      name1.value = result.data.username;
      number.value = result.data.number;
      email.value = result.data.email;
      item.removeChild(li);
      productId.splice(index,1);
    await axios.delete(`http://localhost:4000/appointmentDetail/${id}`);
    }
    catch(err){
      console.log(err);
    }
  }

  
}

function display(obj) {
  item.innerHTML += `<li class="list-group-item">
    name :${obj.username} ,number :${obj.number},email:${obj.email};
    <button class="btn btn-sm btn-danger delete float-end mx-2" id="delete">Delete</button>
    <button class="btn btn-sm btn-danger edit float-end" id="edit">Edite</button>
    </li>`;
}
