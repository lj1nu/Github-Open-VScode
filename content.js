var is_set = false;

function updateBtn() {
    if(is_set) return;
    try{
        var row = document.querySelector('[data-open-app="link"]').parentElement;
        var new_row = row.cloneNode();
        var str = document.createElement('a');
        str.setAttribute('class','d-flex flex-items-center color-text-primary text-bold no-underline');
        str.append(document.querySelector('.octicon-desktop-download').cloneNode(true));
        str.append("Open with Visual Studio Code");
        var url = document.querySelectorAll(".input-group")[1].querySelector(".form-control").value;
        str.setAttribute('href', 'vscode://vscode.git/clone?url=' + encodeURI(url));
        new_row.append(str);
        row.parentElement.append(new_row);
        clearInterval(checkExist);
    }catch(e){
        ;
    }
}

var checkExist = setInterval(updateBtn, 500);
