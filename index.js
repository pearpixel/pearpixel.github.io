const headeritems = [{text:"c/c++"}]
function generate_header(element) 
{
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = "dendan";

  for(let i = 0; i < headeritems.length; i++) {
    const item = document.createElement('div');
    item.textContent = headeritems[i].text;
    header.appendChild(item);
  }

  element.appendChild(header);
}

const hwl = document.getElementById('root');
generate_header(hwl);
