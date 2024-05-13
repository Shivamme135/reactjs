function customRender(reactElement , container){
   const domElemnt = document.createElement(reactElement.type)
   domElemnt.innerHTML = reactElement.children
//    domElemnt.setAttribute('href', reactElement.props.href)
//    domElemnt.setAttribute('target', reactElement.props.target)
// we an also use loop for this

for (const prop in reactElement.props) {
   if(prop === 'children') continue;
   domElemnt.setAttribute(prop, reactElement.props[prop])
}

   container.appendChild(domElemnt)

}

const reactElement = {   
    type: 'a',
    
    props: {
          href: 'http://google.com',
          target: '_blank' 
    },
    children: 'click me to visit google'

}

const mainContainer = document.querySelector('#root');

customRender(reactElement , mainContainer)  // here we say that what to render and in which we have to render

