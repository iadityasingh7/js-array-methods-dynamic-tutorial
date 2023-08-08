let innerElementsList = document.querySelectorAll("#pushPopContainer .innerDiv");
insertHTML(innerElementsList);

function insertHTML(elementsList) {
    for (let i = 0; i < elementsList.length; i++) {
        let innerElement = elementsList[i];
        innerElement.innerHTML = i + 1;
        innerElement.classList.add('innerDiv_theme');
    }
}

function pushElement() {
    let outer = document.getElementById("pushPopContainer");
    let newElement = document.createElement("div");

    newElement.className = 'innerDiv';
    
    let node = document.createTextNode(innerElementsList.length + 1)
    newElement.appendChild(node);
    outer.appendChild(newElement);
    innerElementsList = document.querySelectorAll("#pushPopContainer .innerDiv");
    
    setTimeout(() => {
        console.log(innerElementsList[innerElementsList.length - 1]);
        innerElementsList[innerElementsList.length - 1].classList.add('innerDiv_new');
    }, 100)

}

function popElement() {
    innerElementsList[innerElementsList.length - 1].style.backgroundColor = 'transparent';
    innerElementsList[innerElementsList.length - 1].style.color = '#d3d3d3';

    setTimeout(() => {
        innerElementsList[innerElementsList.length - 1].remove();
        innerElementsList = document.querySelectorAll("#pushPopContainer .innerDiv");
    }, 1400);
}

let innerElementsList2 = document.querySelectorAll("#shiftUnshiftContainer .innerDiv");
insertHTML(innerElementsList2);

function shiftElement() {
    innerElementsList2[0].style.backgroundColor = 'transparent';
    innerElementsList2[0].style.color = '#d3d3d3';

    setTimeout(() => {
        innerElementsList2[0].remove();
        innerElementsList2 = document.querySelectorAll("#shiftUnshiftContainer .innerDiv");
    }, 1900);
    }

function unshiftElement() {
    let outer = document.getElementById("shiftUnshiftContainer")
    var newElement = document.createElement("div");

    newElement.className = 'innerDiv'

    let textNode = document.createTextNode(innerElementsList2.length + 1)
    newElement.appendChild(textNode);
    
    outer.insertBefore(newElement, innerElementsList2[0] );

    innerElementsList2 = document.querySelectorAll("#shiftUnshiftContainer .innerDiv");

    setTimeout(() => {
        innerElementsList2[0].classList.add('innerDiv_new');
    }, 100)
}

