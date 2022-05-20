var start = 0;
var end = 00;
async function getdata() {
  await fetch("https://handutran.github.io/message_hd.json")
    .then(response => response.json())
    .then(json => {
      data = json
      start=data.messages.length-50;
      end=data.messages.length-1;
      loadparticipants(data)
      loadsearchresult(data)
      $('#mCustomScrollbar').mCustomScrollbar("scrollTo", document.getElementById(`message_${end - 1}`).offsetTop);
    });
}

var data
var searchdata=[];
var participants=[];
var sender_name;
var sender_index;
getdata();
var rs = []
var list = [];
document.getElementById("search-btn").addEventListener("click", search);
document.getElementById("search-message").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});
function changepaticipant(index){
  console.log(index);
  sender_name=participants[index].name;
  sender_index=index;
  document.getElementById("chat-info").innerHTML=`<figure class="avatar ms-1">
  <img
      src="./asset/avatar-${sender_index}.jpg"
      class="rounded-circle"
      alt="image"
    />
</figure>
<div class="mt-1">
  <h5 class="mb-1">${sender_name}</h5>
</div>`
loadsearchresult(data) ;
}
function loadparticipants(data){
  // participants= [{ "name": "sđs" }, { "name": "3434" }]
  participants=data.participants
  sender_name=participants[0].name;
  sender_index=0;
  document.getElementById("chat-info").innerHTML=`<figure class="avatar ms-1">
  <img
      src="./asset/avatar-0.jpg"
      class="rounded-circle"
      alt="image"
    />
</figure>
<div class="mt-1">
  <h5 class="mb-1">${participants[0].name}</h5>
</div>`
  document.getElementById("list_user").innerHTML="";
  for(var i=0;i<participants.length;i++){
    document.getElementById("list_user").innerHTML+=`<div
    class="dropdown-item"
    onclick=changepaticipant(${i})
    >${participants[i].name}</div>`
  }
}
function loadsearchresult(data) {

  console.log("start ", start)
  console.log("end", end)
  var messages = data.messages;
  

  var list = [];
  var index = start;

  while (index < end) {
    // console.log(messages[index])
    // if(messages[index].content.includes('to your message')) index++;
    if (messages[index].photos || messages[index].videos) {
      if (messages[index].videos) index++;
      else {
        for (var i = 0; i < messages[index].photos.length; i++) {
          var message = {
            sender_name: messages[index].sender_name,
            timestamp_ms: messages[index].photos[i].creation_timestamp,
            photo: messages[index].photos[i].uri,
            ids: index,
            type: "img"
          }
          list.push(message);
        }
        index++;
      }

    } else {
      var message = {
        sender_name: messages[index].sender_name,
        timestamp_ms: messages[index].timestamp_ms,
        messages: [messages[index].content],
        reactions:[messages[index].reactions?messages[index].reactions:0],
        ids: [index],
        type: "text"
      }
      while (index < end - 1 && messages[index + 1].timestamp_ms == messages[index].timestamp_ms && messages[index + 1].sender_name == messages[index].sender_name) {

        
        if (messages[index + 1].photos) {
          break;
        }
        if(messages[index+1].content.includes('to your message')){
          console.log(messages[index+1])
          index++;
          continue;
        }
        message.messages.push(messages[index + 1].content)
        message.reactions.push(messages[index+1].reactions?messages[index+1].reactions:0);
        message.ids.push(index + 1)
        index++;
      }
      list.push(message);
      console.log(message)
      index++;
    }
  }
  document.getElementById("messages").innerHTML = "";
  if (start != 0) {
    document.getElementById("messages").innerHTML +=
      `<div class="chat-line">
         <span class="chat-date" id="load_prv_btn" onclick=loadprevious()>Tải thêm</span>
     </div>`;
  }

  for (var i = 0; i < list.length; i++) {
    // console.log(list[i])
    if (list[i].sender_name == sender_name) {
      var chatcontent = ''
      if (list[i].type == 'text') {
        if (list[i].messages.length == 1) {
          chatcontent = `<div>
                <div id="message_${list[i].ids[0]}" class="message-content" style="display: inline-block;" >
                  <div>${list[i].messages[0].split('\n').join('</div><div>')}</div>
                </div>
                ${
                  list[i].reactions[0]!=0?`<div class="reaction_box">
                      <div class="reaction_icon">`
                        +list[i].reactions[0][0].reaction+
                      `</div>
                    </div>`:""
                }
              </div>`
        } else {
          // console.log(list[i].messages[0]);
          chatcontent = `<div>
                <div id="message_${list[i].ids[0]}" class="message-content message-content-custom1" style="display: inline-block" >
                    <div>${list[i].messages[0].split('\n').join('</div><div>')}</div>
                    </div>
                    ${
                      list[i].reactions[0]!=0?`<div class="reaction_box">
                          <div class="reaction_icon">`
                            +list[i].reactions[0][0].reaction+
                          `</div>
                        </div>`:""
                    }
                </div>`
          for (var j = 1; j < list[i].messages.length - 1; j++) {
            chatcontent += `<div>
                    <div id="message_${list[i].ids[j]}" class="message-content message-content-custom2" style="display: inline-block">
                        <div>${list[i].messages[j].split('\n').join('</div><div>')}</div>
                        </div>
                        ${
                          list[i].reactions[j]!=0?`<div class="reaction_box">
                              <div class="reaction_icon">`
                                +list[i].reactions[j][0].reaction+
                              `</div>
                            </div>`:""
                        }
                    </div>`
          }
          chatcontent += `<div>
                <div id="message_${list[i].ids[list[i].ids.length - 1]}" class="message-content message-content-custom3" style="display: inline-block">
                    <div>${list[i].messages[list[i].messages.length - 1].split('\n').join('</div><div>')}</div>
                    </div>
                    ${
                      list[i].reactions[list[i].ids.length - 1]!=0?`<div class="reaction_box">
                          <div class="reaction_icon">`
                            +list[i].reactions[list[i].ids.length - 1][0].reaction+
                          `</div>
                        </div>`:""
                    }
                </div>`
        }


        document.getElementById("messages").innerHTML +=
          `<div class="chats">
            <div class="chat-avatar">
              <img
                src="./asset/avatar-${sender_index}.jpg"
                class="rounded-circle dreams_chat mCS_img_loaded"
                alt="image"
              />
            </div>
            <div class="chat-content" onmouseover=show_time("time-${i}") onmouseout=hide_time("time-${i}") >
              ${chatcontent}
        
              <div class="chat-time" id="time-${i}">
                <div>
                  <div class="time" >${list[i].timestamp_ms}</div>
                </div>
              </div>
            </div>
            
          </div>`
      }else if (list[i].type == 'img'){
        console.log(list[i])
        document.getElementById("messages").innerHTML +=
      `<div class="chats">
      <div class="chat-avatar">
        <img
          src="./asset/avatar-${sender_index}.jpg"
          class="rounded-circle dreams_chat mCS_img_loaded"
          alt="image"
        />
      </div>
      <div class="chat-content" onmouseover=show_time("time-${i}") onmouseout=hide_time("time-${i}") >
          <img class="img-send" src="${list[i].photo}" alt="">
        
        <div class="chat-time" id="time-${i}">
          <div>
            <div class="time">${list[i].timestamp_ms}</div>
          </div>
        </div>
      </div>
      
    </div>`;
      }
    } else {
      var chatcontent = ''
      if (list[i].type == 'text') {
        if (list[i].messages.length == 1) {
          chatcontent = `<div >
                <div id="message_${list[i].ids[0]}"  class="message-content " style="display: inline-block;">
                    <div>${list[i].messages[0].split('\n').join('</div><div>')}</div>
                  </div>
                  ${
                    list[i].reactions[0]!=0?`<div class="reaction_box">
                        <div class="reaction_icon">`
                          +list[i].reactions[0][0].reaction+
                        `</div>
                      </div>`:""
                  }
              </div>`
        } else {
          chatcontent = `<div>
                <div id="message_${list[i].ids[0]}"  class="message-content message-content-custom1" style="display: inline-block">
                    <div>${list[i].messages[0].split('\n').join('</div><div>')}</div>
                    </div>
                    ${
                      list[i].reactions[0]!=0?`<div class="reaction_box">
                          <div class="reaction_icon">`
                            +list[i].reactions[0][0].reaction+
                          `</div>
                        </div>`:""
                    }
                </div>`
          for (var j = 1; j < list[i].messages.length - 1; j++) {
            chatcontent += `<div style="width:100%;">
                    <div id="message_${list[i].ids[j]}" class="message-content message-content-custom2" style="display: inline-block">
                        <div>${list[i].messages[j].split('\n').join('</div><div>')}</div>
                        </div>
                        ${
                          list[i].reactions[j]!=0?`<div class="reaction_box">
                              <div class="reaction_icon">`
                                +list[i].reactions[j][0].reaction+
                              `</div>
                            </div>`:""
                        }
                    </div>`
          }
          chatcontent += `<div>
                <div id="message_${list[i].ids[list[i].ids.length - 1]}" class="message-content message-content-custom3" style="display: inline-block">
                    <div>${list[i].messages[list[i].messages.length - 1].split('\n').join('</div><div>')}</div>
                    </div>
                    ${
                      list[i].reactions[list[i].ids.length - 1]!=0?`<div class="reaction_box">
                          <div class="reaction_icon">`
                            +list[i].reactions[list[i].ids.length - 1][0].reaction+
                          `</div>
                        </div>`:""
                    }
                </div>`
        }


        document.getElementById("messages").innerHTML +=
          `<div class="chats chats-right ">
                <div class="chat-content" onmouseover=show_time("time-${i}") onmouseout=hide_time("time-${i}") >
                  ${chatcontent}
                  <div class="chat-time .message-content-custom1" id="time-${i}">
                    <div>
                      <div class="time">
                      ${list[i].timestamp_ms}
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
      }else if (list[i].type == 'img'){
        console.log(list[i])
        document.getElementById("messages").innerHTML +=
      ` <div class="chats chats-right ">
      <div class="chat-content" onmouseover=show_time("time-${i}") onmouseout=hide_time("time-${i}") >
        <img class="img-send" src="${list[i].photo}" alt="">
        <div class="chat-time .message-content-custom1" id="time-${i}">
          <div>
            <div class="time">
            ${list[i].timestamp_ms}
            </div>
          </div>
        </div>
      </div>`;
      }
    }
  }
  if (end != (data.messages.length - 1)) {
    document.getElementById("messages").innerHTML +=
      `<div class="chat-line">
    <span class="chat-date" id="load_more_btn" onclick=loadnext()>Tải thêm</span>
     </div>`
  }

  return list;
};

function loadnext() {
  console.log("next");
  end += 50;
  if (end >= data.messages.length) {
    end = data.messages.length - 1;
  }
  if(end-start>300){
    start+=50;
  }
  loadsearchresult(data);
}

function loadprevious() {
  var old = start
  start -= 50;
  if (start < 0) start = 0;
  if(end-start>200){
    end-=50;
  }
  console.log(start)
  console.log(end)
  loadsearchresult(data);
  $('#mCustomScrollbar').mCustomScrollbar("scrollTo", document.getElementById(`message_${old}`).offsetTop);
}

function search() {
  searchdata=[];
  var keyword =document.getElementById("search-message").value;
  var messages = data.messages;
  document.getElementById("search-list").innerHTML=""
  for(var i=0;i<messages.length;i++){
    if(messages[i].content){
      if(messages[i].content.toLowerCase().includes(keyword.trim().toLowerCase())){
        messages[i].index=i;
        searchdata.push(messages[i])
        document.getElementById("search-list").innerHTML+=`<li class="user-list-item">
        <div class="users-list-body" onclick=viewmessage(${i})>
          <div>
            <p>${messages[i].content}</p>
          </div>
          <div class="last-chat-time">
            <small class="text-muted">${messages[i].timestamp_ms}</small>
          </div>
        </div>
      </li>`
      }
    }
  }
  console.log(searchdata)
}
function viewmessage(id){
  start=id-20;
  end=id+20;
  if(start<0) start=0;
  if(end>data.messages.length-1) end=data.messages.length-1;
  console.log(start)
  console.log(end)
  loadsearchresult(data);
  $('#mCustomScrollbar').mCustomScrollbar("scrollTo", document.getElementById(`message_${(id-3)>0?(id-3):id}`).offsetTop);
}
function show_time(id) {
  document.getElementById(id).style.display="-webkit-flex"
}
function hide_time(id) {
  document.getElementById(id).style.display="none"
}