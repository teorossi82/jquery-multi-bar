/*!
 * jquery-multibar v0.2.0 by @teorossi
 * Copyright (c) 2015-2018 Matteo Rossi
 *
 * https://github.com/teorossi82/jquery-multi-bar
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function ($) {
    
    var createBar = function(options){
        var mulBar = '<div class="multi-bar-box'
        if(options.reverse)
            mulBar += ' reverse ';
        if(options.size)
            mulBar += ' multi-bar-' + options.size + ' ';
        mulBar+=' ">';
        for(var b=0;b<options.multiBarValue.length;b++){
            var value = options.multiBarValue[b].val;
            var bgColor = options.multiBarValue[b].bgColor;
            if(!bgColor)
                bgColor = colors.defaults[b];
            if(b==0)
                mulBar+='<div class="multi-bar-bar" style="background-color:' + bgColor + ';width:' + ((options.multiBarValue[b].val-options.min)/(options.max-options.min))*100 + '%"></div>';
            else
                mulBar+='<div class="multi-bar-bar" style="background-color:' + bgColor + ';width:' + ((options.multiBarValue[b].val-options.multiBarValue[b-1].val)/(options.max-options.min))*100 + '%"></div>';
        }
        mulBar+='</div>'
        var valBar = '<div class="multi-bar-value-content"><div class="multi-bar-initVal">' + options.min + '</div>';
        if(options.reverse)
            valBar = '<div class="multi-bar-value-content reverse"><div class="multi-bar-initVal">' + options.min + '</div>';
        for(var c=0;c<options.multiBarValue.length;c++){
            if(options.multiBarValue[c].val==options.max)
                valBar+='<div class="multi-bar-value-box" style="width:' + ((options.multiBarValue[c].val-options.multiBarValue[c-1].val)/(options.max-options.min))*100 + '%"></div>';
            else if(c==0)
                valBar+='<div class="multi-bar-value-box" style="width:' + ((options.multiBarValue[c].val-options.min)/(options.max-options.min))*100 + '%"><div class="multi-bar-value">' + options.multiBarValue[c].val + '</div></div>';
            else
                valBar+='<div class="multi-bar-value-box" style="width:' + ((options.multiBarValue[c].val-options.multiBarValue[c-1].val)/(options.max-options.min))*100 + '%"><div class="multi-bar-value">' + options.multiBarValue[c].val + '</div></div>';
        }
        valBar+='<div class="multi-bar-lastVal">' + options.max + '</div></div>';

        return {mulBar:mulBar,valBar:valBar}
    }

    var createBar_hot = function(options){
        var mulBar = '<div class="multi-bar-box'
        if(options.reverse)
            mulBar += ' reverse ';
        if(options.size)
            mulBar += ' multi-bar-' + options.size + ' ';
        mulBar+=' ">';
        var indice = options.min;
        for(var b=0;b<colors.hot.length;b++){
            mulBar+='<div class="multi-bar-bar" style="background-color:' + colors.hot[b] + ';width:10%"></div>';
        }
        mulBar+='</div>'

        var valBar = '<div class="multi-bar-value-content"><div class="multi-bar-initVal">' + options.min + '</div>';
        if(options.reverse)
            valBar = '<div class="multi-bar-value-content reverse"><div class="multi-bar-initVal">' + options.min + '</div>';
        var indice = options.min;
        for(var c=0;c<colors.hot.length;c++){
            indice+=((options.max-options.min)/10)
            if(c==colors.hot.length-1)
                valBar+='<div class="multi-bar-value-box" style="width:10%"></div>';
            else 
                valBar+='<div class="multi-bar-value-box" style="width:10%"><div class="multi-bar-value">' + parseInt(indice) + '</div></div>';
        }
        valBar+='<div class="multi-bar-lastVal">' + options.max + '</div></div>';

        return {mulBar:mulBar,valBar:valBar}
    }

    var createBar_cold = function(options){
        var mulBar = '<div class="multi-bar-box'
        if(options.reverse)
            mulBar += ' reverse ';
        if(options.size)
            mulBar += ' multi-bar-' + options.size + ' ';
        mulBar+=' ">';
        var indice = options.min;
        for(var b=0;b<colors.cold.length;b++){
            mulBar+='<div class="multi-bar-bar" style="background-color:' + colors.cold[b] + ';width:10%"></div>';
        }
        mulBar+='</div>'

        var valBar = '<div class="multi-bar-value-content"><div class="multi-bar-initVal">' + options.min + '</div>';
        if(options.reverse)
            valBar = '<div class="multi-bar-value-content reverse"><div class="multi-bar-initVal">' + options.min + '</div>';
        var indice = options.min;
        for(var c=0;c<colors.cold.length;c++){
            indice+=((options.max-options.min)/10)
            if(c==colors.cold.length-1)
                valBar+='<div class="multi-bar-value-box" style="width:10%"></div>';
            else 
                valBar+='<div class="multi-bar-value-box" style="width:10%"><div class="multi-bar-value">' + parseInt(indice) + '</div></div>';
        }
        valBar+='<div class="multi-bar-lastVal">' + options.max + '</div></div>';

        return {mulBar:mulBar,valBar:valBar}
    }

    var createMarker = function(arValue,options){
        var marker = '<div class="multi-bar-marker-content';
        if(options.posMarker && options.posMarker==="inside")
            marker += ' inside ';
        var direction = "left";
        if(options.reverse){
            marker += ' reverse ';
            direction = "right"
        }
        marker+='">'
        var icon = 'arrow-down';
        if(options.iconMarker)
            icon = options.iconMarker;
        for(var i=0;i<arValue.length;i++){
            var value;
            var color;
            var objValue = arValue[i] && typeof arValue[i]=='object';
            if(objValue){
                value=arValue[i].value;
                color=arValue[i].color;
            }
            else{
                value=arValue[i];
                color="black";
            }
            var markerPosition = ((value-options.min)/(options.max-options.min))*100;
            if(value>options.max)
                markerPosition=100;
            else if(value<options.min)
                markerPosition=0;
            marker+= '<div class="multi-bar-marker" style="' + direction + ':' + markerPosition + '%;color:' + color + '">' + 
                '<div class="multi-bar-marker-value">' + value + '</div>' + 
                '<span class="icon-' + icon + '"></span>' +
                '</div>'; 
        }
        marker+='</div>';
        return marker;
    }

    var createLegend = function(arValue,options,ele){
        var boxLeg = '<div class="multi-bar-legend-box">';
        for(var i=0;i<arValue.length;i++){
            var value = arValue[i] && typeof arValue[i]=='object' ? arValue[i].value:arValue[i];
            var label = arValue[i] && typeof arValue[i]=='object' ? arValue[i].label:"Item";
            var color = arValue[i] && typeof arValue[i]=='object' ? arValue[i].color:"black";

            boxLeg+= '<div class="multi-bar-legend-item">' + 
                '<span class="icon-circle" style="color:' + color + '"></span> ' +
                '<span class="multi-bar-legend-item-label">' + label + ": " + value + '</span>' +
                '</div>';
        }
        boxLeg+='</div>';
        var conLegend = options.legend.content;
        if(!conLegend){
            $(ele.find(".multi-bar-legend-box")[0]).remove();
            $(ele.find(".multi-bar")[0]).append(
                boxLeg
            );
            $(ele.find(".multi-bar-content")[0]).removeClass("no-legend");
            $(ele.find(".multi-bar-content")[0]).addClass("yes-legend");
            $(ele.find(".multi-bar-legend-box")[0]).css("width","28%");
        }
        else{
            $($(conLegend).find(".multi-bar-legend-box")[0]).remove();
            $(conLegend).append(
                boxLeg
            );
            $($(conLegend).find(".multi-bar-legend-box")[0]).css("margin","0%");
        }

    }
    
    var colors={
        defaults: ["green","yellow","orange","red","purple","blue","black","white"],
        hot:["#F9F9BD","#F7F411","#ECD024","#FFA500","#E08E00","#FF350A","#E90000","#BE0028","#C10069","#8A0079"],
        cold:["#A4FCB7","#A4FCD6","#A4FCF5","#A4F2FC","#A4E1FC","#A4CDFC","#A4ACFC","#5479CE","#4759FF","#0019FF"]
    }
    
    var MultiBar = function (element, options) {
        
        this.element = $(element);
        
        var box = '<div class="multi-bar"><div class="multi-bar-content no-legend"><div class="multi-bar-marker-content"></div>';
        
        var bar;
        if(options.type && options.type=="hot")
            bar = createBar_hot(options);
        else if(options.type && options.type=="cold")
            bar = createBar_cold(options);
        else
            bar = createBar(options);
        
        box+= bar.mulBar + bar.valBar;
        box+= '</div></div>';
        
        this.element.html(
            box + '<div style="clear:both"></div>'
        );
        
        this.options = options;
        
        if(options.initValue && typeof options.initValue == 'object'){
            this.setValue(options.initValue);
        }
        
        //Code for activate initial animation of the multi-bar
        /*var ele = this.element;
        setTimeout(function(){
            $(ele.find(".multi-bar-content.no-legend")[0]).css("width","100%");
        },50);*/
    };

    MultiBar.prototype = {
        constructor: MultiBar,
        setValue: function(arValue){
            var marker = createMarker(arValue,this.options);
            $($(this.element).find(".multi-bar-marker-content")[0]).replaceWith(marker);
            var legend = this.options.legend && this.options.legend.show==true;
            if(legend){
                var boxLegend = createLegend(arValue,this.options,this.element);
            }
        },
        destroy: function(){
            $($(this.element).find(".multi-bar")[0]).remove();
            var legend = this.options.legend && this.options.legend.show==true;
            if(legend){
                var contLegend = this.options.legend.content;
                if(contLegend)
                    $($(contLegend).find(".multi-bar-legend-box")[0]).remove(); 
            }
        }
    };

    $.fn.multibar = function (options) {
        var args = Array.apply(null, arguments);
        args.shift();
        return this.each(function () {
            var $this = $(this),
                data = $this.data('multibar'),
                opts;
            if (!data) {
                if(!options){
                    $this.data('multibar',new MultiBar(this, $.fn.multibar.defaults));
                    return
                }
                if(!options.min && options.min!=0)
                    options.min = $.fn.multibar.defaults.min;
                if(!options.max && options.max!=0)
                    options.max = $.fn.multibar.defaults.max;
                if(!options.multiBarValue){
                    options.multiBarValue = [];
                    var step = (options.max-options.min)/5
                    var indice = options.min+step;
                    for(var i=0;i<5;i++){
                        options.multiBarValue.push(
                            {
                                val:parseInt(indice),
                                bgColor:colors.defaults[i]
                            }
                        );
                        indice+=(options.max-options.min)/5;
                    }
                }
                opts = $.extend( {}, $.fn.multibar.defaults, options );
                $this.data('multibar',new MultiBar(this, options));
            } 
            else if (typeof options == 'string' && typeof data[options] == 'function') {
                data[options].apply(data, args);
            }
        });
    };

    $.fn.multibar.defaults = {
        min:0,
        max:10,
        type:"normal",
        reverse:false,
        posMarker:"outside",
        iconMarker:"arrow-down",
        multiBarValue:[
            {
                val:2,
                bgColor:"green"
            },
            {
                val:4,
                bgColor:"yellow"
            },
            {
                val:6,
                bgColor:"orange"
            },
            {
                val:8,
                bgColor:"red"
            },
            {
                val:10,
                bgColor:"purple"
            }
        ]
    };

}(jQuery));