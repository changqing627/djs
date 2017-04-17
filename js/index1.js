var p2=0,as2=document.getElementById('pagenavi2').getElementsByTagName('a');
as2[0].className='active';
for(var i=0;i<as2.length;i++){
	(function(){
		var j=i;
		as2[j].onclick=function(){
			tt2.slide(j);
			return false;
		}
	})();
}
var tt2=new TouchSlider({
	id:'slider',
	'auto':0,
	fx:'ease-out',
	direction:'left',
	speed:600,
	timeout:5000,
	'before':function(index){
		if(typeof p2 != 'undeinfed') as2[p2].className='';
		as2[index].className='active';
		p2=index;
	}
});
 