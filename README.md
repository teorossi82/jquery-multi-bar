# multi-bar - 0.1.0

`multi-bar` is a [jQuery](http://jquery.com) plugin which you can build custom progress bar with multi and personalized colors. The number and style of the colors are at your choice, so 'as the initial and final values. This allows you to create progress bar completely tailored to your needs. You can assign one or more values to the bar and you'll see them appear as a marker on the bar itself. And, if you want, you can decide to show also the legend of the value. Unlike <a href="http://j-ulrich.github.com/jquery-ui-multiprogressbar">http://j-ulrich.github.com/jquery-ui-multiprogressbar</a> plugin, this plugin adds the ability to include one or more markers that identify some points on the bar and show the relative legend.


## Demo
* Take a look at index.html


## Installation
* Download the latest release: [v0.1.0](https://github.com/teorossi82/multi-bar/archive/master.zip)
* Clone the repository: `git clone https://github.com/teorossi82/multi-bar.git`

## Requirements
The plugin requires
* [jQuery 1.4.1+](http://jquery.com)

## Initialization & Usage
1. copy `multibar.js` (or .min), `multibar.css` (or .min) and `multi-bar-icon` folder into your project

2. include `multibar.js` and `multibar.css`

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

    > To create a multi-bar with custom colors you have to set in the options the field `multiBarValue`, which consists of an array containing many objects are the blocks where you want to split your multi-bar. Each object in the array is formed by two fields:
    > * `val` that identifies the value up to which the block must arrive. If you want your multi-bar is completely filled, the value of the filed `val` for the last block have to be equal to the maximum value of your multi-bar (10 if the maximum value is set as the default)
    > * `bgColor` that identifies the background color of the block

```javascript
    var options = {
        multiBarValue:[
            {
                val:2,
                bgColor:"#0037FF"
            },
            {
                val:4,
                bgColor:"#10FF00"
            },
            {
                val:8,
                bgColor:"#000"
            }
        ]
    };
    var bar = $('#boxMultibar').multibar(options);
    bar.multibar('setValue',[6]);
```
![Alt text](/demo/options_customBarColors_noFill.png "Bar with single marker and options: multiBarValue")

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
![Alt text](/demo/options_customBarColors.png "Bar with single marker and options: multiBarValue")

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
- Add more type of bar (thermometer, 3d);
- Add "position" in setting ("horizontal","vertical");
- Add possibility to set class of all bar blocks and not only background color.

## Copyright and license
Copyright 2015 Matteo Rossi, under [MIT license](https://github.com/teorossi82/multi-bar/blob/master/LICENSE.md).