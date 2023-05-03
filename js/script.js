let ambulanciasWait = [
  "Sub Ambulancias Tulua",
  "VITAL GROUP TULUA S.A.S",
  "Ambulances 911 Tuluá",
  "Amid Ltda",
  "Coomeva",
  "Servimos Santa Isabel",
  "Emergency Time S.A.S."
];

let ambulanciasSend = [];

const users = [
  {
    name: "Jaime Eduardo Diaz Tobon",
    email: "jaimediaz@example.com",
    user: "jaime",
    password: "123",
  },
  {
    name: "Juan Alejandro Londoño",
    email: "juanlondono@example.com",
    user: "juan",
    password: "123",
  },
  {
    name: "Santiago Arroyave Hernandez",
    email: "santiagoarroyave@example.com",
    user: "santiago",
    password: "123",
  },
  {
    name: "Marly Yibeth Gutierrez Guzman",
    email: "marlygutierrez@example.com",
    user: "marly",
    password: "123",
  },
];

document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__sesion").addEventListener("click", sesion);
document.getElementById("btn__registro").addEventListener("click", registro);
document.getElementById("btn__send").addEventListener("click", sendAmbulancia);
document.getElementById("log_out").addEventListener("click", logOut);
document.getElementById("btn__sendAmbulancia").addEventListener("click", enviar);
window.addEventListener("resize", anchoPage);

const user = document.getElementById("user");
const password = document.getElementById("password");

const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regUser = document.getElementById("regUser");
const regPassword = document.getElementById("regPassword");

const formulario_login = document.querySelector(".formulario__login");
const formulario_register = document.querySelector(".formulario__register");
const contenedor_login_register = document.querySelector(".contenedor__login-register");
const caja_trasera_login = document.querySelector(".caja__trasera-login");
const caja_trasera_register = document.querySelector(".caja__trasera-register");
const contenedor__login = document.querySelector(".contenedor__login");
const send_ambulancia = document.querySelector(".send_ambulancia");
const select = document.getElementById("selectAmbulancia");
const direccion = document.getElementById("direccion");

const mapa = document.querySelector(".mapa");
const btn = document.querySelector(".btn");
const disponible = document.getElementById("disponible");
const send = document.getElementById("send");
const errorLogin = document.getElementById("error_login");
const errorRegister = document.getElementById("error_register");

let usuarioEnviado;

function enviar() {
  const element = select.value;
  console.log("element", element);
  ambulanciasWait = ambulanciasWait.filter(item => item !== element);
  ambulanciasSend.push({
    ambulancia: element,
    user: usuarioEnviado,
    direccion: direccion.value
  });
  showAmbulancias();
}

function sendAmbulancia() {
  errorLogin.style.display = "none";
  errorRegister.style.display = "none";
  contenedor__login.style.display = "none";
  mapa.style.display = "none";
  btn.style.display = "none"
  send_ambulancia.style.display = "flex";
  select.innerHTML = "";
  ambulanciasWait.forEach((opcion) => {
    const opcionElemento = document.createElement("option");
    opcionElemento.text = opcion;
    select.add(opcionElemento);
  });
}

function logOut() {
  errorLogin.style.display = "none";
  errorRegister.style.display = "none";
  contenedor__login.style.display = "block";
  mapa.style.display = "none";
  btn.style.display = "none"
  send_ambulancia.style.display = "none";
}

function sesion() {
  if (
    users.find(userReg => userReg.user === user.value) &&
    users.find(userReg => userReg.password === password.value)
  ) {
    usuarioEnviado = user.value;
    showAmbulancias();
  } else {
    errorLogin.style.display = "block";
  }
}

function showAmbulancias() {
  errorLogin.style.display = "none";
  errorRegister.style.display = "none";
  contenedor__login.style.display = "none";
  mapa.style.display = "flex";
  btn.style.display = "flex";
  send_ambulancia.style.display = "none";
  disponible.innerHTML = "";
  const etiquetah2 = document.createElement("h2");
  const textoh2 = document.createTextNode("Ambulancias en espera");
  etiquetah2.appendChild(textoh2);
  etiquetah2.classList.add("form__title");
  disponible.appendChild(etiquetah2);
  ambulanciasWait.forEach(ambulancia => {
    const etiquetaP = document.createElement("p");
    const textoP = document.createTextNode(ambulancia);
    etiquetaP.appendChild(textoP);
    etiquetaP.classList.add("text");
    disponible.appendChild(etiquetaP);
  });
  send.innerHTML = "";
  const etiquetah2Send = document.createElement("h2");
  const textoh2Send = document.createTextNode("Ambulancias en camino");
  etiquetah2Send.appendChild(textoh2Send);
  etiquetah2Send.classList.add("form__title");
  send.appendChild(etiquetah2Send);
  ambulanciasSend.forEach(ambulancia => {
    let etiquetaP = document.createElement("p");
    let textoP = document.createTextNode("Ambulancia: " + ambulancia.ambulancia);
    etiquetaP.appendChild(textoP);
    etiquetaP.classList.add("text");
    send.appendChild(etiquetaP);
    etiquetaP = document.createElement("p");
    textoP = document.createTextNode("Enviado por: " + ambulancia.user);
    etiquetaP.appendChild(textoP);
    etiquetaP.classList.add("text");
    send.appendChild(etiquetaP);
    etiquetaP = document.createElement("p");
    textoP = document.createTextNode("Dirección: " + ambulancia.direccion);
    etiquetaP.appendChild(textoP);
    etiquetaP.classList.add("text");
    send.appendChild(etiquetaP);
  });
}

function registro() {
  if (users.find(userReg => userReg.user === regUser.value)) {
    errorRegister.textContent = "Usuario ya registrado";
    errorRegister.style.display = "block";
  } else {
    users.push({
      name: regName.value,
      email: regEmail.value,
      user: regUser.value,
      password: regPassword.value,
    });
    regName.value = "";
    regEmail.value = "";
    regUser.value = "";
    regPassword.value = "";
  }
}

function anchoPage() {
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}
