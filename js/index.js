
var width = window.innerWidth;
var height = window.innerHeight;
var svg = d3.select('body').append('svg');
svg.attr('width', width);
svg.attr('height', height);

var ox = width/3; //x offset
var oy = height/12; //y offset
var s = .75; //scale


var max_x_boundary = (750*s)+ox
var min_x_boundary = (150*s)+ox
var max_y_boundary = (276*s)+oy
var min_y_boundary = (108*s)+oy

var regions = [
              [{ "x": 200, "y": 108},
              { "x": 456,  "y": 139}],

              [{ "x": 536, "y": 108},
              { "x": 705,  "y": 139}],

              [{ "x": 645,  "y": 183},
              { "x": 760,  "y": 270}],

              [{ "x": 323,  "y": 236},
              { "x": 530,  "y": 270}],
              
              [{ "x": 119,  "y": 200},
              { "x": 193,  "y": 276}],

              [{ "x": 270,  "y": 139},
              { "x": 692, "y": 236}]
              ]

//This is the accessor function we talked about above
var lineFunction = d3.line()
  .x(function(d) { return ((d.x)*s)+ox; })
  .y(function(d) { return ((d.y)*s)+oy; })
  .curve(d3.curveLinear);


var defs = svg.append("defs");

var gradient = defs.append("linearGradient")
   .attr("id", "svgGradient")
   .attr("x1", "0%")
   .attr("x2", "0%")
   .attr("y1", "0%")
   .attr("y2", "100%");

gradient.append("stop")
   .attr('class', 'start')
   .attr("offset", "30%")
   .attr("stop-color", "#90B77E")
   .attr("stop-opacity", 1);

gradient.append("stop")
   .attr('class', 'end')
   .attr("offset", "100%")
   .attr("stop-color", "rgba(234,240,243,1)")
   .attr("stop-opacity", 1);

//The data for our line
var floorplan = [ { "x": 200,   "y": 108},  { "x": 456,  "y": 108},
                 { "x": 456,  "y": 139}, { "x": 545,  "y": 139},
                 { "x": 536,  "y": 108},  { "x": 700, "y": 108},
                 { "x": 728,  "y": 139},  { "x": 663, "y": 139},
                 { "x": 692,  "y": 183},  { "x": 766, "y": 183},
                 { "x": 847,  "y": 276},  { "x": 654, "y": 276},
                 { "x": 636,  "y": 236},  { "x": 530, "y": 236},
                 { "x": 538,  "y": 276},  { "x": 311, "y": 276},
                 { "x": 323,  "y": 236},  { "x": 215, "y": 236},
                 { "x": 193,  "y": 276},  { "x": 54, "y": 276},
                 { "x": 119,  "y": 200},  { "x": 235, "y": 200},
                 { "x": 270,  "y": 139},  { "x": 172, "y": 139},
                 { "x": 200,   "y": 108}];
  
//The line SVG Path we draw
var lineGraph = svg.append("path")
  .attr("d", lineFunction(floorplan))
  .attr("stroke-width", 2)
  .attr("fill", "#D8D8D8")
  .attr("fill-opacity", 0);

lineGraph.transition()
	.duration(200)
	.attr("transform","translate(0,20)")
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("transform","translate(0,-50)")
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("transform", "translate(0,0)")
	.attr("fill-opacity", 1);  	

var image4 = svg.append("svg:image")
    .attr("xlink:href", "https://i.pinimg.com/736x/39/22/43/392243e580c62a500f92884944fdfabb--building-logo-moma-logo.jpg")
    .attr("x", 725)
    .attr("y", 170)
    .attr("width", 64)
    .attr("height", 64)
    .style("opacity", 0.5)
    .attr("fill-opacity", 0);

image4.transition()
	.delay(200)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("fill-opacity", 1);

var myText =  svg.append("text")
   .attr("y", 80)
   .attr("x", 100)
   .attr('text-anchor', 'left')
   .attr("class", "myLabel")//easy to style with CSS
   .text("Boy's Club")
   .attr("fill-opacity", 0);

var myText1 =  svg.append("text")
   .attr("y", 130)
   .attr("x", 100)
   .attr('text-anchor', 'left')
   .attr("class", "myLabel1")//easy to style with CSS
   .text("Exploring MoMA Acquisitions by Female Artists")
   .attr("fill-opacity", 0);

var myText2 =  svg.append("text")
   .attr("y", 180)
   .attr("x", 100)
   .attr('text-anchor', 'left')
   .attr("class", "myLabel2")//easy to style with CSS
   .text("This data visualization offers an exploratory")
   .attr("fill-opacity", 0);
var myText3 =  svg.append("text")
   .attr("y", 195)
   .attr("x", 100)
   .attr("dy", "1em")
   .attr('text-anchor', 'left')
   .attr("class", "myLabel2")//easy to style with CSS
   .text("examination of artwork acquisitions by the")
   .attr("fill-opacity", 0);
var myText4 =  svg.append("text")
   .attr("y", 210)
   .attr("x", 100)
   .attr("dy", "2em")
   .attr('text-anchor', 'left')
   .attr("class", "myLabel2")//easy to style with CSS
   .text(" Museum of Modern Art from 1951 to 2016.")
   .attr("fill-opacity", 0);

myText.transition()
 //   	.duration(200)
	// .attr("x",100)
	// .attr("y",100)
	// .transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",70)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",80)
	.attr("fill-opacity", 1);

myText1.transition()
  	.delay(150)
  	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",120)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",130)
	.attr("fill-opacity", 1);

myText2.transition()
  	.delay(250)
  	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",170)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",180)
	.attr("fill-opacity", 1);

myText3.transition()
  	.delay(250)
  	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",185)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",195)
	.attr("fill-opacity", 1);

myText4.transition()
	.delay(250)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",200)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",210)
	.attr("fill-opacity", 1);





    // .attr("stroke", "lightgrey")
    // .attr("stroke-width", 0.5);
    //.style("filter", "url(#drop-shadow)");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/10Wbbx6IyPvH4xmyFBafGNDxaFweQRcTR0HMsYbLaHJk/edit?usp=sharing"


function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: drawInfo,
                   simpleSheet: true } )
}

function drawInfo(data, tabletop) {

  var width_rect = 150;
  var total_years = data.length + 1951;
  var height_rect = 1800/data.length;
  var y_start = 510;
  var x_start = 1900;


  

  function circle_destroy(){
    var circles = svg.selectAll("circle").remove();

  }

  function circle_generator(year_data){
    var num_artworks = parseInt(year_data)-1951+66;
    var circle_data = [];
    var x = 0;
    var y = 0;
    var region = 0;
    //console.log(regions[1][1].x);
    for (i=0; i < data[num_artworks].numartists; i++){
      //draw circle

      region = getRandomInt(0, 5);
      x = getRandomInt(regions[region][0].x, regions[region][1].x);
      y = getRandomInt(regions[region][0].y, regions[region][1].y);
      x = x*s+ox;
      y = y*s+oy;
      //console.log(x);
      circle_data.push({ "x_axis": x, "y_axis": y}); //"name": "desc"});
    }

    var circles = svg.selectAll("circle")
                            .data(circle_data)
                            .enter()
                            .append("circle");

    var circleAttributes = circles
                            .attr("cx", function(d){ return d.x_axis})
                            .attr("cy", function(d){ return d.y_axis})
                            .attr("r", 3)
                            .attr("fill", function(d){ return "#90B77E";})
  }
  

  var rects = svg.selectAll("rect")
                            .data(data)
                            .enter()
                            .append("rect");

  function xoffset(year) {
    var offset;
    var yearnum = year-1951;
    offset = yearnum - yearnum%10;
    return offset;
  }

  

  var rectAttributes = rects
                         .attr("y", function(d) {
                           var returny;
                           if (d.genderartist === "1") { returny = y_start- (width_rect*(d.percentartist/100));
                           } 
                           else { returny = y_start-width_rect;
                           } 
                           return returny; })

                         .attr("x", function (d) { return x_start-((total_years-d.year)*height_rect) + (xoffset(d.year))*1.5; })

                         .attr("height", function (d) { return 0; } )

                         .attr("width", height_rect)
                         .attr("stroke", "#F9F9FD")
                         .attr("fill", function(d) {
                           var returnfill;
                           if (d.genderartist === "1") { returnfill = "url(#svgGradient)";
                           } 
                           else { returnfill = "rgba(234,240,243,1)";

                           } 
                           return returnfill; });

rects.transition()

	.delay(function(d,i){
		return i*10;
	})
	.duration(80)
	.attr("y", function (d){
		var returny;
                           if (d.genderartist === "1") { returny = y_start- (width_rect*(d.percentartist/100));
                           } 
                           else { returny = y_start-width_rect;
                           } 
                           return returny;
	})
	.attr("height", function(d){
		return width_rect*(d.percentartist/100);
	});


rects.on('mouseover', function(d) {
         circle_destroy();
         d3.select(rects._groups[0][parseInt(d.year)-1951]).style("fill", "#F7D94C");
         d3.select(rects._groups[0][parseInt(d.year)-1951+66]).style("fill", "#F7D94C");
         circle_generator(d.year);

      })
     .on('mouseout', function(d) {

        d3.select(rects._groups[0][parseInt(d.year)-1951])
            .style("fill", function(d) {
                           var returnfill;
                           if (d.genderartist === "1") { returnfill = "url(#svgGradient)";
                           } 
                           else { returnfill = "rgba(234,240,243,1)";

                           } 
                           return returnfill; })
        d3.select(rects._groups[0][parseInt(d.year)-1951+66])
            .style("fill", function(d) {
                             var returnfill;
                             if (d.genderartist === "1") { returnfill = "url(#svgGradient)";
                             } 
                             else { returnfill = "rgba(234,240,243,1)";

                             }})
          
     })
     .on('click', function(d) {});

var legend = svg.append("a")
    .attr("xlink:href", "https://www.moma.org/about/who-we-are/moma-history")
    .append("rect")  
    .attr("x", 100)
    .attr("y", 300)
    .attr("height", 15)
    .attr("width", 15)
    .style("fill", "#90B77E")
    .attr("rx", 2)
    .attr("ry", 2)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5)
    .attr("fill-opacity", 0);

var legendText =  svg.append("text")
   .attr("x", 120)
   .attr("y", 312)
   .attr('text-anchor', 'left')
   .attr("class", "event_label")//easy to style with CSS
   .text("% Female Artists")
   .attr("fill-opacity", 0);

var legend1 = svg.append("a")
    .attr("xlink:href", "https://www.moma.org/about/who-we-are/moma-history")
    .append("rect")  
    .attr("x", 250)
    .attr("y", 300)
    .attr("height", 15)
    .attr("width", 15)
    .style("fill", "#EAF0F3")
    .attr("rx", 2)
    .attr("ry", 2)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5)
    .attr("fill-opacity", 0);

var legendText2 =  svg.append("text")
   .attr("x", 270)
   .attr("y", 312)
   .attr('text-anchor', 'left')
   .attr("class", "event_label")//easy to style with CSS
   .text("% Male Artists")
   .attr("fill-opacity", 0);

legend.transition()
	.delay(250)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",100)
	.attr("y",290)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",100)
	.attr("y",300)
	.attr("fill-opacity", 1);

legendText.transition()
	.delay(250)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",120)
	.attr("y",302)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",120)
	.attr("y",312)
	.attr("fill-opacity", 1);

legend1.transition()
	.delay(250)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",250)
	.attr("y",290)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",250)
	.attr("y",300)
	.attr("fill-opacity", 1);

legendText2.transition()
	.delay(250)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("x",270)
	.attr("y",302)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("x",270)
	.attr("y",312)
	.attr("fill-opacity", 1);



     // draw a rectangle
var event = svg.append("a")
    .attr("xlink:href", "https://www.moma.org/about/who-we-are/moma-history")
    .append("rect")  
    .attr("x", 100)
    .attr("y", 560)
    .attr("height", 70)
    .attr("width", 225)
    .style("fill", "white")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5)
    .attr("fill-opacity", 0);

event.transition()
	.delay(2000)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("fill-opacity", 1);

var event2 = svg.append("a")
    .attr("xlink:href", "https://www.brooklynmuseum.org/eascfa/dinner_party/tour_and_home/")
    .append("rect")  
    .attr("x", 375)
    .attr("y", 560)
    .attr("height", 70)
    .attr("width", 225)
    .style("fill", "white")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5)
    .attr("fill-opacity", 0);

event2.transition()
	.delay(2100)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("fill-opacity", 1);

var event3 = svg.append("a")
    .attr("xlink:href", "https://www.nytimes.com/1984/04/21/arts/a-living-artists-show-at-the-modern-museum.html?pagewanted=all")
    .append("rect")  
    .attr("x", 650)
    .attr("y", 560)
    .attr("height", 70)
    .attr("width", 235)
    .style("fill", "white")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5)
    .attr("fill-opacity", 0);

event3.transition()
	.delay(2200)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("fill-opacity", 1);

var event4 = svg.append("a")
    .attr("xlink:href", "https://nmwa.org/about/our-history")
    .append("rect")  
    .attr("x", 925)
    .attr("y", 560)
    .attr("height", 70)
    .attr("width", 225)
    .style("fill", "white")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 0.5)
    .attr("fill-opacity", 0);

event4.transition()
	.delay(2300)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("fill-opacity", 1);

var image = svg.append("svg:image")
    .attr("xlink:href", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Moma-1-logo.jpg")
    .attr("x", 100)
    .attr("y", 565)
    .attr("width", 64)
    .attr("height", 64)
    .style("opacity", 0.8)
    .attr("fill-opacity", 0);

// image.transition()
// 	.delay(2000)
// 	.transition()
// 	.ease(d3.easeQuadInOut)
// 	.delay(50)
// 	.duration(400)
// 	.attr("fill-opacity", .2)
// 	.transition()
// 	.ease(d3.easeSin)
// 	.delay(50)
// 	.duration(600)
// 	.attr("fill-opacity", 1);	

var image1 = svg.append("svg:image")
    .attr("xlink:href", "https://timedotcom.files.wordpress.com/2018/04/time-100-judy-chicago.jpg?quality=85&zoom=2")
    .attr("x", 375)
    .attr("y", 565)
    .attr("width", 60)
    .attr("height", 60)
    .attr("rx", 10)
    .attr("ry", 10)
    .style("opacity", 0.8)
    .attr("fill-opacity", 0);

image1.transition()
	.delay(2100)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("fill-opacity", 1);

var image2 = svg.append("svg:image")
    .attr("xlink:href", "https://mcad.edu/sites/default/files/styles/full_width_460h/public/1781837_10152730816698222_165103944_o_0.jpg?itok=8HoiPrD_")
    .attr("x", 650)
    .attr("y", 565)
    .attr("width", 64)
    .attr("height", 64)
    .style("opacity", 0.8)
    .attr("fill-opacity", 0);

image2.transition()
	.delay(2200)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("fill-opacity", 1);

var image3 = svg.append("svg:image")
    .attr("xlink:href", "https://www.arttable.org/content_images/NATIONAL%20MUSEUM%20OF%20WOMEN%20IN%20THE%20ARTS%20LOGO.png")
    .attr("x", 932)
    .attr("y", 567)
    .attr("width", 57)
    .attr("height", 57)
    .attr("rx", 10)
    .attr("ry", 10)
    .style("opacity", 0.8)
    .attr("fill-opacity", 0);

image3.transition()
	.delay(2300)
	.transition()
	.ease(d3.easeQuadInOut)
	.delay(50)
	.duration(400)
	.attr("fill-opacity", .2)
	.transition()
	.ease(d3.easeSin)
	.delay(50)
	.duration(600)
	.attr("fill-opacity", 1);


var myEventText =  svg.append("text")
   .attr("x", 170)
   .attr("y", 575)
   .attr("dy", "0em")
   .attr('text-anchor', 'left')
   .attr("class", "event_label")//easy to style with CSS
   .text("1951 - MoMA expanded,")
   
    svg.append("text")
    .attr("x", 170)
    .attr("y", 575)
    .attr("dy", "1em")
    .attr("class", "event_label")
    .text("opening the seven-story")

    svg.append("text")
    .attr("x", 170)
    .attr("y", 575)
    .attr("dy", "2em")
    .attr("class", "event_label")
    .text("Grace Rainey Rogers Annex")

var myEventText =  svg.append("text")
   .attr("x", 445)
   .attr("y", 575)
   .attr("dy", "0em")
   .attr('text-anchor', 'left')
   .attr("class", "event_label")//easy to style with CSS
   .text("1979 - The Dinner Party")
   
    svg.append("text")
    .attr("x", 445)
    .attr("y", 575)
    .attr("dy", "1em")
    .attr("class", "event_label")
    .text("by artist Judy Chicago")

    svg.append("text")
    .attr("x", 445)
    .attr("y", 575)
    .attr("dy", "2em")
    .attr("class", "event_label")
    .text("to 'end the ongoing cycle'")

    svg.append("text")
    .attr("x", 445)
    .attr("y", 575)
    .attr("dy", "3em")
    .attr("class", "event_label")
    .text("of omission")

  var myEventText =  svg.append("text")
   .attr("x", 715)
   .attr("y", 575)
   .attr("dy", "0em")
   .attr('text-anchor', 'left')
   .attr("class", "event_label")//easy to style with CSS
   .text("1985 - Guerrilla Girls")
   
    svg.append("text")
    .attr("x", 715)
    .attr("y", 575)
    .attr("dy", "1em")
    .attr("class", "event_label")
    .text("begun by seven women in")

    svg.append("text")
    .attr("x", 715)
    .attr("y", 575)
    .attr("dy", "2em")
    .attr("class", "event_label")
    .text("response to a MoMA exhibition")

    svg.append("text")
    .attr("x", 715)
    .attr("y", 575)
    .attr("dy", "3em")
    .attr("class", "event_label")
    .text("whose roster of 165 artists")

    svg.append("text")
    .attr("x", 715)
    .attr("y", 575)
    .attr("dy", "4em")
    .attr("class", "event_label")
    .text("included only 13 women")

  var myEventText =  svg.append("text")
   .attr("x", 995)
   .attr("y", 575)
   .attr("dy", "0em")
   .attr('text-anchor', 'left')
   .attr("class", "event_label")//easy to style with CSS
   .text("1987 - National Museum of")
   
    svg.append("text")
    .attr("x", 995)
    .attr("y", 575)
    .attr("dy", "1em")
    .attr("class", "event_label")
    .text("Women Artists (NMWA)")

    svg.append("text")
    .attr("x", 995)
    .attr("y", 575)
    .attr("dy", "2em")
    .attr("class", "event_label")
    .text("opens its doors in")

    svg.append("text")
    .attr("x", 995)
    .attr("y", 575)
    .attr("dy", "3em")
    .attr("class", "event_label")
    .text("Washington, DC")

    svg.append("text")
    .attr("x", 80)
    .attr("y", 530)
    .attr("class", "event_label")
    .text("1951")

    var spacing = height_rect*11;
    var x_coord = 80+spacing

    svg.append("text")
    .attr("x",x_coord)
    .attr("y", 530)
    .attr("class", "event_label")
    .text("1961")

    x_coord = x_coord + spacing;

    svg.append("text")
    .attr("x",x_coord)
    .attr("y", 530)
    .attr("class", "event_label")
    .text("1971")

    x_coord = x_coord + spacing;
    svg.append("text")
        .attr("x",x_coord)
        .attr("y", 530)
        .attr("class", "event_label")
        .text("1981")

    x_coord = x_coord + spacing + 3;
    svg.append("text")
      .attr("x",x_coord)
      .attr("y", 530)
      .attr("class", "event_label")
      .text("1991")

    x_coord = x_coord + spacing + 3;
    svg.append("text")
      .attr("x",x_coord)
      .attr("y", 530)
      .attr("class", "event_label")
      .text("2001")

    x_coord = x_coord + spacing + 3; 
    svg.append("text")
      .attr("x",x_coord)
      .attr("y", 530)
      .attr("class", "event_label")
      .text("2011")






}

window.addEventListener('DOMContentLoaded', init)




