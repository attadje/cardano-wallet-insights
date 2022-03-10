type=["primary","info","success","warning","danger"],demo={initPickColor:function(){$(".pick-class-label").click((function(){var e=$(this).attr("new-class"),o=$("#display-buttons").attr("data-class"),t=$("#display-buttons");if(t.length){var r=t.find(".btn");r.removeClass(o),r.addClass(e),t.attr("data-class",e)}}))},initDocChart:function(){chartColor="#FFFFFF",gradientChartOptionsConfiguration={maintainAspectRatio:!1,legend:{display:!1},tooltips:{bodySpacing:4,mode:"nearest",intersect:0,position:"nearest",xPadding:10,yPadding:10,caretPadding:10},responsive:!0,scales:{yAxes:[{display:0,gridLines:0,ticks:{display:!1},gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}],xAxes:[{display:0,gridLines:0,ticks:{display:!1},gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}]},layout:{padding:{left:0,right:0,top:15,bottom:15}}},ctx=document.getElementById("lineChartExample").getContext("2d"),gradientStroke=ctx.createLinearGradient(500,0,100,0),gradientStroke.addColorStop(0,"#80b6f4"),gradientStroke.addColorStop(1,chartColor),gradientFill=ctx.createLinearGradient(0,170,0,50),gradientFill.addColorStop(0,"rgba(128, 182, 244, 0)"),gradientFill.addColorStop(1,"rgba(249, 99, 59, 0.40)"),myChart=new Chart(ctx,{type:"line",responsive:!0,data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Active Users",borderColor:"#f96332",pointBorderColor:"#FFF",pointBackgroundColor:"#f96332",pointBorderWidth:2,pointHoverRadius:4,pointHoverBorderWidth:1,pointRadius:4,fill:!0,backgroundColor:gradientFill,borderWidth:2,data:[542,480,430,550,530,453,380,434,568,610,700,630]}]},options:gradientChartOptionsConfiguration})},initDashboardPageCharts:function(){gradientChartOptionsConfigurationWithTooltipBlue={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#2380f7"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#2380f7"}}]}},gradientChartOptionsConfigurationWithTooltipPurple={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}},gradientChartOptionsConfigurationWithTooltipOrange={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:110,padding:20,fontColor:"#ff8a76"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(220,53,69,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#ff8a76"}}]}},gradientChartOptionsConfigurationWithTooltipGreen={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}},gradientBarChartConfiguration={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}},(n=(a=document.getElementById("chartLinePurple").getContext("2d")).createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(72,72,176,0.2)"),n.addColorStop(.2,"rgba(72,72,176,0.0)"),n.addColorStop(0,"rgba(119,52,169,0)");var e={labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,backgroundColor:n,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#d048b6",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#d048b6",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,100,70,80,120,80]}]},o=(new Chart(a,{type:"line",data:e,options:gradientChartOptionsConfigurationWithTooltipPurple}),document.getElementById("chartLineGreen").getContext("2d"));(n=a.createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(66,134,121,0.15)"),n.addColorStop(.4,"rgba(66,134,121,0.0)"),n.addColorStop(0,"rgba(66,134,121,0)");e={labels:["JUL","AUG","SEP","OCT","NOV"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:n,borderColor:"#00d6b4",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00d6b4",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[90,27,60,12,80]}]},new Chart(o,{type:"line",data:e,options:gradientChartOptionsConfigurationWithTooltipGreen});var t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],r=[100,70,90,70,85,60,75,60,90,80,110,100];(n=(a=document.getElementById("chartBig1").getContext("2d")).createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(72,72,176,0.1)"),n.addColorStop(.4,"rgba(72,72,176,0.0)"),n.addColorStop(0,"rgba(119,52,169,0)");var a,n,i={type:"line",data:{labels:t,datasets:[{label:"My First dataset",fill:!0,backgroundColor:n,borderColor:"#d346b1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#d346b1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#d346b1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:r}]},options:gradientChartOptionsConfigurationWithTooltipPurple},l=new Chart(a,i);$("#0").click((function(){var e=l.config.data;e.datasets[0].data=r,e.labels=t,l.update()})),$("#1").click((function(){var e=l.config.data;e.datasets[0].data=[80,120,105,110,95,105,90,100,80,95,70,120],e.labels=t,l.update()})),$("#2").click((function(){var e=l.config.data;e.datasets[0].data=[60,80,65,130,80,105,90,130,70,115,60,130],e.labels=t,l.update()})),(n=(a=document.getElementById("CountryChart").getContext("2d")).createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(29,140,248,0.2)"),n.addColorStop(.4,"rgba(29,140,248,0.0)"),n.addColorStop(0,"rgba(29,140,248,0)");new Chart(a,{type:"bar",responsive:!0,legend:{display:!1},data:{labels:["USA","GER","AUS","UK","RO","BR"],datasets:[{label:"Countries",fill:!0,backgroundColor:n,hoverBackgroundColor:n,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,data:[53,20,10,80,100,45]}]},options:gradientBarChartConfiguration})},initGoogleMaps:function(){var e=new google.maps.LatLng(40.748817,-73.985428),o={zoom:13,center:e,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},t=new google.maps.Map(document.getElementById("map"),o);new google.maps.Marker({position:e,title:"Hello World!"}).setMap(t)},showNotification:function(e,o){color=Math.floor(4*Math.random()+1),$.notify({icon:"tim-icons icon-bell-55",message:"Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."},{type:type[color],timer:8e3,placement:{from:e,align:o}})}};
//# sourceMappingURL=index.b18fb51f.js.map