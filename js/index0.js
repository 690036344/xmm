/*
* @Author: aicai
* @Date:   2017-11-07 16:41:05
* @Last Modified by:   aicai
* @Last Modified time: 2017-12-04 23:30:04
*/

$(function(){
   //导航效果
    let logft=$('.logft');
    let logft2=$('.logft2');
    console.log(logft2);

    let box3=$('.box3');
    console.log(box3);
    let dbmov=$('.list-nav2-center>li');
      console.log(dbmov);
      dbmov.mouseenter(function(){
        logft2.css("height",'229px');         
      });
      dbmov.mouseleave(function(){
         logft2.css("height",'0px'); 
  
     })
   for(let i=0;i<7;i++){  
     $(box3[i]).mousemove(function(){
       $(logft[i]).css("display",'block');
     });
     $(box3[i]).mouseout(function(){
       $(logft[i]).css("display",'none');
     });
   }
     for(let i=0;i<7;i++){        
         $(logft[i]).mousemove(function(){
             $(logft[i]).css("display",'block');
         })
         $(logft[i]).mouseout(function(){
             $(logft[i]).css("display",'none');
         })
     }
   //购物车
    let gouwuche=$(".gouwuche");
    console.log(gouwuche);
    let gwc=$(".gwc");
    console.log(gwc);
    gouwuche.mouseover(function(){
      gwc.css("height",'80px');
      // gwc.style.display= 'block';
    })
    gouwuche.mouseout(function(){
      gwc.css("height",'0px');
      // gwc.style.display= 'none';
    }) 

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
     let jiadianbox2s=$(".jiadian-box2");
    console.log(jiadianbox2s);
    let leiwords=$(".lei-word");
    console.log(leiwords);
    xxk(leiwords,jiadianbox2s,'jiadian-box2 xiaoshi','jiadian-box2 chuxian-first');

    let zhinengleiword=$('.zhinenglei-word');
    console.log(zhinengleiword);
    let zhinengbigbox=$('.zhineng-bigbox');
    console.log(zhinengbigbox);

    xxk(zhinengleiword,zhinengbigbox,'zhineng-bigbox xiaoshi','zhineng-bigbox chuxian-first');

    let dapeileiword=$('.dapeilei-word');
    console.log(dapeileiword);
    let dapeibigbox=$('.dapei-bigbox');
    console.log(dapeibigbox);

    xxk(dapeileiword,dapeibigbox,'dapei-bigbox xiaoshi','dapei-bigbox chuxian-first');
    

       // 轮播图效果
       var bannerpic=$("banner-pic");
       // console.log(bannerpic);
       var bannerli=$('.banner-pic li');
        // console.log(bannerli);
       var lastbtn=$("last-btn");
       // console.log(lastbtn)
       var lastbtnli=$(".last-btn li");
       // console.log(lastbtnli);
       var leftbtn=$(".left-btn");
       var rightbtn=$(".right-btn");

       // console.log(leftbtn);
       // console.log(rightbtn);
       rightbtn.click(fn);
       leftbtn.click(fn1);
       let t=setInterval(fn, 2000);
       let num=0;
       bannerpic.mouseover(function(){
           clearInterval(t);
       });
       bannerpic.mouseout(function(){
          t=setInterval(fn, 2000);
       });
      
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
     let nrlist1=$(".nr-list1");
     let nrf2=$(".nr-f2");
      // console.log(nrf2);
     let back=$(".back");
     let forward=$(".forward");

     let btnlis=$(".nr-btn1 li");
     // console.log(nrlist1);
     // console.log(btnlis);
     let width=nrlist1[0].offsetWidth;
     // console.log(width);
     console.log(nrf2,back,forward,width);
     
     back.click(fn3);
     forward.click(fn4);
     let now=next=0;
     
     function fn3(){
          next++;
          if (next>nrf2.length-1) {
            next==nrf2.length-1
            return;           
          }
          // console.log(next);
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

     btnlis.each(function(index,dom){
      // console.log(dom,index);
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
     let danpinbox=$(".danpin-box");
     console.log(danpinbox);
    let count=danpinbox.children().length;
     console.log(count);
   
    let danpinlist=$(".danpin-list");
     console.log(danpinlist);
     let dpwidth=danpinlist.outerWidth(true);
    
     console.log(dpwidth);
    
    danpinbox.css("width",`${count*dpwidth}px`);
    console.log(danpinbox.width());

     let xiaoyu=$(".xiaoyu");
     console.log(xiaoyu);
    let dayu=$(".dayu");
     console.log(dayu);
     

     let numb=0;
     xiaoyu.click(function(){
      
      if(numb==1){
        console.log(numb);
        xiaoyu.className="xiaoyu dis";
        console.log(xiaoyu);
        dayu.className="dayu";
        return;
      }
      numb++;
      console.log(numb);
      danpinbox.css("transform",`translateX(${-1240*numb}px)`);
      dayu.className="dayu";
     })

     dayu.click(function(){ 
      if(numb==0){
        
        dayu.className="dayu dis";
        xiaoyu.className="xiaoyu";
        return;
      }
      numb--;
      console.log(numb);
      danpinbox.css("transform",`translateX(${1240*numb}px)`);
      xiaoyu.className="xiaoyu";
     })
    //侧栏
     let celan01s=$(".celan01");
     console.log(celan01s);
     let items=$(".item");
     console.log(items);
     for(let i=0;i<celan01s.length;i++){
      celan01s[i].onmouseover=function(){
            items[i].style.display="block";
      }
      celan01s[i].onmouseout=function(){
            items[i].style.display="none";
     }
  }

});