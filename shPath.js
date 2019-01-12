

function shortestPath(edges, numVertices, startVertex) {
  var done = new Array(numVertices);   // spanning tree
  done[startVertex] = true;
  var pathLengths = new Array(numVertices);   // el length hya number of vertices
  var sTrt = new Array(numVertices);  // ha5od 2al vertices w htp2a hya el start
  for (var i = 0; i < numVertices; i++) {
    pathLengths[i] = edges[startVertex][i];
    if (edges[startVertex][i] != Infinity) {
      sTrt[i] = startVertex;    // bta5od el m4 beinfinity leh 3l4an el byinfinity myhmna4
    }
  }
  pathLengths[startVertex] = 0;
  for (var i = 0; i < numVertices - 1; i++) {
    var closest = -1;
    var closestDistance = Infinity;   // 5ala ba2e el distances be infinity
    for (var j = 0; j < numVertices; j++) {
      if (!done[j] && pathLengths[j] < closestDistance)
       {
        closestDistance = pathLengths[j];
        closest = j;
      }
    }
    done[closest] = true;
    for (var j = 0; j < numVertices; j++) {
      if (!done[j]) {
        var possiblyCloserDistance = pathLengths[closest] + edges[closest][j];
        if (possiblyCloserDistance < pathLengths[j]) {
          pathLengths[j] = possiblyCloserDistance;   // el closer distance dh el feh shortest path 
          sTrt[j] = closest;
        }
      }
    }
  }
  return { "startVertex": startVertex,
           "pathLengths": pathLengths,
            };
}

function constructPath(shortestPathInfo, endVertex)
{
  var path = [];
  while (endVertex != shortestPathInfo.startVertex) {
    path.unshift(endVertex);   // unshift de 3l4an ydmn 2no ya5od kol el vertices
    endVertex = shortestPathInfo.sTrt[endVertex];
  }
  return path;
}

var _ = Infinity;
var e = [
  [ _, 1, 3],
  [ 1, _, 3],
  [ 4, 3, _ ]

];

// var shortestPathInfo = shortestPath(e, 3, 1);

console.log(shortestPath(e, 3, 1));
