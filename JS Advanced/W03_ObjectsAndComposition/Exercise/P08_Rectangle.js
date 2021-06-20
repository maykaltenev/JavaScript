function rectangle(width, height, color){
    color = color.substring(0,1).toUpperCase() + color.slice(1);
    return{
        width: width,
        height: height,
        color: color,
        calcArea: function (){
            return this.width * this.height;
        }
    }
}