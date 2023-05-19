

function add_card(title, iner, bgcolor) {
    var body_content = document.getElementsByClassName("body-content")[0];
  
    var ul = document.createElement('ul');
    ul.className = 'toDo';
  
    var li = document.createElement('li');
  
    var divHead = document.createElement('div');
    divHead.className = 'head';
    divHead.textContent = title;
    divHead.style.backgroundColor = bgcolor; 
    
    var divContent = document.createElement('div');
    divContent.className = 'content';
    divContent.textContent = iner; 
    
    var divCheck = document.createElement('div');
    divCheck.id = 'check';
  
    
    li.appendChild(divHead);
    li.appendChild(divContent);
    li.appendChild(divCheck);
  
    ul.appendChild(li);
  
    body_content.appendChild(ul);
  }
  

  

  document.body.onload=function(){
    add_card("", "", '#347cb5');
  }
