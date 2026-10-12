const React = {

    createElement: function(tag,styles,children){
        const element = document.createElement('tag');

        if(typeof children === 'object'){
            for(let val of children){
                element.append(val);
            }
        }
        else
        element.innerText = children;

        for(let key in styles){ // iterate over objects 
            element.style[key] = styles[key];  //same as element.style.backgroundColor = black
        }
        return element;
    }
}

const ReactDOM = {
    render: function(element,root){
        root.append(element);
    }
}


const header1 = React.createElement('h1',{backgroundColor:'black',fontSize:'20px',color:'pink'},"Hello Aakash");
const header2 = React.createElement('h2',{backgroundColor:'skyblue',fontSize:'25px',color:'yellow'},"Welcome to Google");

const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");

const UL = React.createElement('ul',{backgroundColor:'black',fontSize:'20px',color:'pink'},[li1,li2,li3]);

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(UL,document.getElementById('root'));

