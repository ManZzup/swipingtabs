/**
 * Swiping Tabs for jQuery mobile
 * @author manujith pallewatte [ @_manzzup_ ]
 * @url    http://manzzup.blogspot.com
 * Custom List item <li> based slider.
 * @param {String} ele
 * @param {int} speed
 * @param {int} items
 * @returns {Slider}
 */
function SwipingTabs(ele,speed,navBar){
                this.ele = ele;
                this.pointer = 1;
                this.slider = $(ele + " #slide");
                this.sliderSelect = ele + " #slide";
                
                this.containerWidth = $(ele).outerWidth(true);
                this.sliderWidth = 0;
                this.isAnimating = false;
                this.speed = speed;
                this.itemsPerDiv = 1;
                this.nav = $(navBar);
                
                //for anonymous function reference
                me = this;
                
                //initialize the divs before everything
                var finalHTML = "";
                var c = 1;
                var div = "";
                var nchild = $(this.slider).children().length;
                $(this.sliderSelect + " > li").each(function(i,k){
                    div = div + k.outerHTML;
                    ///alert(c);
                    if(c%me.itemsPerDiv===0 || i==nchild-1){
                        div = "<div>" + div + "</div>";
                        finalHTML += div;
                        //alert(div);
                        div = "";
                    }
                    c++;
                });
                $(this.slider).html(finalHTML);
                
                this.maxPointer = $(this.slider).children().length;
           
                //initialize the width
                this.slideLeft = 0;
                for(var i=1;i<=this.maxPointer;i++){ 
                    this.sliderWidth += $(this.sliderSelect + " div:nth-child("+ i +")").outerWidth(true);
                    $(this.sliderSelect + " div:nth-child("+ i +")").css('left',this.slideLeft+'px');
                    this.slideLeft += this.containerWidth;
                    
                    //initialize navbar
                    var li = document.createElement("li");
                    $(li).attr("id",i);
                    if(i==1){
                        $(li).toggleClass('current');
                    }
                    $(li).click(function(){
                        var id = $(this).attr("id");
                        if(id > me.pointer){
                            if(me.isAnimating == false){                          
                                me.isAnimating = true;                          
                                $(me.slider).animate({
                                    left : '-=' + me.containerWidth*(id-me.pointer) + 'px'
                                },me.speed,function(){
                                    me.isAnimating = false;                                    
                                    me.pointer = id;
                                });
                            }
                        }else if(id < me.pointer){
                            if(me.isAnimating == false){                          
                                me.isAnimating = true;                          
                                $(me.slider).animate({
                                    left : '+=' + me.containerWidth*(me.pointer-id) + 'px'
                                },me.speed,function(){
                                    me.isAnimating = false;                                    
                                    me.pointer = id;
                                });
                            }
                        }
                        $(this).siblings().removeClass('current');
                        $(this).toggleClass('current');
                    });
                    
                    $(this.nav).append(li);
                }
                $(this.slider).css("width",this.slideWidth + 'px');                
               
                
                $(this.ele).on("swipeleft",function(){
                	if(me.pointer < me.maxPointer){                      
                      if(me.isAnimating == false){                          
                          me.isAnimating = true;                          
                          $(me.slider).animate({
                              left : '-=' + me.containerWidth + 'px'
                          },me.speed,function(){
                              me.isAnimating = false;
                              me.pointer++;
                              $("#"+me.pointer,me.nav).toggleClass('current').siblings().removeClass('current');
                          });
                      }
                  }  
                });
                 $(this.ele).on("swiperight",function(){
                	if(me.pointer > 1){
                      if(me.isAnimating == false){                          
                          me.isAnimating = true;                          
                          $(me.slider).animate({
                              left : '+=' + me.containerWidth + 'px'
                          },me.speed,function(){
                              me.isAnimating = false;
                              me.pointer--;
                              $("#"+me.pointer,me.nav).toggleClass('current').siblings().removeClass('current');
                          });
                      }  
                    }  
                });                
}
