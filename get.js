//JavaScript Document
$(document).ready(function(){
	var id=location.pathname;
	$("#json").load("members/"+id+".json",function(status){
		var data=JSON.parse($("#json").html());
		$("#memberName").append(data.memberName);
		data.memberSex="male"?$("#memberSex").append("男"):$("#memberSex").append("女");
		$("#joinDate").append(data.joinDate);
		$("#id").append(data.ID);
		if(data.validUntil=="9999/12/31"){
			$("#valid").append(data.validFrom+" 长期有效");
		}else{
			$("#valid").append(data.validFrom+"~"+data.validUntil);
		}
		$("#org").load("org.txt",function(){
			var org=$("#org").html();
			var issueOrg=data.issueOrg;
			var current=data.current;
			var orglist=new Array(new Array(),new Array());
			var origin=org.split(";");
			for(var i=0;i<origin.length;i++){
				var x=origin[i];
				orglist[0].push(x.split(":")[0]);
				orglist[1].push(x.split(":")[1]);
			}
			$("#issueOrg").append(orglist[1][orglist[0].indexOf(issueOrg)]);
			for(var j=0;j<current.length;j++){
				$("#current").append(orglist[1][orglist[0].indexOf(current[j])]);
				if(j!=current.length-j){
					$("#current").append("/");
				}
			}
			$("#org").remove();
		});
	});
	$("#toggle").click(function(){
		$('#json-container').toggle(200);
	});
});