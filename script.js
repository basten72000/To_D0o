

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

  function get_json(path) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            resolve(data); // Résoudre la promesse avec les données JSON
          } else {
            reject(xhr.statusText); // Rejeter la promesse avec le message d'erreur
          }
        }
      };
      xhr.send();
    });
  }
  
  document.body.onload = function() {
    get_json('../dataBase.json').then(function(data) {
        for (var i = 0; i < data.length; i++) {
            add_card(data[i]["titre"],data[i]["iner"],data[i]["bgcolor"])
          }
      });





  }
  
