import './style.css';


function component() {
    const element = document.createElement('div');
  
    
    element.innerHTML = "hello World";
  
    return element;
  }
  
  document.body.appendChild(component());