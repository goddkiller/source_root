

!function () {
 document.write("!!!");
  var loadCss = function (path) {
    document.write('<link rel="stylesheet" type="text/css" href="' + seajs.root + path + '" />');
  }
  var load = {
    "bootstrap" : function () {
      loadCss("js/sea-modules/front/libs/1.0.0/bootstrap/css/bootstrap.min.css");
      loadCss("js/sea-modules/front/libs/1.0.0/bootstrap/css/bootstrap-responsive.min.css");
    },
    "zTree" : function () {
      loadCss("js/sea-modules/front/libs/1.0.0/zTree/zTree.css");
    },
    "chosen" : function () {
      loadCss("js/sea-modules/front/libs/1.0.0/chosen/chosen.css");
    }
  }
  var use = seajs.use; 

  seajs.use = function () {
    alert(arguments)
     use.apply(seajs, arguments);
  };
  if (seajs.usedIds instanceof Array) {
    for (var i = 0;i < seajs.usedIds.length;i++) {
      var run = load[seajs.usedIds[i]]
      run && run(); 
    }
  } else {
    load[seajs.usedIds] && load[seajs.usedIds]();
  }
}();
// alert(seajs.resolve("../css/bootstrap.min.css"));