!function ($) {
    
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
                bgColor = MultiBar.prototype.colors.defaults[b];
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
        for(var b=0;b<MultiBar.prototype.colors.hot.length;b++){
            mulBar+='<div class="multi-bar-bar" style="background-color:' + MultiBar.prototype.colors.hot[b] + ';width:10%"></div>';
        }
        mulBar+='</div>'

        var valBar = '<div class="multi-bar-value-content"><div class="multi-bar-initVal">' + options.min + '</div>';
        if(options.reverse)
            valBar = '<div class="multi-bar-value-content reverse"><div class="multi-bar-initVal">' + options.min + '</div>';
        var indice = options.min;
        for(var c=0;c<MultiBar.prototype.colors.hot.length;c++){
            indice+=((options.max-options.min)/10)
            if(c==MultiBar.prototype.colors.hot.length-1)
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
        for(var b=0;b<MultiBar.prototype.colors.cold.length;b++){
            mulBar+='<div class="multi-bar-bar" style="background-color:' + MultiBar.prototype.colors.cold[b] + ';width:10%"></div>';
        }
        mulBar+='</div>'

        var valBar = '<div class="multi-bar-value-content"><div class="multi-bar-initVal">' + options.min + '</div>';
        if(options.reverse)
            valBar = '<div class="multi-bar-value-content reverse"><div class="multi-bar-initVal">' + options.min + '</div>';
        var indice = options.min;
        for(var c=0;c<MultiBar.prototype.colors.cold.length;c++){
            indice+=((options.max-options.min)/10)
            if(c==MultiBar.prototype.colors.cold.length-1)
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
            marker+= '<div class="multi-bar-marker" style="' + direction + ':' + ((value-options.min)/(options.max-options.min))*100 + '%;color:' + color + '">' + 
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
            $(ele.find(".multi-bar-content")[0]).css("width","68%");
            $(ele.find(".multi-bar-content")[0]).css("margin","0% 1%");
            $(ele.find(".multi-bar-content")[0]).css("float","left");
            $(ele.find(".multi-bar-legend-box")[0]).css("width","28%");
        }
        else{
            $(ele.find(".multi-bar-legend-box")[0]).remove();
            $(conLegend).append(
                boxLeg
            );
            $($(conLegend).find(".multi-bar-legend-box")[0]).css("margin","0%");
        }

    }
    
    var MultiBar = function (element, arValue, options) {
        
        this.element = $(element);
        
        var box = '<div class="multi-bar"><div class="multi-bar-content">';
        
        var bar;
        if(options.type && options.type=="hot")
            bar = createBar_hot(options);
        else if(options.type && options.type=="cold")
            bar = createBar_cold(options);
        else
            bar = createBar(options);
        
        var marker = createMarker(arValue,options);
        
        box+= marker + bar.mulBar + bar.valBar;
        box+= '</div></div>';
        
        this.element.html(
            box + '<div style="clear:both"></div>'
        );
        
        var legend = options.legend && options.legend.show==true;
        if(legend)
            createLegend(arValue,options,this.element)
        
        this.values= arValue;
        this.options= options;
    };

    MultiBar.prototype = {
        constructor: MultiBar,
        colors:{
            defaults: ["green","yellow","orange","red","purple","blue","black","white"],
            hot:["#F9F9BD","#F7F411","#ECD024","#FFA500","#E08E00","#FF350A","#E90000","#BE0028","#C10069","#8A0079"],
            cold:["#A4FCB7","#A4FCD6","#A4FCF5","#A4F2FC","#A4E1FC","#A4CDFC","#A4ACFC","#5479CE","#4759FF","#0019FF"]
        },
        setValue: function(arValue){
            var marker = createMarker(arValue,this.options);
            $($(this.element).find(".multi-bar-marker-content")[0]).replaceWith(marker);
            var legend = this.options.legend && this.options.legend.show==true;
            if(legend){
                var boxLegend = createLegend(arValue,this.options,this.element);
                /*var conLegend = this.options.legend.content;
                if(!conLegend){
                    $($(this.element).find(".multi-bar-legend-box")[0]).replaceWith(boxLegend);
                }
                else{
                    $($(conLegend).find(".multi-bar-legend-box")[0]).replaceWith(boxLegend);
                }*/
            }
        }
    };

    $.fn.multibar = function (value,option) {
        var args = Array.apply(null, arguments);
        args.shift();
        return this.each(function () {
            var $this = $(this),
                data = $this.data('multibar'),
                options = typeof option == 'object' && option,
                val = typeof value == 'object' && value
            
            if(!val)
                return console.log('Value not valid: ' + value);
            if (!data) {
                if(!options)
                    $this.data('multibar', new MultiBar(this, val, $.fn.multibar.defaults));
                else{
                    if(!options.min) options.min=$.fn.multibar.defaults.min;
                    if(!options.max) options.max=$.fn.multibar.defaults.max;
                    if(!options.multiBarValue) options.multiBarValue=$.fn.multibar.defaults.multiBarValue;
                    $this.data('multibar', new MultiBar(this, val, options));
                }
            }
        });
    };

    $.fn.multibar.defaults = {
        min:0,
        max:10,
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

    $.fn.multibar.Constructor = MultiBar;

} (window.jQuery);