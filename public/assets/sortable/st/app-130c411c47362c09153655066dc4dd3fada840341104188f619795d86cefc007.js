function renderThresholdWidth(e){example7SwapThreshold=Number(e.target.value),example7SwapThresholdCode.innerHTML=e.target.value.indexOf(".")>-1?e.target.value.padEnd(4,"0"):e.target.value;for(var t=0;t<activeIndicators.length;t++)activeIndicators[t].style[example7SizeProperty]=100*e.target.value/(activeIndicators==example7SwapThresholdIndicators?1:2)+"%";example7Sortable.option("swapThreshold",example7SwapThreshold)}function renderDirection(e){for(var t=0;t<example7Squares.length;t++)example7Squares[t].style.display="h"===e.target.value?"inline-block":"block";for(t=0;t<example7InvertedSwapThresholdIndicators.length;t++)"h"===e.target.value&&(example7InvertedSwapThresholdIndicators[t].style.height="100%"),"v"===e.target.value&&(example7InvertedSwapThresholdIndicators[t].style.width="100%");for(t=0;t<example7SwapThresholdIndicators.length;t++)"h"===e.target.value?(example7SwapThresholdIndicators[t].style.height="100%",example7SwapThresholdIndicators[t].style.marginLeft="50%",example7SwapThresholdIndicators[t].style.transform="translateX(-50%)",example7SwapThresholdIndicators[t].style.marginTop="0"):(example7SwapThresholdIndicators[t].style.width="100%",example7SwapThresholdIndicators[t].style.marginTop="50%",example7SwapThresholdIndicators[t].style.transform="translateY(-50%)",example7SwapThresholdIndicators[t].style.marginLeft="0");"h"===e.target.value?(example7SizeProperty="width",example7Sortable.option("direction","horizontal")):(example7SizeProperty="height",example7Sortable.option("direction","vertical")),renderThresholdWidth({target:example7SwapThresholdInput})}var example1=document.getElementById("example1"),example2Left=document.getElementById("example2-left"),example2Right=document.getElementById("example2-right"),example3Left=document.getElementById("example3-left"),example3Right=document.getElementById("example3-right"),example4Left=document.getElementById("example4-left"),example4Right=document.getElementById("example4-right"),example5=document.getElementById("example5"),example6=document.getElementById("example6"),example7=document.getElementById("example7"),gridDemo=document.getElementById("gridDemo");new Sortable(example1,{animation:150,ghostClass:"blue-background-class"}),new Sortable(example2Left,{group:"shared",animation:150}),new Sortable(example2Right,{group:"shared",animation:150}),new Sortable(example3Left,{group:{name:"shared",pull:"clone"},animation:150}),new Sortable(example3Right,{group:{name:"shared",pull:"clone"},animation:150}),new Sortable(example4Left,{group:{name:"shared",pull:"clone",put:!1},animation:150,sort:!1}),new Sortable(example4Right,{group:"shared",animation:150}),new Sortable(example5,{handle:".handle",animation:150}),new Sortable(example6,{filter:".filtered",animation:150});var example7Sortable=new Sortable(example7,{animation:150}),example7SwapThreshold=1,example7SwapThresholdInput=document.getElementById("example7SwapThresholdInput"),example7SwapThresholdCode=document.getElementById("example7SwapThresholdCode"),example7SwapThresholdIndicators=[].slice.call(document.querySelectorAll(".swap-threshold-indicator")),example7InvertSwapInput=document.getElementById("example7InvertSwapInput"),example7InvertSwapCode=document.getElementById("example7InvertSwapCode"),example7InvertedSwapThresholdIndicators=[].slice.call(document.querySelectorAll(".inverted-swap-threshold-indicator")),example7Squares=[].slice.call(document.querySelectorAll(".square")),activeIndicators=example7SwapThresholdIndicators,example7DirectionInput=document.getElementById("example7DirectionInput"),example7SizeProperty="width";example7SwapThresholdInput.addEventListener("input",renderThresholdWidth),example7InvertSwapInput.addEventListener("input",function(e){example7Sortable.option("invertSwap",e.target.checked);for(var t=0;t<activeIndicators.length;t++)activeIndicators[t].style.display="none";for(e.target.checked?(example7InvertSwapCode.style.display="",activeIndicators=example7InvertedSwapThresholdIndicators):(example7InvertSwapCode.style.display="none",activeIndicators=example7SwapThresholdIndicators),renderThresholdWidth({target:example7SwapThresholdInput}),t=0;t<activeIndicators.length;t++)activeIndicators[t].style.display=""}),example7DirectionInput.addEventListener("input",renderDirection),renderDirection({target:example7DirectionInput}),new Sortable(gridDemo,{animation:150,ghostClass:"blue-background-class"});for(var nestedSortables=[].slice.call(document.querySelectorAll(".nested-sortable")),i=0;i<nestedSortables.length;i++)new Sortable(nestedSortables[i],{group:"nested",animation:150});