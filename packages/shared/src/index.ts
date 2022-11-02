

export function copy(content: string, cb: Function) {
  const aux = document.createElement("input"); 
  aux.setAttribute("value", content); 
  document.body.appendChild(aux); 
  aux.select();
  document.execCommand("copy"); 
  document.body.removeChild(aux);
  cb && cb()
}