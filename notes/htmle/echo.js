function init(){
    for (let form of document.getElementsByTagName("form")){
        form.onsubmit=onClickedSubmit;
    }
}
function onClickedSubmit(event){
    let fd = new FormData(event.target);
    let formdata = [];
    for(var pair of fd.entries()) {
      formdata.push([pair[0],pair[1]]);
    }
    window.localStorage.setItem('formdata', JSON.stringify(formdata));
}
onload=init