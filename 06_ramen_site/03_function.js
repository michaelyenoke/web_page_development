//$(document).ready(function(){ 



$(function(){   //Important!!簡寫形式
  
//延遲載入頁面   //從以下開始編程  
  
  
/* $( ".list" ).menu();*/
  
//搜尋部分
 
$('#search_button').button();  //將button設置成UI
  
$('#reg_a').click(function(){
     $('#reg').dialog();         //將註冊div設置成對話框      
});
  
$('#reg_a').click(function(){
     $('#reg').dialog({            //將註冊div設置成對話框  
          show:'puff',
          title:'來一碗!小雞拉麵!',
          buttons:{
                '按窩!':function(){}
          },
          height:300,
          width:300,
          minWidth:300,
          minHeight:300,
          maxWidth:800,
          maxHeight:600,
          hide:'fold'   
     });            
});
   
  
  
$('#log_a').click(function(){
     $('#log').dialog({         //將註冊div設置成對話框
          title:'再來一碗小雞拉麵!',
          closeText:'關閉',
          buttons:{
             '按窩!':function(){},
             '取消!':function(){
                  $(this).dialog('close')
              }
          },        
     });               
});   
 

//jQ-UI : 主要部份的分頁效果
  
$( "#tabs" ).tabs({
      event: "mouseover"
      });

//jQ-UI : 右側百葉窗分頁效果  

 $( "#accordion" )
     .accordion({
      header: "> div > h3"
      })
   .sortable({
      axis: "y",
      handle: "h3",
      stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
      ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
      $( this ).accordion( "refresh" );
      }
      });


  
   /* $( "#accordion" ).accordion({
      collapsible: true
    });  */
  
  
 //jQ-UI : 日曆效果  

 $( "#datepicker" ).datepicker();

 
  //jQ-UI : 按鍵效果-主要頁面內資源頁面的按鍵   
  
 $(".gg").button();
 
  
   //jQ-UI : 按鍵效果-主要頁面內百葉窗可收縮頁面 

 /*sortable-portlets*/ 

 $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
 
$( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
  
 
$( ".portlet-toggle" ).on( "click", function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
   

//jQ-UI : 影片關閉消失
  
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).hide( selectedEffect, options, 1000/*, callback*/ );
    };
   
    
    // Callback function to bring a hidden box back : 自動返回效果
 /* function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };*/ 
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    }); 
  
  
//jQ-UI : 菜單效果  
 
  $( "#menu" ).menu();
  
 //jQ 下拉式選單部分：出處 https://pjchender.blogspot.tw/2015/03/jquery_25.html
  
   //設定主選單的長度自動隨著選單項目調整
  $('#majmenu').css("width",$(".main").length*100);
  
   //選單互動
   //step01：當對第一個main點擊時，第一個sub滑動
   //step02:建立for回圈
   //接下來不是很瞭解？？
  
            var oldtext=['AA','BB','CC','DD','EE']
            var newtext=['aa','bb','cc','dd','ee']
            
            $(".sub").slideUp(0)
            
             for(i=0;i<$(".main").length;i++){
                $(".main:eq("+i+")").mouseover({id:i},function(e){
                    n=e.data.id;
                    $(".main:eq("+n+")").text(newtext[n])/*.css('text-align', 'center')*/;
                    $(".sub:eq("+n+")").slideToggle();
                    $(".sub:not(:eq("+n+"))").slideUp();
                });
               
                $(".main").mouseout({id:i},function(e){
                    n=e.data.id;
                   // $(".sub").slideUp(200);
                    $(".main:eq("+n+")").text(oldtext[n])/*.css('text-align', 'center')*/;
                });
            }
  
  
  //圖片輪播
  //http://www.wfublog.com/2016/04/owl-carousel-jquery-slider-cdn.html
  
 /* $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})*/
  

//6屏橫向滾動來回切換的JS圖片特效  
  
 
  
  
//請在以上編程
  
});

