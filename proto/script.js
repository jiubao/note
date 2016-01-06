var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 1440,
    height: 940,
    gridSize: 1,
    model: graph,
    snapLinks: true,
    linkPinning: false,
    embeddingMode: true,
    validateEmbedding: function(childView, parentView) {
        return parentView.model instanceof joint.shapes.devs.Coupled;
    },
    validateConnection: function(sourceView, sourceMagnet, targetView, targetMagnet) {
        return sourceMagnet != targetMagnet;
    }
});

var connect = function(source, sourcePort, target, targetPort) {
    var link = new joint.shapes.devs.Link({
        source: { id: source.id, selector: source.getPortSelector(sourcePort) },
        target: { id: target.id, selector: target.getPortSelector(targetPort) },
        // attrs: {
        //     '.marker-target': { fill: '#4b4a67', stroke: '#4b4a67', d: 'M 10 0 L 0 5 L 10 10 z' }
        // }
    });
    link.addTo(graph).reparent();
};

function getAttr(name) {
    return {'.label': {text: name}};
}

function getCoupled(name, pos, ip, op) {
    var item = new joint.shapes.devs.Coupled({
        attrs: getAttr(name),
        position: pos,
        size: { width: 240, height: 200 },
        inPorts: ip,
        outPorts: op
    });
    return item;
}

function getCoupled1(name, pos, ip, op) {
    var item = new joint.shapes.devs.Coupled({
        attrs: getAttr(name),
        position: pos,
        size: { width: 240, height: 130 },
        inPorts: ip,
        outPorts: op
    });
    return item;
}

function getCoupled2(name, pos, ip, op) {
    var item = new joint.shapes.devs.Coupled({
        attrs: getAttr(name),
        position: pos,
        size: { width: 240, height: 270 },
        inPorts: ip,
        outPorts: op
    });
    return item;
}

function getAtomic(name, pos, ip, op) {
    var item = {
        attrs: getAttr(name),
        size: {width: 200, height: 40},
        position: pos,
    };
    ip && (item.inPorts = ip);
    op && (item.outPorts = op);
    var item = new joint.shapes.devs.Atomic(item);

    return item;
}

// var c1 = getCoupled('[F]Object', {x: 100, y: 50}, ['in'], ['out 1', 'out 2']);
// var a1 = getAtomic('__proto__', {x:360, y:360}, ['xy'], ['x', 'y']);
// var a2 = getAtomic('xxx', {x:50, y:260}, null, ['out']);
// var a3 = getAtomic('yyy', {x:650, y:150}, ['a', 'b']);

// var obj = new joint.shapes.devs.Coupled({
//     attrs: getAttr('Object'),
//     position: { x: 230, y: 150 },
//     size: { width: 300, height: 300 },
//     inPorts: ['in', '1', '2', '3'],
//     outPorts: ['out 1','out 2', '1', '2', '3']
// });

// var a1 = new joint.shapes.devs.Atomic({
//     position: { x: 360, y: 360 },
//     inPorts: ['xy'],
//     outPorts: ['x','y']
// });

// var a2 = new joint.shapes.devs.Atomic({
//     position: { x: 50, y: 260 },
//     outPorts: ['out']
// });

// var a3 = new joint.shapes.devs.Atomic({
//     position: { x: 650, y: 150 },
//     size: { width: 100, height: 300 },
//     inPorts: ['a','b']
// });


function getP1(pos) {return {x: pos.x + 20, y: pos.y + 50};}
function getP2(pos) {return {x: pos.x + 20, y: pos.y + 120};}
function getP3(pos) {return {x: pos.x + 20, y: pos.y + 190};}


//null
// var funPos = {x:100,y:300};
var nu = getAtomic('null', {x:1200, y: 150}, ['i'], null);

//undefined
// var funPos = {x:100,y:300};
var un = getAtomic('undefined', {x: 930, y:400}, ['i'], null);

// Object
var objPos = {x: 100, y: 50};
var obj = getCoupled('[F]Object', {x: 100, y: 50}, ['i'], ['o']);
var op = getAtomic('__proto__', getP1(objPos), null, ['o']);
var opp = getAtomic('prototype', getP2(objPos), null, ['o']);

// Function
var funPos = {x:100,y:300};
var fun = getCoupled('[F]Function', funPos, ['i'], ['o']);
var fp = getAtomic('__proto__', getP1(funPos), null, ['o']);
var fpp = getAtomic('prototype', getP2(funPos), null, ['o']);

// Object.prototype
var op1Pos = {x: 900, y: 100};
var op1 = getCoupled('[O]Object.prototype', op1Pos, ['i', 'ii'], null);
var op1p = getAtomic('__proto__', getP1(op1Pos), null, ['o']);
var op1c = getAtomic('constructor', getP2(op1Pos), ['i'], null);
// var op1c = getAtomic('constructor', getP3(op1Pos), null, null);

// Function.prototype
var fp1Pos = {x:550, y:300};
var fp1 = getCoupled2('[F]Function.prototype', fp1Pos, ['i'], null);
var fp1p = getAtomic('__proto__', getP1(fp1Pos), null, ['o']);
var fp1pp = getAtomic('prototype', getP2(fp1Pos), null, ['o']);
var fp1c = getAtomic('constructor', getP3(fp1Pos), ['i'], null);


// function Person() {}
var personFPos = {x: 100, y: 550};
var personF = getCoupled('[F]function Person()', personFPos, ['i'], ['o']);
var personFp = getAtomic('__proto__', getP1(personFPos), null, ['o']);
var personFpp = getAtomic('prototype', getP2(personFPos), null, ['o']);

// Person.prototype
var personPPos = {x: 650, y: 650};
var personP = getCoupled('[O]Person.prototype', personPPos, ['i'], null);
var personPp = getAtomic('__proto__', getP1(personPPos), null, ['o']);
var personPc = getAtomic('constructor', getP2(personPPos), ['i'], null);

// new Person()
var personPos = {x: 100, y: 800};
var person = getCoupled1('[O]new Person()', personPos, null, null);
var personp = getAtomic('__proto__', getP1(personPos), null, ['o']);

graph.addCells([nu, un, obj, op, opp, fun, fp, fpp, op1, op1p, op1c, fp1, fp1p, fp1pp, fp1c, personF, personFp, personFpp, person, personp, personP, personPp, personPc]);
// graph.addCells([nu, un, obj, op, opp, fun, fp, fpp, op1, op1p, op1c, fp1, fp1p, fp1pp, fp1c]);

connect(op1p, 'o', nu, 'i');
connect(fp1pp, 'o', un, 'i');
connect(op, 'o', fp1, 'i');
connect(opp, 'o', op1, 'i');
connect(fp, 'o', fp1, 'i');
connect(fpp, 'o', fp1, 'i');
connect(fp1p, 'o', op1, 'ii');
connect(obj, 'o', op1c, 'i');
connect(fun, 'o', fp1c, 'i');
connect(personFp, 'o', fp1, 'i');
connect(personFpp, 'o', personP, 'i');
connect(personp, 'o', personP, 'i');
connect(personPp, 'o', op1, 'ii');
connect(personF, 'o', personPc, 'i');



// graph.addCells([c1, a1, a2, a3]);

// c1.embed(a1);

// connect(a2,'out',c1,'in');
// connect(c1,'in',a1,'xy');
// connect(a1,'x',c1,'out 1');
// connect(a1,'y',c1,'out 2');
// connect(c1,'out 1',a3,'a');
// connect(c1,'out 2',a3,'b');

/* rounded corners */

// _.each([c1,a1,a2,a3], function(element) {
//     element.attr({ '.body': { 'rx': 6, 'ry': 6 }});
// });

/* custom highlighting */

var highlighter = V('circle', {
    'r': 14,
    'stroke': '#ff7e5d',
    'stroke-width': '6px',
    'fill': 'transparent',
    'pointer-events': 'none'
});

paper.off('cell:highlight cell:unhighlight').on({
    
    'cell:highlight': function(cellView, el, opt) {

        if (opt.embedding) {
            V(el).addClass('highlighted-parent');
        }

        if (opt.connecting) {
            var bbox = V(el).bbox(false, paper.viewport);
            highlighter.translate(bbox.x + 10, bbox.y + 10, { absolute: true });
            V(paper.viewport).append(highlighter);
        }
    },
    
    'cell:unhighlight': function(cellView, el, opt) {

        if (opt.embedding) {
            V(el).removeClass('highlighted-parent');
        }

        if (opt.connecting) {
            highlighter.remove();
        }
    }
});