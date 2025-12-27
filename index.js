// d3.select('div') //Selects div
//     .selectAll('p') 
//     .data(dataset) 
//     .enter() //Elements not in data
//     .append('p')
//     .text(dta=>dta);


// const container = d3.select('div') //Selects div
//     .classed('container', true)
//     .style('border','1px solid red');

// const bars = container
//     .selectAll('.bar')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .classed('bar', true);



// Plot.plot({
//     axis: null,
//     margin: 10,
//     marginLeft: 40,
//     marginRight: 160,
//     width: 928,
//     height: 1800,
//     marks: [
//         Plot.tree(d3.hierarchy(dataset).leaves(), {
//             path: (node) => node.ancestors().reverse().map(({ data: { name } }) => name).join("|"),
//             delimiter: "|"})
//     ]
//   })
    

/*
    opensearch.js
    MediaWiki API Demos
    Demo of `Opensearch` module: Search the wiki and obtain
	results in an OpenSearch (http://www.opensearch.org) format
    MIT License
*/
tree = {
  "name":"Animalia",
  "children":[],
}

//export async function getWikiSearch() {
async function getWikiSearch() {
  speciesName = 'Panthera leo leo'
  url = `https://api.gbif.org/v1/species/match?scientificName=${encodeURIComponent(speciesName)}`;

  try {
    // const data = await (await fetch(url)).json();
    data = await (await fetch(url)).json();
    console.log(data);
    console.log(")");
    testText = document.getElementById("text");
    testText.innerText = data;
    addToJSON(data)
  } catch (error) {
    console.error("Fetch error:", error);
  }

  speciesName = 'Panthera onca'
  url = `https://api.gbif.org/v1/species/match?scientificName=${encodeURIComponent(speciesName)}`;

  try {
    // const data = await (await fetch(url)).json();
    data = await (await fetch(url)).json();
    testText = document.getElementById("text");
    addToJSON(data)
  } catch (error) {
    console.error("Fetch error:", error);
  }


  speciesName = 'Felis catus'
  url = `https://api.gbif.org/v1/species/match?scientificName=${encodeURIComponent(speciesName)}`;

  try {
    // const data = await (await fetch(url)).json();
    data = await (await fetch(url)).json();
    testText = document.getElementById("text");
    addToJSON(data)
  } catch (error) {
    console.error("Fetch error:", error);
  }

  console.log(tree)
  parentFunction(tree)

}
//Optimize this
function addToJSON(newEntry){
  //Add Phylum Entry
  inTree = false;
  indexOfChild = 0;
  for(i = 0; i<tree.children.length;i++){
    if(tree.children[i].name.toLowerCase() == newEntry.phylum.toLowerCase()){
      inTree = true;
      indexOfChild=i;
      break;
    }
  }

  if(inTree == false){  
    tree.children.push({
      "name":newEntry.phylum,
      "children":[]
    }
    );
    indexOfChild = tree.children.length-1;
  }

  //Add Class Entry
  phylum = tree.children[indexOfChild];
  inTree = false;
  for(i = 0; i<phylum.children.length;i++){
    if(phylum.children[i].name.toLowerCase() == newEntry.class.toLowerCase()){
      inTree = true;
      indexOfChild=i;
      break;
    }
  }

  if(inTree == false){  
    phylum.children.push({
      "name":newEntry.class,
      "children":[]
    }
    );
    indexOfChild = phylum.children.length-1;
  }

  //Add Order Entry
  _class = phylum.children[indexOfChild];
  inTree = false;
  for(i = 0; i<_class.children.length;i++){
    if(_class.children[i].name.toLowerCase() == newEntry.order.toLowerCase()){
      inTree = true;
      indexOfChild=i;
      break;
    }
  }

  if(inTree == false){  
    _class.children.push({
      "name":newEntry.order,
      "children":[]
    }
    );
    indexOfChild = _class.children.length-1;
  }



//Add Family Entry
  order = _class.children[indexOfChild];
  inTree = false;
  for(i = 0; i<order.children.length;i++){
    if(order.children[i].name.toLowerCase() == newEntry.family.toLowerCase()){
      inTree = true;
      indexOfChild=i;
      break;
    }
  }

  if(inTree == false){  
    order.children.push({
      "name":newEntry.family,
      "children":[]
    }
    );
    indexOfChild = order.children.length-1;
  }

  //Add Genus Entry
  family = order.children[indexOfChild];
  inTree = false;
  for(i = 0; i<family.children.length;i++){
    if(family.children[i].name.toLowerCase() == newEntry.genus.toLowerCase()){
      inTree = true;
      indexOfChild=i;
      break;
    }

  }

  if(inTree == false){  
    family.children.push({
      "name":newEntry.genus,
      "children":[]
    }
    );
    indexOfChild = family.children.length-1;
  }

  //Add Species Entry
  genus = family.children[indexOfChild];
  inTree = false;
  for(i = 0; i<genus.children.length;i++){
    if(genus.children[i].name.toLowerCase() == newEntry.species.toLowerCase()){
      inTree = true;
      indexOfChild=i;
      break;
    }
  }

  if(inTree == false){  
    genus.children.push({
      "name":newEntry.species,
      "children":[]
    }
    );
    indexOfChild = family.children.length-1;
  }
}

// fetch('./treedata.json') //Grabbnig Json Data ->
// .then(function(resp){
//     return resp.json();
// })
// .then(function(data){
//     console.log("Test")
//    parentFunction(data);
// }); //<-


// const treeData = {
//     name: "Top Level",
//     children: [
//       {
//         name: "Level 2: A",
//         children: [
//           {
//             name: "Son of A",
//           },
//           {
//             name: "Daughter of A",
//           },
//         ],
//       },
//       {
//         name: "Level 2: B",
//       },
//     ],
//   };

getWikiSearch();
function parentFunction(tData){
    const margin = { top: 20, right: 90, bottom: 0, left: 90 };
    const width = 2060 - margin.left - margin.right;
    const height = 2000 - margin.top - margin.bottom;
    
    
    let svg = d3
      .select(".container")
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    let i = 0;
    const duration = 750;
    let root;
    
    const treemap = d3.tree().size([height, width]);
    root = d3.hierarchy(tData, function (d) {
      return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;
    console.log("root ", root);
    
    update(root);
    
    function update(source) {
      const treeData = treemap(root);
    
      // nodes
      var nodes = treeData.descendants();
    
      nodes.forEach(function (d) {
        // Set y to a negative value for left-positioned nodes
        d.y = d.depth * 180 * (d.data.position === "left" ? -1 : 1);
      });
    
      var node = svg.selectAll("g.node").data(nodes, function (d) {
        return d.id || (d.id = ++i);
      });
    
      var nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
          return "translate(" + source.y0 + ", " + source.x0 + ")";
        })
        .on("click", click); //Attaches event listener
    
      nodeEnter
        .append("circle")
        .attr("class", "node")
        .attr("r", 0)
        .style("fill", function (d) {
          return d._children ? "red" : "#fff";
        });
    
      nodeEnter
        .append("text")
        .attr("dy", ".35em")
        .attr("x", function (d) {
          return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function (d) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function (d) {
          return d.data.name;
        });
    
      var nodeUpdate = nodeEnter.merge(node);
    
      nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + d.y + ", " + d.x + ")";
        });
    
      nodeUpdate
        .select("circle.node")
        .attr("r", 10)
        .style("fill", function (d) {
          return d._children ? "red" : "#fff";
        })
        .attr("cursor", "pointer");
    
      nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();
    
      nodeExit.select("circle").attr("r", 0);
      nodeExit.select("text").style("fill-opacity", 0);
    
      // links
      function diagonal(s, d) {
        path = `M ${s.y} ${s.x}
          C ${(s.y + d.y) / 2} ${s.x}
            ${(s.y + d.y) / 2} ${d.x}
            ${d.y} ${d.x}`;
        return path;
      }
      const links = treeData.descendants().slice(1);
      const link = svg.selectAll("path.link").data(links, function (d) {
        return d.id;
      });
      const linkEnter = link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
          let o = { x: source.x0, y: source.y };
          return diagonal(o, o);
        });
      const linkUpdate = linkEnter.merge(link);
      linkUpdate
        .transition()
        .duration(duration)
        .attr("d", function (d) {
          return diagonal(d, d.parent);
        });
    
      const linkExit = link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", function (d) {
          let o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        })
        .remove();
    
      nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    
      function click(event, d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    }

}
 