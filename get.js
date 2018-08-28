try{
$(document).ready(function(){
	var id="0000201701230016";
	$("#json").load("members/"+id+".json",function(){
		var data=JSON.parse($("#json").html());
		$("#memberName").append(data.memberName);
		$("#memberSex").append(data.memberSex);
		$("#joinDate").append(data.joinDate);
		$("#id").append(data.ID);
		if(data.validUntil=="9999/12/31"){
			$("#valid").append(data.validFrom+" 长期有效");
		}else{
			$("#valid").append(data.validFrom+"~"+data.validUntil);
		}
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
}catch(e){
	alert(e)
}