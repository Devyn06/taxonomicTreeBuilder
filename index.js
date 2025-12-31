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
  speciesName = 'Panthera tigris altaica'
  url = `https://api.gbif.org/v2/species/match?scientificName=${encodeURIComponent(speciesName)}`;

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

  speciesName = 'Panthera onca centralis'
  url = `https://api.gbif.org/v2/species/match?scientificName=${encodeURIComponent(speciesName)}`;

  try {
    // const data = await (await fetch(url)).json();
    data = await (await fetch(url)).json();
    testText = document.getElementById("text");
    addToJSON(data)
  } catch (error) {
    console.error("Fetch error:", error);
  }

  speciesName = 'Panthera onca peruviana'
  url = `https://api.gbif.org/v2/species/match?scientificName=${encodeURIComponent(speciesName)}`;

  try {
    // const data = await (await fetch(url)).json();
    data = await (await fetch(url)).json();
    testText = document.getElementById("text");
    addToJSON(data)
  } catch (error) {
    console.error("Fetch error:", error);
  }

  speciesName = 'Panthera onca peruviana'
  url = `https://api.gbif.org/v2/species/match?scientificName=${encodeURIComponent(speciesName)}`;

  try {
    // const data = await (await fetch(url)).json();
    data = await (await fetch(url)).json();
    testText = document.getElementById("text");
    addToJSON(data)
  } catch (error) {
    console.error("Fetch error:", error);
  }


  speciesName = 'Felis silvestris catus'
  url = `https://api.gbif.org/v2/species/match?scientificName=${encodeURIComponent(speciesName)}`;

  try {
    // const data = await (await fetch(url)).json();
    data = await (await fetch(url)).json();
    testText = document.getElementById("text");
    addToJSON(data)
  } catch (error) {
    console.error("Fetch error:", error);
  }

  speciesName = 'Sepia officinalis hierredda'
  url = `https://api.gbif.org/v2/species/match?scientificName=${encodeURIComponent(speciesName)}`;

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

function tree_search(levelName, level,newEntry){//Checks if specific entry is in the tree
  inTree = false;
  indexOfChild = 0; 
  try{
    for(i = 0; i<levelName.children.length;i++){
      if((levelName.children[i].name.toLowerCase() == newEntry.classification[level].name.toLowerCase())){
        inTree = true;
        indexOfChild=i;
        break;
      }
    }
  
    if(inTree == false){  
      levelName.children.push({
        "name":newEntry.classification[level].name,
        "children":[]
      }
      );
      indexOfChild = levelName.children.length-1;
    }
  }
  catch(error){ //Throws error if there is no subspecies
    console.log("No subspecies")
  }
  
  return indexOfChild;
}

//Optimize this
function addToJSON(newEntry){

    indexOfChild = tree_search(tree,1,newEntry);

    phylum = tree.children[indexOfChild];
    indexOfChild = tree_search(phylum,2,newEntry);

    _class = phylum.children[indexOfChild];
    indexOfChild = tree_search(_class,3,newEntry);

    order = _class.children[indexOfChild];
    indexOfChild = tree_search(order,4,newEntry);

    family = order.children[indexOfChild];
    indexOfChild = tree_search(family,5,newEntry);

    genus = family.children[indexOfChild];
    indexOfChild = tree_search(genus,6,newEntry);

    species = genus.children[indexOfChild];
    indexOfChild = tree_search(species,7,newEntry);


  
//   //Add Phylum Entry
//   inTree = false;
//   indexOfChild = 0; 
//   for(i = 0; i<tree.children.length;i++){
//     if(tree.children[i].name.toLowerCase() == newEntry.phylum.toLowerCase()){
//       inTree = true;
//       indexOfChild=i;
//       break;
//     }
//   }

//   if(inTree == false){  
//     tree.children.push({
//       "name":newEntry.phylum,
//       "children":[]
//     }
//     );
//     indexOfChild = tree.children.length-1;
//   }

//   //Add Class Entry
//   phylum = tree.children[indexOfChild];
//   inTree = false;
//   for(i = 0; i<phylum.children.length;i++){
//     if(phylum.children[i].name.toLowerCase() == newEntry.class.toLowerCase()){
//       inTree = true;
//       indexOfChild=i;
//       break;
//     }
//   }

//   if(inTree == false){  
//     phylum.children.push({
//       "name":newEntry.class,
//       "children":[]
//     }
//     );
//     indexOfChild = phylum.children.length-1;
//   }

//   //Add Order Entry
//   _class = phylum.children[indexOfChild];
//   inTree = false;
//   for(i = 0; i<_class.children.length;i++){
//     if(_class.children[i].name.toLowerCase() == newEntry.order.toLowerCase()){
//       inTree = true;
//       indexOfChild=i;
//       break;
//     }
//   }

//   if(inTree == false){  
//     _class.children.push({
//       "name":newEntry.order,
//       "children":[]
//     }
//     );
//     indexOfChild = _class.children.length-1;
//   }



// //Add Family Entry
//   order = _class.children[indexOfChild];
//   inTree = false;
//   for(i = 0; i<order.children.length;i++){
//     if(order.children[i].name.toLowerCase() == newEntry.family.toLowerCase()){
//       inTree = true;
//       indexOfChild=i;
//       break;
//     }
//   }

//   if(inTree == false){  
//     order.children.push({
//       "name":newEntry.family,
//       "children":[]
//     }
//     );
//     indexOfChild = order.children.length-1;
//   }

//   //Add Genus Entry
//   family = order.children[indexOfChild];
//   inTree = false;
//   for(i = 0; i<family.children.length;i++){
//     if(family.children[i].name.toLowerCase() == newEntry.genus.toLowerCase()){
//       inTree = true;
//       indexOfChild=i;
//       break;
//     }

//   }

//   if(inTree == false){  
//     family.children.push({
//       "name":newEntry.genus,
//       "children":[]
//     }
//     );
//     indexOfChild = family.children.length-1;
//   }

//   //Add Species Entry
//   genus = family.children[indexOfChild];
//   inTree = false;
//   for(i = 0; i<genus.children.length;i++){
//     if(genus.children[i].name.toLowerCase() == newEntry.species.toLowerCase()){
//       inTree = true;
//       indexOfChild=i;
//       break;
//     }
//   }

//   if(inTree == false){  
//     genus.children.push({
//       "name":newEntry.species,
//       "children":[]
//     }
//     );
//     indexOfChild = genus.children.length-1;
//   }

//     //Add Sub-Species Entry
//     species = genus.children[indexOfChild];
//     inTree = false;
//     for(i = 0; i<species.children.length;i++){
//       if(species.children[i].name.toLowerCase() == newEntry.species.toLowerCase()){
//         inTree = true;
//         indexOfChild=i;
//         break;
//       }
//     }
  
//     if(inTree == false){  
//       genus.children.push({
//         "name":newEntry.species,
//         "children":[]
//       }
//       );
//       indexOfChild = genus.children.length-1;
//     }
}


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
    
    const treemap = d3.tree().size([width, height]);
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
          return "translate(" + source.x0 + ", " + source.y0 + ")";
        })
        .on("dblclick", dblclick) //Attaches event listener
        .on("click", click);
    
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
          return "translate(" + d.x + ", " + d.y + ")";
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
          return "translate(" + source.x + "," + source.y + ")";
        })
        .remove();
    
      nodeExit.select("circle").attr("r", 0);
      nodeExit.select("text").style("fill-opacity", 0);
    
      // links
      function diagonal(s, d) {
        path = `M ${s.x} ${s.y}
          L ${s.x} ${(s.y + d.y) / 2},
            ${d.x} ${(s.y + d.y) / 2},
            ${d.x} ${d.y}`;
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

      let clickTimer;
      function click(event, d) { //When click get the name of the Node and get information about the species
        if (clickTimer){
          clearTimeout(clickTimer);
        }
        clickTimer = setTimeout(async () => {
          if (!d.children) {
            const nodeName = d.data.name;
            console.log("You clicked:", nodeName);
            url = `https://api.gbif.org/v1/species/search?scientificName=${encodeURIComponent(nodeName)}`;
            try {
              data = await (await fetch(url)).json();
              testText = document.getElementById("text");
              console.log(data)
            } catch (error) {
              console.error("Fetch error:", error);
            }

          }
          },250);
      }
    
      function dblclick(event, d) {
        clearTimeout(clickTimer);
        clickTimer = null;
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
 