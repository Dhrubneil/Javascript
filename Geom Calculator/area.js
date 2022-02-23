// let more = document.getElementById('main');

// let styledRules = window.getComputedStyle(more, '::after');
// console.log(styledRules.content);

// =======================================================

//showing formula on hovering over status card

let idObj = document.getElementById('obj-op');
let idObj1 = document.getElementById('obj-op-1');

let idFormula = document.getElementById('formula-1');

idObj.addEventListener('mouseover', function(){
  idObj.style.borderBottom = "2px solid seagreen";

  idFormula.style.opacity = 0.5;

  if(myObject == "Cone" && selectedOp.substring(12) == "Volume"){
    idFormula.style.height = "250px";
  }
  else{
    idFormula.style.height = "200px";
  }
  //idFormula.style.height = "200px";

  writeFormula(selectedOp.substring(12), myObject);
})

idObj.addEventListener('mouseout', function(){
  idObj.style.borderBottom = "none";

  idFormula.style.opacity = 0;
  idFormula.style.height = "0px";
})

idObj1.addEventListener('mouseover', function(){
  idObj1.style.borderBottom = "2px solid seagreen";

  idFormula.style.opacity = 0.5;
  if(myObject == "Cone" && selectedOp.substring(12) == "Volume"){
    idFormula.style.height = "250px";
  }
  else{
    idFormula.style.height = "200px";
  }

  writeFormula(selectedOp.substring(12), myObject);

})

idObj1.addEventListener('mouseout', function(){
  idObj1.style.borderBottom = "none";

  idFormula.style.opacity = 0;
  idFormula.style.height = "0px";

})


function writeFormula(currentOption, currentObject){
  if(currentObject){
    //Rectangle
    if(currentObject == "Rectangle"){
      if(currentOption == "Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                (height x width)
            </span> 
            or 
            <span class="emp">
                (length x width)
            </span> 
            unit<sup>2</sup>
        </p>`;
      }
      if(currentOption == "Perimeter"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                2(height + width)
            </span> 
            or 
            <span class="emp">
                2(length + width)
            </span> 
            units
        </p>`;
      }
    }
    //------------------------------------------------------------
    //Circle
     if(currentObject == "Circle"){
      if(currentOption == "Area"){
        idFormula.innerHTML = `
        <p>
            is defined by<br>
            <span class="emp">
                (&#960; x r<sup>2</sup>)
            </span> unit<sup>2</sup>; <br>where <br>
            <span class="emp">
                &#960; = 3.1416
            </span> and <br>
            <span class="emp">
                r = radius
            </span>
        </p>`;
      }
      if(currentOption == "Circumference"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                (2 x &#960; x r)
            </span> units; <br>where <br>
            <span class="emp">
                &#960; = 3.1416
            </span> and <br>
            <span class="emp">
                r = radius
            </span>
        </p>`;
      }
    }
    //------------------------------------------------------------
    //Square
     if(currentObject == "Square"){
      if(currentOption == "Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                Side<sup>2</sup>
            </span> unit<sup>2</sup>; <br>where<br> 
            <span class="emp">
                Side = length
            </span> or 
            <span class="emp">
                height
            </span> or 
            <span class="emp">
                width
            </span>
        </p>`;
      }
      if(currentOption == "Perimeter"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                (4 x side)
            </span> units; where<br> 
            <span class="emp">
                Side = length
            </span> or 
            <span class="emp">
                height
            </span> or 
            <span class="emp">
                width
            </span>
        </p>`;
      }
    }
    //------------------------------------------------------------
    //Cylinder
    if(currentObject == "Cylinder"){
      if(currentOption == "Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                2 x &#960; x r x (r + h)
            </span> 
            unit<sup>2</sup>; where<br>
            <span class="emp">
                &#960; = 3.1416, <br>r = radius, <br>h = height
            </span> or
            <span class="emp">
                length
            </span> <br>
            It can also be stated as <br>
            <span class="emp">Area = Base Area + Curved Area</span> 
        </p>`;
      }
      if(currentOption == "Curved Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                (2 x &#960; x r x h)
            </span> 
            unit<sup>2</sup>;
            where<br>
            <span class="emp">
                &#960; = 3.1416,<br> r = radius, <br>h = height
            </span> or
            <span class="emp">
                length
            </span>
        </p>`;
      }
      if(currentOption == "Base Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                2(&#960; x r<sup>2</sup>)
            </span> 
            unit<sup>2</sup>;
            where<br>
            <span class="emp">
                &#960; = 3.1416
            </span> and<br> 
            <span class="emp">
                r = radius
            </span> <br>
            It can also be stated as the<br>
            <span class="emp">"Total of 2 Circles' Area of Same Radius(r)"</span>
        </p>`;
      }
      if(currentOption == "Volume"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                (&#960; x r<sup>2</sup> x h)
            </span> 
            unit<sup>3</sup>; where<br>
            <span class="emp">
                &#960; = 3.1416, <br>r = radius, <br>h = height
            </span> or
            <span class="emp">
                length
            </span>
        </p>`;
      }
    }
    //------------------------------------------------------------
    //Rectangular Cube
    if(currentObject == "Rectangular Cube"){
        if(currentOption == "Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
                2(lxb + bxh + hxl)
            </span> 
            unit<sup>2</sup>; where<br>
            <span class="emp">
                l = length, <br>b = breadth
            </span>or 
            <span class="emp">width</span> and<br>
            <span class="emp">h = height
            </span>
        </p>`;
      }
       if(currentOption == "Volume"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
              (l x b x h)
            </span> 
            unit<sup>3</sup>; where<br>
            <span class="emp">
                l = length, <br>b = breadth
            </span>or 
            <span class="emp">width</span> and<br>
            <span class="emp">h = height
            </span>
        </p>`;
      }
      if(currentOption == "Diagonal Length"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
              &radic;(l<sup>2</sup> + b<sup>2</sup> + h<sup>2</sup>)
            </span> 
            unit; where<br>
            <span class="emp">
                l = length, <br>b = breadth
            </span>or 
            <span class="emp">width</span> and<br>
            <span class="emp">h = height
            </span>
        </p>`;
      }
    }
    if(currentObject == "Cone"){
      if(currentOption == "Slant Height"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
              &radic;(r<sup>2</sup> + h<sup>2</sup>)
            </span> 
            units; where<br>
            <span class="emp">
                r = radius
            </span> and<br>
            <span class="emp">
                h = height
            </span>
        </p>`;
      }
      if(currentOption == "Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
              &#960; x r x (r + l)
            </span> 
            unit<sup>2</sup>; where<br>
            <span class="emp">
                &#960; = 3.1416,
            </span><br>
            <span class="emp">
                r = radius
            </span> and<br>
            <span class="emp">
                l = slant height
            </span>
        </p>`;
      }
      if(currentOption == "Curved Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
              (&#960; x r x l)
            </span> 
            unit<sup>2</sup>; where<br>
            <span class="emp">
                &#960; = 3.1416,
            </span><br>
            <span class="emp">
                r = radius
            </span> and<br>
            <span class="emp">
                l = slant height
            </span>
        </p>`;
      }
      if(currentOption == "Base Area"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
              (&#960; x r<sup>2</sup>)
            </span> 
            unit<sup>2</sup>; where<br>
            <span class="emp">
                &#960; = 3.1416
            </span> and<br>
            <span class="emp">
                r = radius
            </span><br>
            It can also be stated as the <br>
            <span class="emp">
              "Area of a Circle of Same Radius(r)"
            </span>
        </p>`;
      }
      if(currentOption == "Volume"){
        idFormula.innerHTML = `
        <p>
            is defined by <br>
            <span class="emp">
              1/3 x (&#960; x r<sup>2</sup> x h)
            </span> 
            unit<sup>3</sup>; where<br>
            <span class="emp">
                &#960; = 3.1416,
            </span><br>
            <span class="emp">
                r = radius
            </span> and<br>
            <span class="emp">
                h = height
            </span><br>
            It can also be stated as <br> 
            <span class="emp">
              "One-third of the Volume of a Cylinder of Same Radius(r) and Height(h)"
            </span>
        </p>`;
      }
    }
  }
}

//========================================================

// showing more-options area clicking on the more-icon and hide the more-icon

let moreIcon = document.querySelector("#more-icon");

moreIcon.addEventListener("click", function(e){
    // alert('hello');

    // document.getElementById("more-ops").style.display = "block";

    document.getElementById("more-ops").style.transform = "scale(1)";
    moreIcon.style.transform = "scale(0)"; 
})

// =======================================================



// markups for the more-options area consisting of the collapse-icon, objects-list having the objects and their corresponding object-operations

let moreOptions = document.getElementById('more-ops');

moreOptions.innerHTML = `
<div id="collapse-icon">     
    <span>
        <i class="fas fa-angle-double-left"></i>
        <h3>Close</h3>
    </span>
</div>

<ul class="objects-list" id="obj-list">

  <li class="object"><h4>Triangle</h4>
    <ul class="object-ops">
      <li class="opt" id="tArea">> Calculate Area</li>
      <li class="opt" id="tPeri">> Calculate Perimeter</li>
    </ul>    
  </li>

  <li class="object"><h4>Rectangle</h4>
    <ul class="object-ops">
      <li class="opt" id="rArea">> Calculate Area</li>
      <li class="opt" id="rPeri">> Calculate Perimeter</li>
    </ul>    
  </li>
  
  <li class="object"><h4>Circle</h4>
    <ul class="object-ops">
      <li class="opt" id="cArea">> Calculate Area</li>
      <li class="opt" id="cPeri">> Calculate Circumference</li>
    </ul>
  </li>

  <li class="object"><h4>Square</h4>
    <ul class="object-ops">
      <li class="opt" id="sArea">> Calculate Area</li>
      <li class="opt" id="sPeri">> Calculate Perimeter</li>
    </ul>
  </li>
  
</ul>
`;

function addObject(newObjectName){

  let newNode = document.createElement("LI");
  newNode.className = "object";
  let newObjectHeader = document.createElement("H4");
  let newObject = document.createTextNode(newObjectName);
  newObjectHeader.appendChild(newObject);
  newNode.appendChild(newObjectHeader);

  let opList = document.createElement("UL");
  opList.className = "object-ops";

  if(newObjectName == "Cylinder"){
    opList.innerHTML = `
    <li class="opt" id="cyArea">> Calculate Area</li>
    <li class="opt" id="cyCurved">> Calculate Curved Area</li>
    <li class="opt" id="cyBase">> Calculate Base Area</li>
    <li class="opt" id="cyVolume">> Calculate Volume</li>
  `
  }

  if(newObjectName == "Rectangular Cube"){
    opList.innerHTML = `
    <li class="opt" id="rcArea">> Calculate Area</li>
    <li class="opt" id="rcVolume">> Calculate Volume</li>
    <li class="opt" id="rcDiagonal">> Calculate Diagonal Length</li>
  `
  }

  if(newObjectName == "Cone"){
    opList.innerHTML = `
    <li class="opt" id="cnSlant">> Calculate Slant Height</li>
    <li class="opt" id="cnArea">> Calculate Area</li>
    <li class="opt" id="cnCurved">> Calculate Curved Area</li>
    <li class="opt" id="cnBase">> Calculate Base Area</li>
    <li class="opt" id="cnVolume">> Calculate Volume</li>
  `
  }


  newNode.appendChild(opList);

  document.getElementById('obj-list').appendChild(newNode);
}

addObject("Cylinder");
addObject("Rectangular Cube");
addObject("Cone");



// selected option

let selectedOp;
let myObject = "Structure";

let statusText;


// these following lines optimize the code length by providing common rules to each of the options which will escape writing codes for all individual ids carrying the options   
let objectsList = document.querySelector('.objects-list');

let objects = objectsList.querySelectorAll('.object');

objects.forEach(object => {
  let objectOptions = object.querySelector('.object-ops');
  let options = objectOptions.querySelectorAll('.opt')

  options.forEach(option => {
    option.addEventListener('click', () =>{
      console.log(option.textContent);

      //selected option
      selectedOp = option.textContent;

      //selected parent
      let dirPar = option.parentElement;
      myObject = dirPar.parentElement.firstChild.innerHTML;
      console.log(myObject);

      document.getElementById('calc-btn').textContent = selectedOp.substring(2);


      let sideLine = document.querySelectorAll('.sideline');
      let sideLineArray = Array.from(sideLine);
      sideLineArray.forEach(function(elem){
        elem.style.animation = "";
        elem.style.borderBottom = "3px solid black"
      
      })

      // document.querySelector('.status').textContent = `${selectedOp.substring(12)} of ${myObject}`;

      statusText = `${selectedOp.substring(12)} of ${myObject}`;
    
      //showStatusCard();
    
    })
  })
})

// ======================================================

// hiding more-options area clicking on the collapse-icon and retaining the more-icon in it's place

let collapseIcon = document.querySelector("#collapse-icon");

collapseIcon.addEventListener("click", function(){
    // alert("Hey");
    let moreOps = document.getElementById("more-ops");
    // moreOps.style.display = "none";
    moreOps.style.transform = "scale(0)";
    moreIcon.style.transform = "scale(1)";
});

// ======================================================


// console.log(document.querySelectorAll('.object'));

// selecting all the elements having class "object" and storing them in an array

let objList = document.querySelectorAll('.object');
let liArray = Array.from(objList);

// for each element in the array adding a click event listener to show the hidden options - "object-ops" respective to that element - "object"

liArray.forEach(function(elem){
  elem.addEventListener('click', showOps)
})

// function that shows the hidden options that operates on the child having class "object-ops" of that particular object

function showOps(){
    if(this.firstChild.textContent == "Triangle"){
      document.querySelector('.triangle-info').style.display = "flex";
    }
    else{
      document.querySelector('.triangle-info').style.display = "none";
    }

    this.querySelector('.object-ops').classList.toggle('show-ops');

    document.getElementById('area').style.display = "none";
    document.getElementById('area1').style.display = "none";

    document.getElementById('again').style.display= "none";
    document.getElementById('again1').style.display = "none";

    document.getElementById('obj-op').style.borderLeft = '10px solid seagreen';
    document.getElementById('obj-op-1').style.borderLeft = '10px solid seagreen';

    
    document.getElementById('obj-op').style.animation = "none";
    document.getElementById('obj-op-1').style.animation = "none";
}

// =======================================================


function showStatusCard(){
  // document.querySelector('.status').style.animation = "show1 1s 1 forwards";
  // if animation is used, mouse hover effect doesn't work
  // I should sort out the bug
  
  let status = document.querySelector('.status');
  let newStatus = document.querySelector('.new-status');
  
  //status.style.opacity = "0.5";

  let className = status.className;

  if(className == "status"){
    status.classList.toggle('active');
    status.textContent = statusText;
    newStatus.style.transform = "translateX(50%)";
    newStatus.style.opacity = "0";
    newStatus.style.visibility = "hidden";

  }
  else if(className == "status active"){
    status.classList.toggle('active');
    newStatus.style.transform = "translateX(-111%)";
    newStatus.style.opacity = "0.5";
    newStatus.style.visibility = "visible";
    newStatus.textContent = statusText; 

  }  


  //status.style.transform = "translateX(-100%)";
    // selected option slider opacity control
  newStatus.addEventListener('mouseover', function(){
    this.style.opacity = "0.8";
  })

  newStatus.addEventListener('mouseout', function(){
    this.style.opacity = "0.5";
  })

}

// show status for all object-ops

let statusCard = document.querySelectorAll('.opt');
let statArray = Array.from(statusCard);

statArray.forEach(function(option){
  option.addEventListener('click', showStatusCard);
})


let heightIn = document.getElementById('height');
let widthIn = document.getElementById('width');
let radiusIn = document.getElementById('radius');
let lengthIn = document.getElementById('length');
let slantHeightIn = document.getElementById('slant-height');


let heightLabel = document.getElementById('lheight');
let widthLabel = document.getElementById('lwidth');
let radiusLabel = document.getElementById('lradius');
let lengthLabel = document.getElementById('llength');
let slantHeightLabel = document.getElementById('lslant-height');


const heightLabelText = heightLabel.textContent;
const widthLabelText = widthLabel.textContent;
const radiusLabelText = radiusLabel.textContent;
const lengthLabelText = lengthLabel.textContent;
const slantHeightLabelText = slantHeightLabel.textContent;


function hideHeight(){

  heightLabel.style.display = "none";
  heightIn.style.display = "none";
  heightIn.removeAttribute('required');
}
function showHeight(){

  heightLabel.style.display = "block";
  heightIn.style.display = "block";
  heightIn.setAttribute('required', '');
  heightLabel.textContent = heightLabelText;
}

function hideWidth(){

  widthLabel.style.display = "none";
  widthIn.style.display = "none";
  widthIn.removeAttribute('required');
}
function showWidth(){

  widthLabel.style.display = "block";
  widthIn.style.display = "block";
  widthIn.setAttribute('required', '');
  widthLabel.textContent = widthLabelText;
}

function hideRadius(){

  radiusLabel.style.display = "none";
  radiusIn.style.display = "none";
  radiusIn.removeAttribute('required');
}
function showRadius(){

  radiusLabel.style.display = "block";
  radiusIn.style.display = "block";
  radiusIn.setAttribute('required', '');
  radiusLabel.textContent = radiusLabelText;
}

function hideLength(){

  lengthLabel.style.display = "none";
  lengthIn.style.display = "none";
  lengthIn.removeAttribute('required');
}
function showLength(){

  lengthLabel.style.display = "block";
  lengthIn.style.display = "block";
  lengthIn.setAttribute('required', '');
  lengthLabel.textContent = lengthLabelText;
}


function hideSlantHeight(){

  slantHeightLabel.style.display = "none";
  slantHeightIn.style.display = "none";
  slantHeightIn.removeAttribute('required');
}
function showSlantHeight(){

  slantHeightLabel.style.display = "block";
  slantHeightIn.style.display = "block";
  slantHeightIn.setAttribute('required', '');
  slantHeightLabel.textContent = slantHeightLabelText;
}



// 1. RECTANGLE -------------------------------------------

function rectangleInterface(){

  showHeight();
  showWidth();
  hideRadius();
  hideLength();
  hideSlantHeight();
}

document.getElementById('rPeri').addEventListener('click', function(){

  //selected option
  // selectedOp = this.textContent;

  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  //document.getElementById('calc-btn').textContent = 'Calculate Perimeter';

  rectangleInterface();

  // showStatusCard(); 
  // adds event listener for all of the options of "opt" class
 
  //document.querySelector('.status').textContent = `Perimeter of Rectangle`;


  //       let sideLine = document.querySelectorAll('.sideline');
  //     let sideLineArray = Array.from(sideLine);
  //     sideLineArray.forEach(function(elem){
  //       elem.style.animation = "";
  //     elem.style.borderBottom = "3px solid black"
      
  // })



})

document.getElementById('rArea').addEventListener('click', function(){

  //selected option
  // selectedOp = this.textContent;

  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  //document.getElementById('calc-btn').textContent = 'Calculate Area';
  rectangleInterface();
  // showStatusCard();  

  // document.querySelector('.status').style.opacity = "0";

  // document.querySelector('.status').style.transform = "translateX(100%)";  

  //document.querySelector('.status').textContent = `Area of Rectangle`;


})



// 2. CIRCLE ----------------------------------------------

function circleInterface(){
  hideHeight();
  hideWidth();
  hideLength();
  showRadius();
  hideSlantHeight();
}

document.getElementById('cPeri').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  selectedOp = this.textContent;
  //selected parent
  let dirPar = this.parentElement;
  myObject = dirPar.parentElement.firstChild.innerHTML;
  console.log(myObject);

  //document.getElementById('calc-btn').textContent = 'Calculate Circumference';

  circleInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Circumference of Circle`;


})

document.getElementById('cArea').addEventListener('click', function(){
  
  // console.log(this.textContent);

  //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Area';

  circleInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Area of Circle`;

})


// 3. SQUARE ---------------------------------------------

function squareInterface(){
  // console.log(this.textContent);

  showHeight();
  hideRadius();
  hideLength();
  hideWidth();
  hideSlantHeight();

}

document.getElementById('sArea').addEventListener('click', function(){

  // selected option
  // selectedOp = this.textContent;

  // // selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Area';

  squareInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Area of Square`;

})

document.getElementById('sPeri').addEventListener('click', function(){

  // selected option
  // selectedOp = this.textContent;

  // // selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Perimeter';

  squareInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Perimeter of Square`;

})

// 4. CYLINDER --------------------------------------------


function cylinderInterface(){
  showHeight();
  hideWidth();
  hideLength();
  showRadius();
  hideSlantHeight();
}

document.getElementById('cyArea').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Surface Area';

  cylinderInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Surface Area of Cylinder`;
})

document.getElementById('cyBase').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Base Area';

  cylinderInterface();
  hideHeight();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Base Area of Cylinder`;

})


document.getElementById('cyCurved').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Curved Area';

  cylinderInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Curved Area of Cylinder`;

})


document.getElementById('cyVolume').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Volume';

  cylinderInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Volume of Cylinder`;

})

// 5. RECTANGULAR CUBE    ----------------------------------
function cubeInterface(){
  showHeight();
  showWidth();
  showLength();
  hideRadius();
  hideSlantHeight();
}

document.getElementById('rcVolume').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Volume';

  cubeInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Volume of Rectangular Cube`;

})

document.getElementById('rcArea').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Surface Area';

  cubeInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Surface Area of Rectangular Cube`;

})

document.getElementById('rcDiagonal').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Digonal';

  cubeInterface();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Diagonal Length of Rectangular Cube`;

})


// 6. Cone ------------------------------------------


function coneInterface(){
  showHeight();
  hideWidth();
  hideLength();
  showRadius();
  showSlantHeight();
}

document.getElementById('cnArea').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Surface Area';

  coneInterface();
  hideHeight();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Surface Area of Cone`;
})

document.getElementById('cnBase').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Base Area';

  coneInterface();
  hideHeight();
  hideSlantHeight();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Base Area of Cone`;

})


document.getElementById('cnCurved').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Curved Area';

  coneInterface();
  hideHeight();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Curved Area of Cone`;

})


document.getElementById('cnVolume').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Volume';

  coneInterface();
  hideSlantHeight();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Volume of Cone`;

})


document.getElementById('cnSlant').addEventListener('click', function(){
  // console.log(this.textContent);

  // //selected option
  // selectedOp = this.textContent;
  // //selected parent
  // let dirPar = this.parentElement;
  // myObject = dirPar.parentElement.firstChild.innerHTML;
  // console.log(myObject);

  // document.getElementById('calc-btn').textContent = 'Calculate Slant';

  coneInterface();
  hideSlantHeight();

  // showStatusCard();

  //document.querySelector('.status').textContent = `Slant Height of Cone`;

})

// 7.TRIANGLE ---------------------------------------

function triangleInterface(){
  if(selectedOp == '> Calculate Perimeter'){
    showLength();
    lengthLabel.textContent = 'Side-1 In';
    showHeight();
    heightLabel.textContent = 'Side-2 In';
    showWidth();
    widthLabel.textContent = 'Side-3 In';

    hideRadius();
    hideSlantHeight();
  }
  else{
    showLength();
    lengthLabel.textContent = 'Base In';
    showHeight();
    
    hideWidth();
    hideRadius();
    hideSlantHeight();
  } 
}

document.getElementById('tArea').addEventListener('click', function(){
  triangleInterface();
})

document.getElementById('tPeri').addEventListener('click', function(){
  triangleInterface();
})


//===================================================


function calculateArea(height, width){
    return height*width;
}
function calculatePerimeter(height, width){
  return 2*(height + width);
}

// -------------------------------------------------------
function calculateCircleArea(radius){
  return 3.1416 * (radius * radius);
}
function calculateCirclePerimeter(radius){
  return 2 * 3.1416 * radius;
}

// -------------------------------------------------------
function calculateSquareArea(height){
  return height * height;
}
function calculateSquarePerimeter(height){
  return 4 * height;
}

// -------------------------------------------------------
function calculateCylinderArea(height, radius){
  return 2*3.1416*radius*(radius + height);
}
function calculateCylinderCurvedArea(height, radius){
  return 2*3.1416*radius*height;
}
function calculateCylinderBaseArea(radius){
  return 2*3.1416*radius*radius;
}
function calculateCylinderVolume(height, radius){
  return 3.1416*radius*radius*height;
}

// code for cube attributes(functions) goes from here
function calculateCubeArea(height, width, length){
  let a = length;
  let b = height;
  let c = width;
  
  return 2*(a*b + b*c + c*a);
}
function calculateCubeVolume(height, width, length){
  return height*width*length;
}
function calculateCubeDiagonal(height, width, length){
  let a = length;
  let b = height;
  let c = width;
  
  return Math.sqrt(a*a + b*b + c*c) 
}
// ---------------------------------------------------

// cone functions

function calculateConeArea(slantHeight, radius){
  return 3.1416*radius*(radius + slantHeight);
}
function calculateSlantHeight(height, radius){
  return Math.sqrt(radius*radius + height*height);
}
function calculateConeBaseArea(radius){
  return 3.1416*radius*radius;
}
function calculateConeCurvedArea(slantHeight, radius){
  return 3.1416*radius*slantHeight;
}
function calculateConeVolume(height, radius){
  return 1/3*(3.1416*radius*radius*height);
}



// ######################################################
// concatinating labels with selected unit

let unit = "Inch";
// const labels = document.querySelectorAll('.dimension');

// const label = Array.from(labels);
// const text = [];
// for(let i = 0; i < label.length; i++){
//     text.push(label[i].innerHTML);
// }
// console.log(text);

// document.getElementById('unit').addEventListener('change', function(){
//     console.log(this.value);
//     let setUnit = this.value;

//     unit = setUnit;

//     for(let i = 0; i < text.length; i++){
//         label[i].innerHTML = text[i] + setUnit;
//     }
// });


const labels = document.querySelectorAll('.dimension');

const label = Array.from(labels);
const text = [];
for(let i = 0; i < label.length; i++){
    text.push(label[i].innerHTML);
}
console.log(text);


const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click', () =>{
    optionsContainer.classList.toggle('active');
})


optionsList.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('label').innerHTML;

        option.querySelector('input').checked = true;
        // the line above is written in order to check the radio input even clicking on the div but without this line the input will only be checked either clicking on the label or the radio button(which is hidden)
        // another approach would be displaying this label as block in the main css as it will occupy the whole div and respond to the input respectively

        unit = selected.innerHTML;
        // labels of input fields with selected unit
        for(let i = 0; i < text.length; i++){
            label[i].innerHTML = text[i] + unit;
        }

        optionsContainer.classList.remove('active');

        
    })
})


// ##################################################

// Default, Success and Failure Stylings

function greenStylingInput(inField){
  inField.style.background = 'seagreen';
}

function greenStyling(){
  document.getElementById('area').style.background = 'forestgreen';

  document.getElementById('main').style.boxShadow = '2px 5px 5px seagreen';

  let sideLine = document.querySelectorAll('.sideline');
  let sideLineArray = Array.from(sideLine);
  sideLineArray.forEach(function(elem){
    // elem.style.borderBottom = "3px solid forestgreen";
       elem.style.animation = "greenBlink 2s 2 forwards";
  })
  document.getElementById('area').style.background = 'forestgreen';

  document.getElementById('obj-op').style.borderLeft = '10px solid forestgreen';
  if(document.getElementById('obj-op').className == "status active")
    document.getElementById('obj-op').style.animation = "greenBlink1 2s 2 backwards";

  if(document.getElementById('obj-op').className == "status"){
    document.getElementById('obj-op-1').style.borderLeft = '10px solid forestgreen';
  document.getElementById('obj-op-1').style.animation = "greenBlink1 2s 2 backwards";

  }

}

function redStylingInput(inField){
  inField.style.background = 'rgb(182, 93, 93)';
}

function redStyling(){
  document.getElementById('main').style.boxShadow = '2px 5px 5px rgb(182, 93, 93)';
  
  let sideLine = document.querySelectorAll('.sideline');
  let sideLineArray = Array.from(sideLine);
  sideLineArray.forEach(function(elem){
    // elem.style.borderBottom = "3px solid rgb(182, 93, 93)"
    elem.style.animation = "redBlink 2s 2 forwards";
  })

  // should I display result-area as block here?
  document.getElementById('area').style.background = 'rgb(182, 93, 93)';

  
  document.getElementById('obj-op').style.borderLeft = '10px solid rgb(182, 93, 93)';
  if(document.getElementById('obj-op').className == "status active"){
    document.getElementById('obj-op').style.animation = "redBlink1 2s 2 backwards";
  }
  
  if(document.getElementById('obj-op').className == "status"){
    document.getElementById('obj-op-1').style.borderLeft = '10px solid rgb(182, 93, 93)';
    document.getElementById('obj-op-1').style.animation = "redBlink1 2s 2 backwards";
  }

}



document.querySelector(".area").addEventListener("submit", function(e){

    e.preventDefault();


    let unitPlural = unit + 's';

    if(unit == 'Inch'){
      unitPlural = unit + 'es';
    }
    if(unit == 'Foot'){
      unitPlural = 'Feet';
    }


    if(myObject == 'Circle'){
      
      greenStylingInput(radiusIn);

      let uRadius = parseFloat(radiusIn.value);

        if(uRadius < 0){

            redStylingInput(radiusIn);   
            
            redStyling();
            document.getElementById('area').style.display = "block";

            document.getElementById('area').innerHTML = `Enter Valid Value`;

        }
        else{

            greenStylingInput(radiusIn);
            
            let area = calculateCircleArea(uRadius).toFixed(5);

            let perimeter = calculateCirclePerimeter(uRadius).toFixed(5);

            greenStyling();

            document.getElementById('area').style.display = "block";

            if(selectedOp == "> Calculate Area"){
              document.getElementById('area').innerHTML = `The area of the ${myObject} is ${area} Square ${unit}`;
            }

            if(selectedOp == "> Calculate Circumference"){
              document.getElementById('area').innerHTML = `The circumference of the ${myObject} is ${perimeter} ${unitPlural}`;
            }
        }
    }
// end of circle

    else if(myObject == 'Square'){
      
        greenStylingInput(heightIn);
        let uHeight = parseFloat(heightIn.value);

        if(uHeight < 0){
        
          redStylingInput(heightIn);

          document.getElementById('area').style.display = "block";

          redStyling();

          document.getElementById('area').innerHTML = `Enter Valid Value`;

        }

        else{

          greenStylingInput(heightIn);
            
          let area = calculateSquareArea(uHeight).toFixed(5);

          let perimeter = calculateSquarePerimeter(uHeight).toFixed(5);

          document.getElementById('area').style.display = "block";

          greenStyling();

          if(selectedOp == "> Calculate Area"){
            document.getElementById('area').innerHTML = `The area of the ${myObject} is ${area} Square ${unit}`;
          }

          if(selectedOp == "> Calculate Perimeter"){
            document.getElementById('area').innerHTML = `The perimeter of the ${myObject} is ${perimeter} ${unitPlural}`;
          }
        }
    }

// end of square

    else if(myObject == 'Cylinder'){
        greenStylingInput(heightIn);

        greenStylingInput(radiusIn);

        let uHeight = parseFloat(heightIn.value);
        let uRadius = parseFloat(radiusIn.value);

        if(uHeight < 0 || uRadius < 0){

            if(uHeight < 0){
                redStylingInput(heightIn);              
            }

            if(uRadius < 0){
                redStylingInput(radiusIn);
            }

            document.getElementById('area').style.display = "block";

            redStyling();

            document.getElementById('area').innerHTML = `Enter Valid Values`;
        }

        else{

            greenStylingInput(heightIn);

            greenStylingInput(widthIn);

            let area = calculateCylinderArea(uHeight, uRadius).toFixed(5);

            let baseArea = calculateCylinderBaseArea(uRadius).toFixed(5);
            
            let curvedArea = calculateCylinderCurvedArea(uHeight, uRadius).toFixed(5);
            
            let volume = calculateCylinderVolume(uHeight, uRadius).toFixed(5);

            document.getElementById('area').style.display = "block";

            greenStyling();            

            if(selectedOp == "> Calculate Area"){
              document.getElementById('area').innerHTML = `The area of the ${myObject} is ${area} Square ${unit}`;
            }
            if(selectedOp == "> Calculate Curved Area"){
                document.getElementById('area').innerHTML = `The curved area of the ${myObject} is ${curvedArea} Square ${unit}`;
            }
            if(selectedOp == "> Calculate Base Area"){
                document.getElementById('area').innerHTML = `The base area of the ${myObject} is ${baseArea} Square ${unit}`;
            }
            if(selectedOp == "> Calculate Volume"){
                document.getElementById('area').innerHTML = `The volume of the ${myObject} is ${volume} Cubic ${unit}`;
            }
          }
    }

// end of cylinder

    else if(myObject == "Rectangular Cube"){
        greenStylingInput(heightIn);
        greenStylingInput(widthIn);
        greenStylingInput(lengthIn);

        let uHeight = parseFloat(heightIn.value);
        let uWidth = parseFloat(widthIn.value);
        let uLength = parseFloat(lengthIn.value);

        if(uHeight < 0 || uWidth < 0 || uLength < 0){

            if(uHeight < 0){
                redStylingInput(heightIn);              
            }
            if(uWidth < 0){
                redStylingInput(widthIn);
            }
            if(uLength < 0){
                redStylingInput(lengthIn);
            }

            document.getElementById('area1').style.display = "flex";
            document.getElementById('area1').style.background = 'rgb(182, 93, 93)';


            redStyling();

            document.getElementById('area1').innerHTML = `Enter Valid Values`;
        }
        else{

            greenStylingInput(heightIn);
            greenStylingInput(widthIn);
            greenStylingInput(lengthIn);

            let area = calculateCubeArea(uHeight, uWidth, uLength).toFixed(5);
            let volume = calculateCubeVolume(uHeight, uWidth, uLength).toFixed(5);
            let diagonal = calculateCubeDiagonal(uHeight, uWidth, uLength).toFixed(5);

            document.getElementById('area1').style.display = "flex";
            document.getElementById('area1').style.background = "forestgreen";

            greenStyling();            

            if(selectedOp == "> Calculate Area"){
              document.getElementById('area1').innerHTML = `The surface area of the ${myObject} is ${area} Square ${unit}`;
            }
            if(selectedOp == "> Calculate Volume"){
                document.getElementById('area1').innerHTML = `The volume of the ${myObject} is ${volume} Cubic ${unit}`;
            }
            if(selectedOp == "> Calculate Diagonal Length"){
                document.getElementById('area1').innerHTML = `The diagonal length of the ${myObject} is ${diagonal} ${unitPlural}`;
            }
        }
    
    }
// end of cube

else if(myObject == 'Cone'){

        greenStylingInput(slantHeightIn);
        greenStylingInput(radiusIn);
        greenStylingInput(heightIn);

        let uHeight = parseFloat(heightIn.value);
        let uSHeight = parseFloat(slantHeightIn.value);
        let uRadius = parseFloat(radiusIn.value);

        if(uSHeight < 0 || uRadius < 0 || uHeight < 0){

            if(uSHeight < 0){
                redStylingInput(slantHeightIn);              
            }

            if(uRadius < 0){
                redStylingInput(radiusIn);
            }
            if(uHeight < 0){
                redStylingInput(heightIn);
            }

            document.getElementById('area').style.display = "block";

            redStyling();

            document.getElementById('area').innerHTML = `Enter Valid Values`;
        }

        else{

            greenStylingInput(slantHeightIn);
            greenStylingInput(radiusIn);
            greenStylingInput(heightIn);

            let area = calculateConeArea(uSHeight, uRadius).toFixed(5);
            
            let slantHeight = calculateSlantHeight(uHeight, uRadius).toFixed(5);

            let baseArea = calculateConeBaseArea(uRadius).toFixed(5);
            
            let curvedArea = calculateConeCurvedArea(uSHeight, uRadius).toFixed(5);
            
            let volume = calculateConeVolume(uHeight, uRadius).toFixed(5);

            document.getElementById('area').style.display = "block";

            greenStyling();            

            if(selectedOp == "> Calculate Area"){
              document.getElementById('area').innerHTML = `The area of the ${myObject} is ${area} Square ${unit}`;
            }
            if(selectedOp == "> Calculate Curved Area"){
                document.getElementById('area').innerHTML = `The curved area of the ${myObject} is ${curvedArea} Square ${unit}`;
            }
            if(selectedOp == "> Calculate Base Area"){
                document.getElementById('area').innerHTML = `The base area of the ${myObject} is ${baseArea} square ${unit}`;
            }
            if(selectedOp == "> Calculate Volume"){
                document.getElementById('area').innerHTML = `The volume of the ${myObject} is ${volume} cubic ${unit}`;
            }
            if(selectedOp == "> Calculate Slant Height"){
                document.getElementById('area').innerHTML = `The slant height of the ${myObject} is ${slantHeight} ${unitPlural}`;
            }

          }
    }

// end of cone




    else{

        greenStylingInput(heightIn);

        greenStylingInput(widthIn);

        let uHeight = parseFloat(heightIn.value);
        let uWidth = parseFloat(widthIn.value);
    
        if(uHeight < 0 || uWidth < 0){

            if(uHeight < 0){
                redStylingInput(heightIn);              
            }

            if(uWidth < 0){
                redStylingInput(widthIn);
            }

            document.getElementById('area').style.display = "block";

            redStyling();

            document.getElementById('area').innerHTML = `Enter Valid Values`;
        }

        else{

            greenStylingInput(heightIn);

            greenStylingInput(widthIn);

            let area = calculateArea(uHeight, uWidth);

            let perimeter = calculatePerimeter(uHeight, uWidth);

            document.getElementById('area').style.display = "block";

            greenStyling();            

            if(selectedOp == "> Calculate Area"){
              document.getElementById('area').innerHTML = `The area of the ${myObject} is ${area} square ${unit}`;
            }
            if(selectedOp == "> Calculate Perimeter"){
                document.getElementById('area').innerHTML = `The perimeter of the ${myObject} is ${perimeter} ${unitPlural}`;
            }
            else{
              document.getElementById('area').innerHTML = `The area of the ${myObject} is ${area} Square ${unit}`;
            }
            
        }

    }

// end of calculation


         
    if(myObject == "Rectangular Cube"){
      document.getElementById('again1').style.display = "block";
      let calcNew1 = document.querySelector('.calc-again1');
      calcNew1.style.display = "block";
      calcNew1.style.top = "-50%";
      calcNew1.addEventListener('click', function(){
        location.reload();
      })
    }

    else{
      document.getElementById('again').style.display = "block";
      let calcNew = document.querySelector('.calc-again');
      calcNew.style.display = "block";
      calcNew.addEventListener('click', function(){
        location.reload();
      })
    }    
});