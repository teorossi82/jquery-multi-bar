# multi-bar - 0.1.0

`multi-bar` is a [jQuery](http://jquery.com) plugin which you can build custom progress bar with multi and personalized colors. The number and style of the colors are at your choice, so 'as the initial and final values. This allows you to create progress bar completely tailored to your needs. You can assign one or more values to the bar and you'll see them appear as a marker on the bar itself. And, if you want, you can decide to show also the legend of the value.


## Demo

* coming soon


## Installation

* Download the latest release: [v0.1.0](https://github.com/teorossi82/multi-bar/archive/master.zip)
* Clone the repository: `git clone https://github.com/teorossi82/multi-bar.git`


## Usage

1. copy `multibar.js` (or .min), `multibar.css` (or .min) and `icon` folder into your project

2. include `multibar.js` and `multibar.css`

```html
<link rel="stylesheet" type="text/css" href="multibar.css" />
<script type="text/javascript" src="multibar.js"></script>
```

3. activate `multi-bar` functionality in this way:

```html
<div id="boxMultibar"></div>
```
```javascript
$('#boxMultibar').multibar([3]);
```
When initialized and create a multi-bar is mandatory to pass it, as first argument, an array of values (at least one value) that will be the marker(s) of your multi-bar.
Initialize a multi-bar just passing an array of values creates a multi-bar with the default options, that is:

### default values
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
![Alt text](/demo/single_marker.png "Bar with single marker and default options")


## Settings
You can customize the look of your multi-bar through a series of settings:

- Minimum and maximum value (min, max)
```javascript
    var options = {
        min:20,
        max:50
    };
    $('#boxMultibar').multibar([25],options);
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
    $('#boxMultibar').multibar([6],options);
```
![Alt text](/demo/options_customBarColors.png "Bar with single marker and options: multiBarValue")

- Direction reverse, progress bar from maximum value to minimum value (reverse)
```javascript
    var options = {
        reverse:true
    };
    $('#boxMultibar').multibar([8],options);
```
![Alt text](/demo/options_reverse.png "Bar with single marker and options: reverse")

- Position the marker(s) inside or outside the bar (posMarker)
```javascript
    var options = {
        posMarker:"inside"
    };
    $('#boxMultibar').multibar([8],options);
```
![Alt text](/demo/options_posMarker.png "Bar with single marker and options: posMarker")

- Set the icon of the marker(s) at your choice (iconMarker)
```javascript
    var options = {
        iconMarker:"hand-down"
    };
    $('#boxMultibar').multibar([8],options);
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
        $('#boxMultibar').multibar([4],options);
    ```
    ![Alt text](/demo/options_size_big.png "Bar with single marker and options: size big")
    
    * `size:"small"`
    ```javascript
        var options = {
            size:"small"
        };
        $('#boxMultibar').multibar([4],options);
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
    $('#boxMultibar').multibar([7.4],options);
```
![Alt text](/demo/options_type_hot.png "Bar with single marker and type hot")

- Type: cold (multi-bar with default cold colors)

> For this type of multi-bar you can not customize the colors of the blocks that compose the bar because they are preset

```javascript
    var options = {
        type:"cold"
    };
    $('#boxMultibar').multibar([4.5],options);
```
![Alt text](/demo/options_type_cold.png "Bar with single marker and type cold")

```javascript
    var options = {
        type:"cold",
        min:-100,
        max:0
    };
    $('#boxMultibar').multibar([-40],options);
```
![Alt text](/demo/options_type_cold_min_max.png "Bar with single marker, type cold and options: min and max")


## Values and markers
To set the values (markers) of the multi-bar you have to pass as first argument in the initialization function, an array of value. Every field of the array will be a marker of your multi-bar.

- Single value
```javascript
    $('#boxMultibar').multibar([8]);
```
![Alt text](/demo/single_marker.png "Bar with single marker")

- Multi values
```javascript
    $('#boxMultibar').multibar([2,4,9]);
```
![Alt text](/demo/multi_value.png "Bar with multi marker")

### Customize the markers
You can customize the style of the markers passing to the initialization function, rather than an array of values, an array of objects. The filed that you can set for every marker are: `label`, `value` (mandatory), `color`.

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
    $('#boxMultibar').multibar(values);
```
![Alt text](/demo/multi_value_custom_style.png "Bar with multi marker customized")

### Legend
You can show the legend of your multi-bar, setting in the options object the field `legend`. 

```javascript
    var options = {
        legend:{
            show:true
        }
    };
    $('#boxMultibar').multibar([3,4,7],options);
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
    $('#boxMultibar').multibar(values,options);
```
![Alt text](/demo/multi_value_custom_style_legend.png "Bar with multi marker customized and legend")

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
    $('#boxMultibar').multibar([3,4,7],options);
```
![Alt text](/demo/multi_value_legend_content.png "Bar with multi marker, legend and content legend")

## Copyright and license

Copyright 2015 Matteo Rossi, under [MIT license](https://github.com/teorossi82/multi-bar/blob/master/LICENSE.md).