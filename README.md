# jquery-multi-bar - 0.4.0

`jquery-multi-bar` is a [jQuery](http://jquery.com) plugin which you can build custom progress bar with multi and personalized colors. The number and style of the colors are at your choice, so 'as the initial and final values. This allows you to create progress bar completely tailored to your needs. You can assign one or more values to the bar and you'll see them appear as a marker on the bar itself. And, if you want, you can decide to show also the legend of the value. Unlike <a href="http://j-ulrich.github.com/jquery-ui-multiprogressbar">http://j-ulrich.github.com/jquery-ui-multiprogressbar</a> plugin, this plugin adds the ability to include one or more markers that identify some points on the bar and show the relative legend.


## Demo
* Take a look at index.html


## Installation
* Download the latest release: [v0.4.0](https://github.com/teorossi82/jquery-multi-bar/archive/master.zip)
* Clone the repository: `git clone https://github.com/teorossi82/jquery-multi-bar.git`
* Install with [Bower](http://bower.io): `bower install jquery-multi-bar`

## Requirements
The plugin requires
* [jQuery 1.4.1+](http://jquery.com)

## What's new in v0.4.0?
* Fixed bug in multi-bar `type:cold` and `type:hot` for a miscalculation in the values of the multi-bar's blocks.
* Add the option `thermometer` that show your multi-bar inside a simple and awesome thermometer. Works with all other options, so you can combine `thermometer:true` and `type:hot`, or `thermometer:true` and `size:small` (view section "Multi Bar Thermometer").
* Add the possibility to hide all values of your multi-bar's block (view section "Settings - Hide all values of multi-bar's block"), or only some of them (view section "Settings - Set bar colors").

## Initialization & Usage
1. copy `multibar.js` (or .min), `multibar.css` (or .min) and `multi-bar-icon` folder into your project

2. include `multibar.js` and `multibar.css` in your html

```html
<link rel="stylesheet" type="text/css" href="multibar.css" />
<script type="text/javascript" src="multibar.js"></script>
```
3. create your `multi-bar` element in this way:

```html
<div id="boxMultibar"></div>
```
```javascript
$('#boxMultibar').multibar();
```

When initialized and create a multi-bar you only create the multi-bar element, without a value and a marker assigned. 

![Alt text](/demo/multi_bar_default.png "Bar without marker and default options")

To assign a marker to your multi-bar you have to use the method `multibar('setValue',values)`.
In this method is mandatory to pass it, as first argument, an array of values (at least one value) that will be the marker(s) of your multi-bar.

```html
<div id="boxMultibar"></div>
```
```javascript
var bar = $('#boxMultibar').multibar();
bar.multibar('setValue',[3]);
```
![Alt text](/demo/single_marker.png "Bar with single marker and default options")

#### From version 0.2.0
From version 0.2.0 you can set the value of your multi-bar's marker(s) during the initialization of the plugin, passing through the options of the function `$('#boxMultibar').multibar()`, the option `initValue`.

```javascript
var bar = $('#boxMultibar').multibar();
bar.multibar('setValue',[3]);
```

It's equal to

```javascript
var options = {
    initValue:[3]
}
var bar = $('#boxMultibar').multibar(options);
```

## Settings
Initialize a multi-bar without passing any options creates a multi-bar with the default options that are:

```javascript
    {
        min:0,
        max:10,
        type:"normal",
        reverse:false,
        posMarker:"outside",
        iconMarker:"arrow-down",
        multiBarValueVisibility:"visible", /* from v0.4.0 */
        shadow:false, /* from v0.3.0 */
        multiBarValue:[
            {
                visibility:"visible", /* from v0.4.0 */
                val:2,
                bgColor:"green"
            },
            {
                visibility:"visible", /* from v0.4.0 */
                val:4,
                bgColor:"yellow"
            },
            {
                visibility:"visible", /* from v0.4.0 */
                val:6,
                bgColor:"orange"
            },
            {
                visibility:"visible", /* from v0.4.0 */
                val:8,
                bgColor:"red"
            },
            {
                visibility:"visible", /* from v0.4.0 */
                val:10,
                bgColor:"purple"
            }
        ]
    };
```
![Alt text](/demo/multi_bar_default.png "Bar without marker and default options")

You can customize the look of your multi-bar through a series of settings:

- Minimum and maximum value (min, max)
```javascript
    var options = {
        min:20,
        max:50
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[25]);
```
![Alt text](/demo/options_minMax.png "Bar with single marker and options: min and max")

- Set bar colors (multiBarValue)

    > To create a multi-bar with custom background colors you have to set in the options the field `multiBarValue`, which consists of an array containing many objects are the blocks where you want to split your multi-bar. Each object in the array is formed by two fields:
    > * `val` that identifies the value up to which the block must arrive. If you want your multi-bar is completely filled, the value of the filed `val` for the last block have to be equal to the maximum value of your multi-bar (10 if the maximum value is set as the default)
    > * `bgColor` or `bgClass` that identifies the background color of the block or the class that you want to assign at the block. Sets the field `bgColor` if you want that the block of your multi-bar have a background with a single color and flat. By setting the field `bgClass`, instead, you can give to each block a class, you'll have to add to your css, so you can also set gradient or images to your multi-bar's background.

    * `bgColor`
    
    ```javascript
        var options = {
            multiBarValue:[
                {
                    val:4,
                    bgColor:"#0037FF"
                },
                {
                    val:7,
                    bgColor:"#10FF00"
                },
                {
                    val:10,
                    bgColor:"#000"
                }
            ]
        };
        var bar = $('#boxMultibar').multibar(options);
        bar.multibar('setValue',[6]);
    ```
    ![Alt text](/demo/options_customBarColors.png "Bar with single marker and options: multiBarValue with bgColor")

    * `bgClass` (From version 0.3.0)
    
    ```css
        .gradient-blue{
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a3aaff+0,0037ff+100 */
            background: #a3aaff; /* Old browsers */
            background: -moz-linear-gradient(top,  #a3aaff 0%, #0037ff 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#a3aaff), color-stop(100%,#0037ff)); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top,  #a3aaff 0%,#0037ff 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top,  #a3aaff 0%,#0037ff 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top,  #a3aaff 0%,#0037ff 100%); /* IE10+ */
            background: linear-gradient(to bottom,  #a3aaff 0%,#0037ff 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3aaff', endColorstr='#0037ff',GradientType=0 ); /* IE6-9 */
        }
        .gradient-green{
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b7ffb2+0,0fea00+100 */
            background: #b7ffb2; /* Old browsers */
            background: -moz-linear-gradient(top,  #b7ffb2 0%, #0fea00 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b7ffb2), color-stop(100%,#0fea00)); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top,  #b7ffb2 0%,#0fea00 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top,  #b7ffb2 0%,#0fea00 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top,  #b7ffb2 0%,#0fea00 100%); /* IE10+ */
            background: linear-gradient(to bottom,  #b7ffb2 0%,#0fea00 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7ffb2', endColorstr='#0fea00',GradientType=0 ); /* IE6-9 */
        }
        .gradient-black{
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a0a0a0+0,000000+100 */
            background: #a0a0a0; /* Old browsers */
            background: -moz-linear-gradient(top,  #a0a0a0 0%, #000000 100%); /* FF3.6+ */
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#a0a0a0), color-stop(100%,#000000)); /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(top,  #a0a0a0 0%,#000000 100%); /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(top,  #a0a0a0 0%,#000000 100%); /* Opera 11.10+ */
            background: -ms-linear-gradient(top,  #a0a0a0 0%,#000000 100%); /* IE10+ */
            background: linear-gradient(to bottom,  #a0a0a0 0%,#000000 100%); /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a0a0a0', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
        }
    ```
    ```javascript
        var options = {
            multiBarValue:[
                {
                    val:4,
                    bgClass:"gradient-blue"
                },
                {
                    val:7,
                    bgClass:"gradient-green"
                },
                {
                    val:10,
                    bgClass:"gradient-black"
                }
            ]
        };
        var bar = $('#boxMultibar').multibar(options);
        bar.multibar('setValue',[6]);
    ```
    ![Alt text](/demo/options_customBarClass.png "Bar with single marker and options: multiBarValue with bgClass") 
    
    > Setting the multiBarValue array of objects, you can decide to hide one or some of the values of your multi-bar's blocks. You can do that adding the field `visibility:"hidden"` to the block's object for wich you want to hide the value. See the example below:
    
    * `visibility:"hidden"` (From version 0.4.0)
    
    ```javascript
        var options = {
            multiBarValue:[
                {
                    visibility:"hidden",
                    val:2,
                    bgColor:"#AAAAAA"
                },
                {
                    val:4,
                    bgColor:"#0037FF"
                },
                {
                    visibility:"hidden",
                    val:7,
                    bgColor:"#10FF00"
                },
                {
                    val:10,
                    bgColor:"#000"
                }
            ]
        };
        var bar = $('#boxMultibar').multibar(options);
        bar.multibar('setValue',[6]);
    ```
    ![Alt text](/demo/options_visibility.png "Bar with single marker and options: multiBarValue with visibility")

- Direction reverse, progress bar from maximum value to minimum value (reverse)
```javascript
    var options = {
        reverse:true
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[8]);
```
![Alt text](/demo/options_reverse.png "Bar with single marker and options: reverse")

- Position the marker(s) inside or outside the bar (posMarker)
```javascript
    var options = {
        posMarker:"inside"
    };
    var bar = $('#boxMultibar').multibar([8],options);
    bar.multibar('setValue',[8]);
```
![Alt text](/demo/options_posMarker.png "Bar with single marker and options: posMarker")

- Set the icon of the marker(s) at your choice (iconMarker)
```javascript
    var options = {
        iconMarker:"hand-down"
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[8]);
```
![Alt text](/demo/options_iconMarker.png "Bar with single marker and options: iconMarker")

> The set of icons you can choose among them is the following:
![Alt text](/demo/multi_bar_icon.png "Multi-bar marker's icons")

- Set the size of the multi-bar (size)
    * `size:"big"`
    ```javascript
        var options = {
            size:"big"
        };
        var bar = $('#boxMultibar').multibar(options);
        bar.multibar('setValue',[4]);
    ```
    ![Alt text](/demo/options_size_big.png "Bar with single marker and options: size big")
    
    * `size:"small"`
    ```javascript
        var options = {
            size:"small"
        };
        var bar = $('#boxMultibar').multibar(options);
        bar.multibar('setValue',[4]);
    ```
    ![Alt text](/demo/options_size_small.png "Bar with single marker and options: size small")
    
- Set the shadow of your multi-bar (shadow) (From version 0.3.0)
```javascript
    var options = {
        shadow:"top_right"
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[8]);
```
![Alt text](/demo/options_shadow.png "Bar with single marker and options: shadow")

> You can choose between the following type of shadow:
> * `center`
> * `top`
> * `bottom`
> * `left`
> * `right`
> * `top_left`
> * `top_right`
> * `bottom_left`
> * `bottom_right`

- Hide all values of multi-bar's block (multiBarValueVisibility) (From version 0.4.0)

    > With this option you can hide the values of all your multi-bar's blocks, except the first and the last which can't be hidden.
    
```javascript
    var options = {
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
        ],
        multiBarValueVisibility:"hidden"
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[8]);
```
![Alt text](/demo/options_multiBarValueVisibility.png "Bar with option multiBarValueVisibility:hidden")

### Type of bar
In addition to the classic multi-bar, with default or custom settings, you can also create other types of multi-bar, simply by specifying in the options the field `type`:

- Type: hot (multi-bar with default hot colors)

    > For this type of multi-bar you can not customize the colors of the blocks that compose the bar because they are preset
    
```javascript
    var options = {
        type:"hot"
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[7.4]);
```
![Alt text](/demo/options_type_hot.png "Bar with single marker and type hot")

- Type: cold (multi-bar with default cold colors)

    > For this type of multi-bar you can not customize the colors of the blocks that compose the bar because they are preset

```javascript
    var options = {
        type:"cold"
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[4.5]);
```
![Alt text](/demo/options_type_cold.png "Bar with single marker and type cold")

```javascript
    var options = {
        type:"cold",
        min:-100,
        max:0
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[-40]);
```
![Alt text](/demo/options_type_cold_min_max.png "Bar with single marker, type cold and options: min and max")

### Multi Bar Thermometer (From version 0.4.0)
Setting a simple option (`thermometer:true`) you can create not only a custom multi-bar, but your custom thermometer! And you can combine with this option all the other multi-bar's options, like the `type ("hot" or "cold")` or the `size ("small" or "big")`.

- Simple Multi Bar Thermometer to measure the fever.
    
```javascript
    var options = {
        min:35,
        max:43,
        multiBarValue:[
            {
                val:37,
                bgColor:"yellow"
            },
            {
                val:39.5,
                bgColor:"orange"
            },
            {
                val:43,
                bgColor:"red"
            }
        ],
        thermometer:true
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[37.8]);
```
![Alt text](/demo/multi-bar-thermometer.png "Simple Multi Bar Thermometer")

- Multi Bar Thermometer combined with Multi Bar Type "hot".
    
```javascript
    var options = {
        min:35,
        max:43,
        type:"hot",
        thermometer:true
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[37.8]);
```
![Alt text](/demo/multi-bar-thermometer_hot.png "Multi Bar Thermometer combined with Multi Bar Type hot")


## Methods
### SetValue
To assign a marker to your multi-bar you have to use the method `multibar('setValue',values)` after creating your multi-bar.
In this method is mandatory to pass it, as first argument, an array of values (at least one value) that will be the marker(s) of your multi-bar.

- Single value
```javascript
    var bar = $('#boxMultibar').multibar();
    bar.multibar('setValue',[8]);
```
![Alt text](/demo/single_marker.png "Bar with single marker")

- Multi values
```javascript
    var bar = $('#boxMultibar').multibar([2,4,9]);
    bar.multibar('setValue',[2,4,9]);
```
![Alt text](/demo/multi_value.png "Bar with multi marker")

#### Customize the markers
You can customize the style of the markers passing to the `setValue` method, rather than an array of values, an array of objects. The filed that you can set for every marker are: `label`, `value` (mandatory), `color`.

```javascript
    var bar = $('#boxMultibar').multibar();
    var values = [
        {
            label:"Item 1",
            value:3,
            color:"#444444"
        },
        {
            label:"Item 2",
            value:4,
            color:"#FF0000"
        },
        {
            label:"Item 3",
            value:7,
            color:"#214AE0"
        }
    ];
    bar.multibar('setValue',values);
```
![Alt text](/demo/multi_value_custom_style.png "Bar with multi marker customized")

### Destroy
You can destroy your multi-bar with the method `multibar('destroy')`.
```javascript
    var bar = $('#boxMultibar').multibar();
    bar.multibar('destroy');
```

## Legend
You can show the legend of your multi-bar, setting in the options object the field `legend`. 

```javascript
    var options = {
        legend:{
            show:true
        }
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[3,4,7]);
```
![Alt text](/demo/multi_value_legend.png "Bar with multi marker and legend")

```javascript
    var values = [
        {
            label:"Item 1",
            value:3,
            color:"#444444"
        },
        {
            label:"Item 2",
            value:4,
            color:"#FF0000"
        },
        {
            label:"Item 3",
            value:7,
            color:"#214AE0"
        }
    ];
    var options = {
        legend:{
            show:true
        }
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',values);
```
![Alt text](/demo/multi_value_custom_style_legend.png "Bar with multi marker customized and legend")

- Title of the legend (From version 0.3.0)

By default the legend does not have a title, but you can decide to add it by setting, in the legend's options, the field `title` with the string corresponding to the title that you want to set.
```javascript
    var options = {
        legend:{
            show:true,
            title:"My Bar Items"
        }
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[3,4,7]);
```
![Alt text](/demo/multi_value_legend_title.png "Bar with multi marker and legend with title")

- Set class for legend's elements (From version 0.3.0)

You can set a personalized class, you'll have to add to your css, to title and item of your multi-bar's legend. To do it, set the fields `titleClass` and `itemClass` in the legend's options.
```css
    .titleLegend {
        text-align:left;
        color:#444;
        text-transform: uppercase;
        font-style: italic;
    }
    .itemLegend {
        border: medium none;
        font-style: italic;
        padding: 2px;
    }
    .itemLegend:nth-child(even) {
        background-color:#f0f0f0;
    }
```
```javascript
    var options = {
        legend:{
            show:true,
            title:"My Item",
            titleClass:"titleLegend",
            itemClass:"itemLegend"
        }
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[8,6,3]);
```
![Alt text](/demo/multi_value_legend_class.png "Bar with multi marker and legend with personalized classes")

#### Content of the Legend
By default the legend appear inside the element where you have initialized the multi-bar. If you want to put the legend in another element of the dom, you have to pass in the options of the legend, the filed `content`, where you can specified the content element of the legend.

```html
    <div id="boxMultibar"></div>
    <h3>Legend's content</h3>
    <div id="legendMultibar"></div>
```
```javascript
    var options = {
        legend:{
            show:true,
            content:"#legendMultibar"
        }
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[3,4,7]);
```
![Alt text](/demo/multi_value_legend_content.png "Bar with multi marker, legend and content legend")

## Bug, questions, contributions?
If you want to report me bugs, suggestions for improvement or work togheter to maintain this plugin, please write me at email: teorossi82@yahoo.it.

## Work in progress
- Add 3d option;
- Add "position" in setting ("horizontal","vertical");
- Add method and event.

## Copyright and license
Copyright @2015 Matteo Rossi, under [MIT license](https://github.com/teorossi82/jquery-multi-bar/blob/master/LICENSE.md).