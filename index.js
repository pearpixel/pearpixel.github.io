const headeritems = [{text:"c/c++"}]
function generate_header(element) 
{
  const navigator = document.createElement('head');

  const elemes = document.createElement('navelems');
  const title = document.createElement('h1');
  title.textContent = "dendan";

  for(let i = 0; i < headeritems.length; i++) {
    const item = document.createElement('div');
    item.textContent = headeritems[i].text;
    item.className = "bordered_element";
    elemes.appendChild(item);
  }

  navigator.appendChild(title);
  navigator.appendChild(elemes);
  element.appendChild(navigator);
}

const hwl = document.getElementById('root');
generate_header(hwl);
