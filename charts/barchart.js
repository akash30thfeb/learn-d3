function draw_barchart(svg_el, col){
  var W = $(svg_el).attr('width')
  var H = $(svg_el).attr('height')
  var margin = {'top': H*0.1, 'bottom': H*0.1,
                'left': W*0.1, 'right': W*0.1}
  var g_tag = d3.select(svg_el)
               .append('g')
               .attr('transform',
                'translate('+margin.left+','+margin.top+')')
}