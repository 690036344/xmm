/*
* @Author: aicai
* @Date:   2017-11-07 16:41:05
* @Last Modified by:   aicai
* @Last Modified time: 2017-12-04 17:42:54
*/
window.onload=function(){
	let celan01s=document.getElementsByClassName("celan01");
	console.log(celan01s);
	let items=document.getElementsByClassName("item");
	console.log(items);
	for(let i=0;i<celan01s.length;i++){
		celan01s[i].onmouseover=function(){
            items[i].style.display="block";
		}
		celan01s[i].onmouseout=function(){
            items[i].style.display="none";
		}
	}


  let logft=document.getElementsByClassName('logft');
    let logft2=document.querySelector('.logft2');
    console.log(logft2);

  let box3=document.getElementsByClassName('box3');
  let dbmov=document.querySelector('.list-nav2-center li');
    console.log(dbmov);
    dbmov.onmouseenter=function(){
        logft2.style.height='229px';
        
    }
    dbmov.onmouseleave=function(){
        logft2.style.height='0px';

    }
  for(let i=0;i<7;i++){
    
    box3[i].onmousemove=function(){
      logft[i].style.display='block';
    }
    box3[i].onmouseout=function(){
      logft[i].style.display='none';
    }
  }
    for(let i=0;i<7;i++){
        
        logft[i].onmousemove=function(){
            logft[i].style.display='block';
        }
        logft[i].onmouseout=function(){
            logft[i].style.display='none';
        }
    }
    
    
//购物车
    let gouwuche=document.getElementsByClassName("gouwuche")[0];
    console.log(gouwuche);
    let gwc=document.getElementsByClassName("gwc")[0];
    console.log(gwc);
   	gouwuche.onmouseover=function(){
    	gwc.style.height='80px';
    	// gwc.style.display= 'block';
    }
    gouwuche.onmouseout=function(){
    	gwc.style.height='0px';
    	// gwc.style.display= 'none';
    }
     
    //家电选项卡
    let jiadianbox2s=document.getElementsByClassName("jiadian-box2");
    console.log(jiadianbox2s);
    let leiwords=document.getElementsByClassName("lei-word");
    console.log(leiwords);
         // for(let i=0;i<leiwords.length;i++){
         //    leiwords[i].onmouseover=function(){
         //        for(let j=0;j<leiwords.length;j++){
         //            jiadianbox2s[j].className="jiadian-box2";
         //            leiwords[j].style.color="#424242";
         //            leiwords[j].style.border="none";
         //        }
         //        jiadianbox2s[i].className="jiadian-box2 jiadian-box2-first";
    		   //      leiwords[i].style.color="#ff6700";
         //        leiwords[i].style.borderBottom= '1px solid #ff6700';
    	    //   }
    	        
         //  }



    //封装选项卡
    function xxk(lb,menu,x,y){
        for(let i=0;i<lb.length;i++){
            lb[i].onmouseover=function(){
                for(let j=0;j<lb.length;j++){
                    menu[j].className=x;
                    lb[j].style.color="#424242";
                    lb[j].style.border="none";
                }
                menu[i].className=y;
                lb[i].style.color="#ff6700";
                lb[i].style.borderBottom= '1px solid #ff6700';
            }
              
          }
    
    }
    // 调用封装函数
    xxk(leiwords,jiadianbox2s,'jiadian-box2 xiaoshi','jiadian-box2 chuxian-first');

    let zhinengleiword=document.getElementsByClassName('zhinenglei-word');
    console.log(zhinengleiword);
    let zhinengbigbox=document.getElementsByClassName('zhineng-bigbox');
    console.log(zhinengbigbox);

    xxk(zhinengleiword,zhinengbigbox,'zhineng-bigbox xiaoshi','zhineng-bigbox chuxian-first');

    let dapeileiword=document.getElementsByClassName('dapeilei-word');
    console.log(dapeileiword);
    let dapeibigbox=document.getElementsByClassName('dapei-bigbox');
    console.log(dapeibigbox);

    xxk(dapeileiword,dapeibigbox,'dapei-bigbox xiaoshi','dapei-bigbox chuxian-first');



           // 轮播图效果
       var bannerpic=document.getElementsByClassName("banner-pic")[0];
       console.log(bannerpic);
       var bannerli=bannerpic.getElementsByTagName('li');
        console.log(bannerli);
       var lastbtn=document.getElementsByClassName("last-btn")[0];
       console.log(lastbtn)
       var lastbtnli=lastbtn.getElementsByTagName("li");
       console.log(lastbtnli);
       var leftbtn=document.getElementsByClassName("left-btn")[0];
       var rightbtn=document.getElementsByClassName("right-btn")[0];

       console.log(leftbtn);
       console.log(rightbtn);
       rightbtn.onclick=fn;
       leftbtn.onclick=fn1;
       let t=setInterval(fn, 2000);
       let num=0;
       bannerpic.onmouseover=function(){
           clearInterval(t);
       }
       bannerpic.onmouseout=function(){
          t=setInterval(fn, 2000);
       }
      
      for(let i=0;i<lastbtnli.length;i++){
        lastbtnli[i].onclick=function(){
            lastbtnli[num].style.background=""; 
            lastbtnli[i].style.background="pink"; 
            bannerli[num].style.display="none";
            bannerli[i].style.display="block";
            num=i;
          }

       }
       function fn(){
          num ++;
          if(num==bannerli.length){
            num=0;
          }
          for(let i=0;i<bannerli.length;i++){
             bannerli[i].style.display="none";
             lastbtnli[i].style.background="";
          }
          bannerli[num].style.display="block";
          lastbtnli[num].style.background="pink";
        }
        function fn1(){
          num --;
          if(num==-1){
            num=bannerli.length-1;
          }
          for(let i=0;i<bannerli.length;i++){
             bannerli[i].style.display="none";
             lastbtnli[i].style.background="";
          }
          bannerli[num].style.display="block";
          lastbtnli[num].style.background="pink";
        }
          	
       //底部轮播效果
     let nrlist1=document.getElementsByClassName("nr-list1")[0];
     let nrf2=document.getElementsByClassName("nr-f2");
    
     let back=document.getElementsByClassName("back")[0];
     let forward=document.getElementsByClassName("forward")[0];

     let btnlis=document.querySelectorAll(".nr-btn1 li");
     console.log(btnlis);
     let width=nrlist1.offsetWidth;
     console.log(nrf2,back,forward,width);
     
     back.onclick=fn3;
     forward.onclick=fn4;
     let now=next=0;
     
     function fn3(){
          next++;
          if (next>nrf2.length-1) {
            next==nrf2.length-1
            return;           
          }
          console.log(next);
          nrf2[next].style.left=`${width}px`;
          animate(nrf2[now], {left:-width},2000);
          btnlis[now].style.cssText="background: #b0b0b0;border: 2px solid white;";
          animate(nrf2[next], {left:0},2000);
          btnlis[next].style.cssText="background: white;border: 2px solid #ff7010;"
          now=next; 
     }
    
      function fn4(){
          next--;   
          if (next<0) {
            next=0;
             return; 
          }
          nrf2[next].style.left=`${-width}px`;
          animate(nrf2[now], {left:width},2000);
          btnlis[now].style.cssText="background: #b0b0b0;border: 2px solid white;";
          animate(nrf2[next], {left:0},2000);
          btnlis[next].style.cssText="background: white;border: 2px solid #ff7010;"
          now=next; 
     }

     btnlis.forEach(function(dom,index){
      console.log(dom,index);
      dom.onclick=function(){
          if(index>num){
              nrf2[index].style.left=`${width}px`;
              animate(nrf2[now], {left:-width},2000);
              btnlis[now].style.cssText="background: #b0b0b0;border: 2px solid white;";
              animate(nrf2[index], {left:0},2000);
              btnlis[index].style.cssText="background: white;border: 2px solid #ff7010;"
              next=now=index; 
              
          }
          else if(index<num){
              nrf2[index].style.left=`${-width}px`;
              animate(nrf2[now], {left:width},2000);
              btnlis[now].style.cssText="background: #b0b0b0;border: 2px solid white;";
              animate(nrf2[index], {left:0},2000);
              btnlis[index].style.cssText="background: white;border: 2px solid #ff7010;"
              next=now=index; 

              
          }
      }    
     });
   



     //明星单品轮播效果
     let danpinbox=document.getElementsByClassName("danpin-box")[0];
     console.log(danpinbox);
    let count=danpinbox.childElementCount;
     console.log(count);
   
    let danpinlist=document.getElementsByClassName("danpin-list");
     console.log(danpinlist);
    let dpwidth=danpinlist[0].offsetWidth;
     console.log(dpwidth);
    let marginright=parseInt(getComputedStyle(danpinlist[0],null).marginRight);
    console.log(marginright);
    danpinbox.style.width=`${count*(dpwidth+marginright)}px`;
    console.log(danpinbox.style.width);

     let xiaoyu=document.getElementsByClassName("xiaoyu")[0];
     console.log(xiaoyu);
    let dayu=document.getElementsByClassName("dayu")[0];
     console.log(dayu);
     

     let numb=0;
     xiaoyu.onclick=function(){
      
      if(numb==1){
        console.log(numb);
        xiaoyu.className="xiaoyu dis";
        console.log(xiaoyu);
        dayu.className="dayu";
        return;
      }
      numb++;
      console.log(numb);
      danpinbox.style.transform=`translateX(${-1240*numb}px)`;
      dayu.className="dayu";
     }

     dayu.onclick=function(){ 
      if(numb==0){
        
        dayu.className="dayu dis";
        xiaoyu.className="xiaoyu";
        return;
      }
      numb--;
      console.log(numb);
      danpinbox.style.transform=`translateX(${1240*numb}px)`;
      xiaoyu.className="xiaoyu";
     }

}
