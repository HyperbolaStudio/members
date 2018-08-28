$(document).ready(function(){
	var id=location.pathname;
	$.get("members/"+id,function(data){
		$("#memberName").append(data.mamberName);
		$("#memberSex").append(data.mamberSex);
		$("#joinDate").append(data.joinDate);
		$("#id").append(data.ID);
		$("#valid").append(data.validfrom+"~"data.validUntil);
		$.get("org.txt",function(org){
			var issueOrg=data.issueOrg;
			var current=data.current;
			var orglist=new Array();
			var origin=org.split("\r\n");
			for(var i=0;i<origin.length;i++){
				var x=origin[i];
				if(!(x[0]=="/" && x[1]=="/")){
					orglist[0].push(x.split(":")[0]);
					orglist[1].push(x.split(":")[1]);
				}
			}
			$("#issueOrg").append(orglist[1][orglist[0].indexOf(issueOrg)]);
			for(var j=0;j<current.length;j++){
				$("#current").append(orglist[1][orglist[0].indexOf(current[j])]);
				if(i!=current.length-1){
					$("#current").append("，");
				}
			}
		});
	});
});