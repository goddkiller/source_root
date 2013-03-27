var _mvq = _mvq || [];
_mvq.push(['$setAccount', 'm-9-1']);
_mvq.push(['$logConversion']);
(function() {
    var mvl = document.createElement('script');
    mvl.type = 'text/javascript'; mvl.async = true;
    mvl.src = 'http://misc.360buyimg.com/lib/js/2012/mvl.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(mvl, s);
})();
var unionUnId  = $.cookie("unionUnId");
if(unionUnId != null && (unionUnId == "42054" || unionUnId == 42054)){
    try{
         var _mvq = _mvq || [];
         var successCountStr=$("#successCountId").val();
         var successCount=eval("successCount="+successCountStr);
         if(successCount != null  && successCount.success == true){    
         _mvq.push(['$setGeneral', 'ordercreate', '',  '',  '']);
             _mvq.push(['$addOrder',"'"+successCount.orderId+"'","'"+successCount.factPrice+"'"]);
              var successInfos=successCount.successInfos;
              for(var i=0;i<successInfos.length;i++){
              var successInfo = successInfos[i]
                  _mvq.push(['$addItem',successInfo.orderId,successInfo.skuId,successInfo.price ,successInfo.num]);
              }
             _mvq.push(['$logData']);        
         }
    }catch(e){} 
} else {
    try{
         var _mvq = _mvq || [];
         var successCountStr=$("#successCountId").val();
         var successCount=eval("successCount="+successCountStr);
         if(successCount != null  && successCount.success == true){    
             _mvq.push(['$setGeneral', 'ordercreate', '',  '',  '']);
              var successInfos=successCount.successInfos;
              for(var i=0;i<successInfos.length;i++){
              var successInfo = successInfos[i]
                  _mvq.push(['$addItem','',successInfo.skuId]);
              }
             _mvq.push(['$logData']);        
         }
    }catch(e){} 

}