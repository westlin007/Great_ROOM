;(function(){
    function jQuery(selector){
        return new Init(selector)
    }

    // 构造函数
    function Init(selector){
        let dom = document.querySelectorAll(selector);
        for(let i=0 ; i<dom.length ; i++){
            this[i]=dom[i]
        }
        this.length = dom.length;
    }

    // 封装遍历数组的方法
    Init.prototype.each = function(callback){
        for(let i=0; i<this.length; i++){
            callback(i,this[i]);
        }
    }

    // css功能
    
    
    Init.prototype.css = function (property, value) {
        // 获取属性
        if (value == undefined) {
          return window.getComputedStyle(this[0])[property];
        } else {
          let pxArr = ['width', 'height', 'top', 'left'];
          
          for (let i = 0; i < this.length; i++) {
            
            if (pxArr.indexOf(property) !== -1) {
              if (value.toString().indexOf('px') === -1) {
                this[i].style[property] = value + 'px';
              } else {
                this[i].style[property] = value;
              }
            } else {
              this[i].style[property] = value;
            }
          }
          // 最后返回this，用于实现链式编程
          return this;
          
        }
    
      }

    // 实现addClass,removeClass功能
    Init.prototype.addClass = function(className){
        this.each(function(i,e){
            e.classList.add(className);
        })
        return this;
    }

    Init.prototype.removeClass = function(className){
        this.each(function(i,e){
            e.classList.remove(className);
        })
        return this;
    }
    // 切换类名
    Init.prototype.toggleClass = function (className) {
        this.each(function (i, e) {
          e.classList.toggle(className);
        })
      }
    window.$ = window.jQuery = jQuery;
})();