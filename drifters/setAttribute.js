export function setAttributes(el, attrs) {  // selects element and adds attributes
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
    //takes attributes and for each one, runs a function to set the attribute to the element
}

// use: setAttributes(button, {name: "blaha", src: "img.png"})