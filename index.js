//document.getElementById("refreshVision").addEventListener("click", getAllTasks);
    //document.getElementById("update").addEventListener("click", updateTasks);
  var btns=document.getElementsByClassName("card");
    for(i=0;i<btns.length;i++)
    {
        btns[i].addEventListener("click",function(event){
        
            let taskName=getTaskName(event.currentTarget);
        //let taskName=getCardChildNode(event.currentTarget,".//h4")[0].innerText;
            request=new XMLHttpRequest();
            request.responseType="document";
            request.open('GET','http://10.148.68.58:3000/api/task/'+taskName);
            request.send();
            request.onreadystatechange=function(){
            if(request.readyState==4&&request.status==200){
       
            
            };
        };
    });
}
    
    var cards = document.getElementById("board1").getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (event) {
            var target = event.currentTarget;
            /*event.taget is element which trigered the event.
                event.currentTarget is the element which catch the event.
            */

            //alert(target.class);
            if (target.class = "card") {
                //alert(target.innerHTML);
                var temp = target.cloneNode(true);
                var card = AddButtons(temp);
                document.getElementById("b2").appendChild(card);
                event.stopPropagation();
            }
        }, true
        );
    }
    function AddButtons(node) {
        var btnsuccess = document.createElement("button");
        btnsuccess.className = "btn-success";
        btnsuccess.innerText = "►";
        btnsuccess.addEventListener("click",ExecuteTask);

        var btndanger = document.createElement("button");
        btndanger.className = "btn-danger";
        btndanger.innerText = "X";
        btndanger.hidden=true

        node.appendChild(btndanger);
        node.appendChild(btnsuccess);
        return node;
    }


    function getCardChildNode(node, xpath) {
        //alert("getCard");
        var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        var nodes = result.iterateNext();
        var array = new Array();
        while (nodes) {
            array.push(nodes.innerText);
            nodes = result.iterateNext();
        }
        //alert(nodes.innerText);
        return array;
    }


    function getAllTasks() {
        var board2 = document.getElementById("board2");

        var results = getCardChildNode(board2, "//div[@@id='board2']//div[@@class='card']/h4");
        return results;

    }
    function updateTasks() {
        var vision = document.getElementById("vision").innerText;
        var object = { "vision": vision, "tasks": getAllTasks() };

        var json = JSON.stringify(object);
        //alert(jdson);
        $.ajax({
            url: "http://localhost:64940/project/UpdateTasks",
            type: "POST",
            contentType: "json",
            data: json,
            success: function () {
                alert("success");
            }
        });
    }
    function getTaskName(card){
        for(i=0;i<card.childNodes.length;i++)
        {
            if(card.childNodes[i].nodeName=='H4')
     {
        return card.childNodes[i].innerText;
        }
       
        }


    }
    function sendrequest(){
        let taskName=getCardChildNode(event.currentTarget,"./div/h4").innerText;
        request=new XMLHttpRequest();
        request.open('GET','http://10.148.68.58:3000/api/task/Batch Config');
        request.send();
        request.onreadystatechange=function(){
            if(request.readyState==4&&request.status==200){
        var b=request.responseText;
        if(b=='true'){
            alert('success');
        }else{
            alert('fail');
        }
            }
        };
            
             
    }
    function ExecuteTask(event){
        let taskName=getTaskName(event.currentTarget);

        request=new XMLHttpRequest();
        request.open('GET','http://10.148.68.58:3000/api/task/'+taskName);
        request.send();
    }
	