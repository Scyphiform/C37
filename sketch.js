var box1,box2,box3,box4,box5,box6,box6,box7
var bottom;

function setup(){
    box1 = new Box(100,100,20,20);
    box2 = new Box(125,100,20,20);
    box3 = new Box(150,100,20,20);
    box4 = new Box(175,100,20,20);
    box5 = new Box(200,100,20,20);
    box6 = new Box(225,100,20,20);
    box7 = new Box(250,100,20,20);
    box8 = new Box(275,100,20,20);
    bottom = new Base(200,200,10,1000)
}
function draw(){

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    bottom.display();

}