function calculateArea(height, width){
    return height*width
}
document.querySelector(".area").addEventListener("submit", function(e){

        e.preventDefault();

        let uHeight = parseInt(document.getElementById('height').value);
        let uWidth = parseInt(document.getElementById('width').value);
        
        if(uHeight < 0 || uWidth < 0){

            if(uHeight < 0){
                document.getElementById('height').style.background = 'rgb(182, 93, 93)';

                document.getElementById('main').style.boxShadow = '2px 5px 5px rgb(182, 93, 93)';
                
            }

            if(uWidth < 0){
                document.getElementById('width').style.background = 'rgb(182, 93, 93)';

                document.getElementById('main').style.boxShadow = '2px 5px 5px rgb(182, 93, 93)';
            }

            document.getElementById('area').style.display = "block";

            document.getElementById('area').style.background = 'rgb(182, 93, 93)';

            document.getElementById('area').innerHTML = `Enter Valid Values`;
        }

        else{

            document.getElementById('height').style.background = 'seagreen';
            document.getElementById('width').style.background = 'seagreen';

            let area = calculateArea(uHeight, uWidth);

            document.getElementById('area').style.display = "block";

            document.getElementById('area').style.background = 'forestgreen';

            document.getElementById('main').style.boxShadow = '2px 5px 5px seagreen';

            document.getElementById('area').innerHTML = `The area is ${area} square inch`;
        } 
        
});