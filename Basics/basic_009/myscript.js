let divHeader = {
    width: '1024px',
    height: '88px',
    position: 'relative',
    background: '#002341'
};

divHeader.positionOb = {
    top: 200,
    left:120
};

console.log(divHeader);

for(let key in divHeader){
    console.log(key + ':' + divHeader[key] + ';');    
}
