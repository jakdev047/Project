function $(selector) {
    return document.querySelector(selector);
}                                                                
/*========================
        variable_name
==========================*/
let root = $('#root');
let jumbotronDiv = $("#jumbotron");
let title = $("#title");
let arr = [
    {title:title.innerHTML.trim(),},
    {title: 'Hello Java Script'}
]

let isShown= true;

let p =$('p');
p.setAttribute('id','my-para');

/*========================
        style
==========================*/

let jumbotronStyle ={
    background:'salmon',
    maxWidth:'400px',
    height:'400px',
    margin: '50px auto',
    overflow:"hidden"
}

let titleStyle = {
    color:'#fff',
    textAlign:'center',
    padding:'30px 0'
}

let pStyle = {
    color: '#000',
    textAlign: 'center',
    fontSize:'20px',
    padding: '30px 0'
}



Object.assign(title.style, titleStyle);
Object.assign(p.style, pStyle);
Object.assign(jumbotronDiv.style, jumbotronStyle);

/*========================
        function
==========================*/
let randomColorChange;

jumbotronDiv.addEventListener('mouseenter', function () {
    clearInterval(randomColorChange);
});

jumbotronDiv.addEventListener('mouseleave', function () {
    randomColorChange = colorChange();
});

randomColorChange = colorChange();
function colorChange() { 

    let randomColorChange = setInterval(function () {

        //random color generate
        let x = Math.round(Math.random() * 255);
        let y = Math.round(Math.random() * 255);
        let z = Math.round(Math.random() * 255);
        let bg = "rgb(" + x + ", " + y + ", " + z + " )";
        jumbotronDiv.style.background = bg;

        if (isShown) {
            title.innerHTML = arr[0].title;
            isShown=false;
        }else{
            title.innerHTML = arr[1].title;
            isShown = true;
        }

    }, 1000);

    return randomColorChange;

};

/*========================
        edit of p
==========================*/

p.addEventListener('click',function(){

    // store value of p transfer to value of paraValue
    let paraValue = p.innerHTML.trim(); 

    // remove of p tag
    jumbotronDiv.removeChild(p);

    // creat of value of textArea
    let textArea = document.createElement('textarea');
    let textAreaStyle = {
        textAlign: "center",
        width:"100%",
        fontSize: "20px",
        height:"120px",
        padding: "30px 0",
        border:"none"
    };
    Object.assign(textArea.style, textAreaStyle);
    jumbotronDiv.appendChild(textArea);

    // store value of paraValue transfer to value of textArea
    textArea.innerHTML = paraValue.trim();

    textArea.addEventListener('keypress',function(event) {
        if (event.keyCode === 13) {
            let editValue = event.target.value;

            // remove of textarea tag
            jumbotronDiv.removeChild(textArea);

            // creat of value of editPara
            let editPara = document.createElement('p');
            let editParaStyle = {
                textAlign: "center",
                width: "100%",
                fontSize: "20px",
                height: "120px",
                padding: "30px 0",
                border: "none"
            };
            Object.assign(editPara.style, editParaStyle);
            jumbotronDiv.appendChild(editPara);

            editPara.innerHTML = editValue;
        }

    });


});

