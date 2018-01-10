function getParameterDefinitions() {
  return [{ name: 'size', type: 'float', initial: 5, caption: "球の大きさ:" }];
}

function main(p) {
    return union(sphere(p.size).translate([0,0,p.size]),sphere(p.size).translate([0,0,p.size*3]),sphere(p.size).translate([0,0,p.size*5]));
}