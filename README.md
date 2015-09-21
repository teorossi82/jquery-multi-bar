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

## Create bar and set values
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



## Known Problems

* Looks like iOS Safari is flooring the width of the transition. So if you want to display text with a correct value you have to use a full bar width **greater or equal 100px**.

## Copyright and license

Copyright 2015 Matteo Rossi, under [MIT license](https://github.com/teorossi82/multi-bar/blob/master/LICENSE.md).