function EvaluateStar(obj) {
    this.ele = obj.ele;
    this.eval = obj.eval;
    this.evalScore = obj.evalScore;
    this.evalResult = obj.evalResult;
    this.mark=0;
    
    this.oUl=this.ele.getElementsByTagName("ul")[0];
    this.oScore = this.ele.getElementsByClassName("score");
    this.oDes=this.ele.getElementsByClassName("des")[0];
    this.oDesP = this.ele.getElementsByTagName("P");
    this.oEval = this.ele.getElementsByClassName("eval")[0];
    this.oStar = [];

    this.init();
    this.bindEvent();
}
EvaluateStar.prototype = {
    init: function () {
        for (var i = 0; i < this.evalScore.length; i++) {
            var star = document.createElement("li");
            star.classList.add("star");
            star.index = i;
            this.ele.getElementsByTagName("ul")[0].appendChild(star);
        };
        this.ele.getElementsByTagName("ul")[0].firstElementChild.classList.add("active");
        this.oStar = Array.prototype.slice.call(this.ele.getElementsByClassName("star"));
    },
    bindEvent: function () {
        var _this = this;
        this.oStar.forEach(function(item){
            item.onclick=star_click;
            item.onmouseenter=star_mouseenter;
        });

        function star_click() {
            var i = this.index;
            _this.mark=this.index;
            _this.oScore[0].innerText=_this.evalScore[i];
            _this.oDesP[0].innerText=_this.evalResult[i];
        };

        function star_mouseenter() {
            var i = this.index;
            _this.oScore[1].innerText=_this.evalScore[i];
            _this.oDesP[1].innerText=_this.evalResult[i];
            _this.oEval.innerText=_this.eval[i];
            _this.clearAllClassName(_this.oStar,"active");
            _this.addSomeClassName(_this.oStar,"active",i);
            _this.oDes.style.display="block"
            _this.oDes.style.left=-70+i*24+"px";
        };

        this.oUl.onmouseleave=function(){
            _this.oDes.style.display="none";
            _this.clearAllClassName(_this.oStar,"active");
            _this.addSomeClassName(_this.oStar,"active",_this.mark);
        }

    },

    clearAllClassName:function(eleList,className){
        for(var i=0;i<eleList.length;i++){
            eleList[i].classList.remove(className);
        };
    },
    addSomeClassName:function(eleList,className,n){
        for(var i=0;i<=n;i++){
            eleList[i].classList.add(className);
        }
    }
    
}