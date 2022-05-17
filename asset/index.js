async function getdata() {
    await fetch("https://handutran.github.io/message_hd.json")
        .then(response => response.json())
        .then(json => {
            data = json
            loadsearchresult(data)
        });
}
var data
getdata();
var rs = []

function loadsearchresult(data) {
    var messages = data.messages;
    var start = 0;
    var end = 200;
    var list = [];
    var index = start;

    while (index < end) {
        if(messages[index].content.includes('to your message')) index++;
        var message = {
            sender_name: messages[index].sender_name,
            timestamp_ms: messages[index].timestamp_ms,
            messages: [messages[index].content]
        }
        while (index < end - 1 && messages[index + 1].timestamp_ms == messages[index].timestamp_ms && messages[index + 1].sender_name == messages[index].sender_name) {
            if(messages[index].content.includes('to your message')) index++;
            message.messages.push(messages[index + 1].content)
            index++;
        }
        list.push(message);
        index++;
    }
    console.log(list)
    for (var i = 0; i < list.length; i++) {
        console.log(list[i])
        if (list[i].sender_name == 'Trần Hân Du') {
            var chatcontent = ''
            if (list[i].messages.length == 1) {
                chatcontent = `<div>
                <div class="message-content" style="display: inline-block;" id="message_${i}0">
                  <div>${list[i].messages[0].split('\n').join('</div><div>')}</div>
                </div>
              </div>`
            } else {
                chatcontent = `<div>
                <div id="message_${i}0" class="message-content message-content-custom1" style="display: inline-block" >
                    <div>${list[i].messages[0].split('\n').join('</div><div>')}</div>
                    </div>
                </div>`
                for (var j = 1; j < list[i].messages.length - 1; j++) {
                    chatcontent+= `<div>
                    <div id="message_${i.toString()+j.toString()}" class="message-content message-content-custom2" style="display: inline-block">
                        <div>${list[i].messages[j].split('\n').join('</div><div>')}</div>
                        </div>
                    </div>`
                }
                chatcontent+= `<div>
                <div id="message_${i.toString()+(list[i].messages.length-1).toString()}" class="message-content message-content-custom3" style="display: inline-block">
                    <div>${list[i].messages[list[i].messages.length-1].split('\n').join('</div><div>')}</div>
                    </div>
                </div>`
            }


            document.getElementById("messages").innerHTML +=
                `<div class="chats">
            <div class="chat-avatar">
              <img
                src="./asset/avatar-2.jpg"
                class="rounded-circle dreams_chat mCS_img_loaded"
                alt="image"
              />
            </div>
            <div class="chat-content" >
              ${chatcontent}
        
              <div class="chat-time">
                <div>
                  <div class="time">${list[i].timestamp_ms}</div>
                </div>
              </div>
            </div>
            
          </div>`
        } else {
            var chatcontent = ''
            if (list[i].messages.length == 1) {
                chatcontent = `<div >
                <div id="message_${i}0"  class="message-content " style="display: inline-block;">
                    <div>${list[i].messages[0].split('\n').join('</div><div>')}</div>
                  </div>
              </div>`
            } else {
                chatcontent = `<div>
                <div id="message_${i}0"  class="message-content message-content-custom1" style="display: inline-block">
                    <div>${list[i].messages[0].split('\n').join('</div><div>')}</div>
                    </div>
                </div>`
                for (var j = 1; j < list[i].messages.length - 1; j++) {
                    chatcontent+= `<div style="width:100%;">
                    <div id="message_${i.toString()+j.toString()}" class="message-content message-content-custom2" style="display: inline-block">
                        <div>${list[i].messages[j].split('\n').join('</div><div>')}</div>
                        </div>
                    </div>`
                }
                chatcontent+= `<div>
                <div id="message_${i.toString()+(list[i].messages.length-1).toString()}" class="message-content message-content-custom3" style="display: inline-block">
                    <div>${list[i].messages[list[i].messages.length-1].split('\n').join('</div><div>')}</div>
                    </div>
                </div>`
            }


            document.getElementById("messages").innerHTML +=
                `<div class="chats chats-right ">
                <div class="chat-content">
                  ${chatcontent}
                  <div class="chat-time .message-content-custom1">
                    <div>
                      <div class="time">
                      ${list[i].timestamp_ms}
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
        }
    }
    console.log(document.getElementById('message_1300'))
    $('#mCustomScrollbar').mCustomScrollbar("scrollTo", document.getElementById(`message_${list.length-1}${list[list.length-1].messages.length-1}`).offsetTop);
    // for(var i=start;i<=end;i++){
    //     console.log(messages[i])
    //     // if(messages[i].sender_name=='Trần Hân Du'){
    //     //     document.getElementById("messages").innerHTML+=
    //     //     `<div class="chats">
    //     //     <div class="chat-avatar">
    //     //       <img
    //     //         src="./asset/avatar-2.jpg"
    //     //         class="rounded-circle dreams_chat mCS_img_loaded"
    //     //         alt="image"
    //     //       />
    //     //     </div>
    //     //     <div class="chat-content" >

    //     //       <div>
    //     //         <div class="message-content" style="display: inline-block">
    //     //           <div>${messages[i].content}</div>
    //     //         </div>
    //     //       </div>

    //     //       <div class="chat-time">
    //     //         <div>
    //     //           <div class="time">${messages[i].timestamp_ms}</div>
    //     //         </div>
    //     //       </div>
    //     //     </div>

    //     //   </div>`
    //     // }else{
    //     //     document.getElementById("messages").innerHTML+=
    //     //     `<div class="chats chats-right ">
    //     //     <div class="chat-content">
    //     //       <div>
    //     //       <div class="message-content" style="display: inline-block">
    //     //         <div>${messages[i].content}</div>
    //     //       </div>
    //     //       </div>
    //     //       <div class="chat-time .message-content-custom1">
    //     //         <div>
    //     //           <div class="time">
    //     //           ${messages[i].timestamp_ms}
    //     //           </div>
    //     //         </div>
    //     //       </div>
    //     //     </div>
    //     //   </div>`
    //     // }

    //     if(i>0){
    //         messages[i].type="";
    //         if()
    //     }

    // }

};