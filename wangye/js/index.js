/*下拉菜单*/
function show(){
	var List=getClass(document,"list")
	var Nav=getClass(document,"nav")
	var Icon=getClass(document,"i2")
	
	for(var i=0;i<List.length;i++){
		List[i].index=i
		List[i].onclick=function(ev){
			var ev=ev || window.event
			for(var i=0;i<List.length;i++){
				Nav[i].style.display="none"
   		        Icon[i].style.backgroundPositionX=-60+"px"
   		        ev.cancelBubble=true
			}
			Nav[this.index].style.display="block"
			Icon[this.index].style.backgroundPositionX=-46+"px"
		}
		
		document.body.onclick=function(ev){
			var ev=ev || window.event
			for(var i=0;i<List.length;i++){
				Nav[i].style.display="none"
   		        Icon[i].style.backgroundPositionX=-60+"px"
			}
		}
	}
}
show()

/*轮播图*/
function play(){
	var Ban=document.getElementById("banner")
	var List1=document.getElementById("list1")
	var aLi=List1.children
    var List3=document.getElementById("list3")
	var aLi3=List3.children
	var timer=null
	var num=0
    
	
	List1.innerHTML+=List1.innerHTML
	List1.style.width=aLi[0].offsetWidth*aLi.length+"px"
	
	timer=setInterval(function(){
		num++
		if(num==aLi.length/2+1){
			List1.style.left=0+"px"
			num=1
		}
		for(var i=0;i<aLi3.length;i++){
			aLi3[i].style.backgroundPositionX=-158+"px"
		}
		if(num==aLi.length/2){
			aLi3[0].style.backgroundPositionX=-132+"px"
		}else{
			aLi3[num].style.backgroundPositionX=-132+"px"
		}
		animate(List1,{"left":-num*aLi[0].offsetWidth})
	},1000)
	
	Ban.onmouseover=List3.onmouseover=function(){
		clearInterval(timer)
	}
	Ban.onmouseout=List3.onmouseout=function(){
		timer=setInterval(function(){
		num++
		if(num==aLi.length/2+1){
			List1.style.left=0+"px"
			num=1
		}
		for(var i=0;i<aLi3.length;i++){
			aLi3[i].style.backgroundPositionX=-158+"px"
		}
		if(num==aLi.length/2){
			aLi3[0].style.backgroundPositionX=-132+"px"
		}else{
			aLi3[num].style.backgroundPositionX=-132+"px"
		}
		animate(List1,{"left":-num*aLi[0].offsetWidth})
	},1000)
	}
	
	for(var i=0;i<aLi3.length;i++){
		    aLi3[0].style.backgroundPositionX=-132+"px"
			aLi3[i].index=i
            aLi3[i].onclick=function(){
			    for(var i=0;i<aLi3.length;i++){
				    aLi3[i].style.backgroundPositionX=-158+"px"
			    }
			    aLi3[this.index].style.backgroundPositionX=-132+"px"
			    num=this.index
			    animate(List1,{"left":-this.index*aLi[0].offsetWidth})
		    }
	}
}
play()

/*左侧菜单*/
function show1(){
	var List2=document.getElementById("list2")
	var aLI=getClass(document,"txtt")
	var Nav1=getClass(document,"nav1")
	var Hide=getClass(document,"hide")
	
	
	for(var i=0;i<aLI.length;i++){
		aLI[i].index=i
		aLI[i].onmouseover=function(){
			aLI[this.index].style.background="#FFFFFF"
			aLI[this.index].style.color="#666"
			Hide[this.index].style.backgroundPositionX=-75+"px"
			Nav1[this.index].style.display="block"
		}
		aLI[i].onmouseout=function(){
			Nav1[this.index].style.display="none"
			aLI[this.index].style.background="#6CC9FF"
			aLI[this.index].style.color="#FFFFFF"
			Hide[this.index].style.backgroundPositionX=-85+"px"
		}
	}
}

show1()

/*选项卡*/
function change(){
	var Nav2=document.getElementById("nav2")
	var oUl=Nav2.getElementsByTagName("ul")[0]
	var oLi=oUl.children
	var Txt=document.getElementById("nav2_txt")
	var oLi1=Txt.children
	
	for(var i=0;i<oLi.length;i++){
		oLi[0].style.color="red"
	    oLi1[0].style.display="block"
	    oLi[0].style.borderBottom="2px solid red"
		oLi[i].index=i
		oLi[i].onclick=function(){
			for(var i=0;i<oLi.length;i++){
				oLi[i].style.color="#242424"
				oLi[i].style.borderBottom="none"
				oLi1[i].style.display="none"
			}
			oLi[this.index].style.color="red"
			oLi[this.index].style.borderBottom="2px solid red"
			oLi1[this.index].style.display="block"
		}
	}
	
}
change()

/*返回顶部*/
function back(){
	var oBtn=document.getElementById("back")
	var timer=null
	var oTop=0
	var off=true
	
	window.onscroll=function(){
		oTop = document.documentElement.scrollTop || document.body.scrollTop
		if(oTop>200){
			oBtn.style.display="block"
		}else if(oTop<200){
			oBtn.style.display="none"
		}
		if(!off){
			clearInterval(timer)
		}
		off=false;
	}
	oBtn.onclick=function(){
	
		timer=setInterval(function(){
			var T=Math.floor(oTop/7)
			
			if(oTop==0){
				clearInterval(timer)
			}else{
				if(document.documentElement.scrollTop){
					document.documentElement.scrollTop-=T
				}else{
					document.body.scrollTop-=T
				}
				off=true;
			}
		},30)
	}
}
back()

/*无缝滚动*/
function play1(){
	var Pic=document.getElementById("pic")
	var PList=document.getElementById("pic_list")
	var aPLi=PList.children
	var BtnL=document.getElementById("left")
	var BtnR=document.getElementById("right")
	var timer=null
	var num=6
	
	PList.innerHTML+=PList.innerHTML
	PList.style.width=aPLi[0].offsetWidth*aPLi.length+"px"
	
	timer=setInterval(function(){
		if(PList.offsetLeft<=-(PList.offsetWidth)/2){
			PList.style.left=0
		}else if(PList.offsetLeft>0){
			PList.style.left=-(PList.offsetWidth)/2+"px"
		}
		PList.style.left=PList.offsetLeft+num+"px"
	},100)
	BtnL.onclick=function(){
		num=-6
	}
	BtnR.onclick=function(){
		num=6
	}
}
play1()


function getClass(parent,name){
	var oParent = parent || document;
	var aEles = oParent.getElementsByTagName("*");
	var result=[];
	for(var i=0; i<aEles.length;i++){
		var arr= aEles[i].className.split(' ');
		for(var j=0; j<arr.length;j++){
			if(arr[j]==name){
				result.push(aEles[i])
			}						
		}
	};
	return result;
};