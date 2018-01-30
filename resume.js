$(document).ready(function(){

window.scrollTo(0,0);
var WdP=document.getElementById("webdev");
var JP=document.getElementById("java_proj");
var AP=document.getElementById("and_proj");

var proj=$("#projects");
proj.hide();

var Wproj_list=[
		{
		title:"Mausam",
		discription:"A weather forecast web app built using HTML,CSS and Javascript and open weathemap api!",
		url:"https://aayush2096.github.io/projectWeather/",
		tags:"html | css | javascript | api"
		},
		{
		title:"Temperature Converter C <-> F <-> K",
		discription:"A Temperature converter web app built using HTML,CSS and Javascript as a part of college mini project.",
		url:"https://aayush2096.github.io/tempConverter/",
		tags:"html | css | javascript"
		}
		];

var Jproj_list=[
		{
		title:"Syllabus Management System",
		discription:"A database management system built on java and using RDBMS",
		tags:"java | database",
		url:"https://github.com/aayush2096/projectManagement_java"
		}];


//show web development projects/////////////////////////////////////////////////////////////////////////////////////////////
WdP.addEventListener('click',function(){

proj.empty();

$.each(Wproj_list,function(i,item){

var new_div=$("<div class='projItem'><a href='"+item.url+"'><h3>"+item.title+"</h3></a><p>"+item.discription+"</p><h4>"+item.tags+"</h4></div>");
proj.append(new_div);


});

proj.hide();
proj.toggle(300);

});


//show java projects//////////////////////////////////////////////////////////////////////////////////

JP.addEventListener('click',function(){

proj.empty();
	$.each(Jproj_list,function(i,item){
		var new_div=$("<div class='projItem'><a href='"+item.url+"'><h3>"+item.title+"</h3></a><p>"+item.discription+"</p><h4>"+item.tags+"</h4></div>");
		
		proj.append(new_div);

	});
	proj.hide();
	proj.toggle(300);

});



document.getElementById("email").addEventListener("click",function(){
alert("my email id:aayush2096@gmail.com");
});




});
