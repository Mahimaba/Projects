let btn = document.getElementsByClassName("response")[0];
let mainbody = document.getElementsByClassName("mainbody")[0];
btn.addEventListener("click", () => {
  mainbody.classList.toggle("showchat")
  btn.classList.toggle("showchat")
})



//
let usermsg;

const api_key = "AIzaSyATfxq3qbQiAE6v5kfRqzE2eA6F-NMyxAQ"
const createChali = (msg, classname) => {
  const chal = document.createElement("li");
  chal.classList.add("chat", classname);
  let chatConcent = classname === "outgoing" ? `<p>${msg}</p>` : `<span><i class="fa-solid fa-robot"></i></span><p>${msg}</p>`;
  chal.innerHTML = chatConcent;
  return chal;

}

let sendmsg = document.querySelector(".input button")
let typsendmsg = document.querySelector(".input textarea")
let chatbox = document.querySelector(".chatbox")

let genretResponce = (incomingchali) => {
  let chatApi = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${api_key}`;

const message=incomingchali.querySelector("p")

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
     
    },
    body: JSON.stringify({
      contents:[{
       role:"user",
       parts:[{text:usermsg}]
      }]
     })
  }
  fetch(chatApi,requestOptions).then(res=>res.json()).then(data=>{
    message.textContent=data.candidates[0].content.parts[0].text
  }).catch((error)=>{
    message.textContent="Oops somthing went wrong.please Try again 😊"
  }).finally(()=>{
    chatbox.scrollTo(0,chatbox.scrollHeight)
  })
}



let handlechat = () => {
  usermsg = typsendmsg.value.trim()
  // console.log(usermsg)
  if (usermsg == "") {
    alert(`ChatBot :) Please Write Your Questions`)
  }
  chatbox.appendChild(createChali(usermsg, "outgoing"));
  chatbox.scrollTo(0,chatbox.scrollHeight)

  setTimeout(() => {
const incomingchali=createChali("Thinking....", "incoming");
    chatbox.appendChild(incomingchali);
    chatbox.scrollTo(0,chatbox.scrollHeight)
    genretResponce(incomingchali)

  }, 600);
  typsendmsg.value="";
}
sendmsg.addEventListener('click', handlechat)







// let btn = document.getElementsByClassName("response")[0];
// let mainbody = document.getElementsByClassName("mainbody")[0];
// btn.addEventListener("click", () => {
//   mainbody.classList.toggle("showchat");
//   btn.classList.toggle("showchat");
// });

// // Function to create chat messages
// const createChali = (msg, classname) => {
//   const chal = document.createElement("li");
//   chal.classList.add("chat", classname);
//   let chatContent = classname === "outgoing" 
//     ? `<p>${msg}</p>` 
//     : `<span><i class="fa-solid fa-robot"></i></span><p>${msg}</p>`;
//   chal.innerHTML = chatContent;
//   return chal;
// };

// // Initialize variables
// let usermsg;
// const api_key = "AIzaSyATfxq3qbQiAE6v5kfRqzE2eA6F-NMyxAQ"
// // Function to generate a response from OpenAI API
// const genretResponce = () => {
//   let chatApi =`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${api_key}`;

//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
     
//     },
    // body: JSON.stringify({
    //  contents:[{
    //   role:"user",
    //   parts:[{text:usermsg}]
    //  }]
    // })
//   };

//   fetch(chatApi, requestOptions)
//     .then(res => res.json())
//     .then(data => {
//       alert("hello")
//       console.log(data);
//       const botResponse = data.choices[0]?.message?.content || "No response from bot";
//       chatbox.appendChild(createChali(botResponse, "incoming"));
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       chatbox.appendChild(createChali("Sorry, there was an error. Please try again later.", "incoming"));
//     });
// };

// // Function to handle chat interactions
// let handlechat = () => {
//   usermsg = typsendmsg.value.trim();

//   if (usermsg === "") {
//     alert("ChatBot :) Please Write Your Questions");
//     return; // Exit if the message is empty
//   }

//   chatbox.appendChild(createChali(usermsg, "outgoing"));

//   // Show a "Thinking..." message and generate a response
//   setTimeout(() => {
//     chatbox.appendChild(createChali("Thinking....", "incoming"));
//     genretResponce();
//   }, 600);

//   // Clear the textarea after sending the message
//   typsendmsg.value = '';
// };

// let sendmsg = document.querySelector(".input button");
// let typsendmsg = document.querySelector(".input textarea");
// let chatbox = document.querySelector(".chatbox");

// sendmsg.addEventListener('click', handlechat);
