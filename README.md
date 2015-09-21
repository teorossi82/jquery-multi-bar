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

## Init bar and set value
When initialized and create a multi-bar is mandatory to pass it, as first argument, an array of values (at least one value) that will be the marker(s) of your multi-bar.
Initialize a multi-bar just passing an array of values creates a multi-bar with the default options, that is:

### default values
```javascript
{
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
```
![Alt text](/demo/single_marker.png "Bar with single marker and default options")


## Settings

### default values

```javascript
Progressbar.defaults = {
transition_delay: 300,
refresh_speed: 50,
display_text: 'none',
use_percentage: true,
percent_format: function(percent) { return percent + '%'; },
amount_format: function(amount_part, amount_total) { return amount_part + ' / ' + amount_total; },
update: $.noop,
done: $.noop,
fail: $.noop
};
```

### transition_delay

Is the time in milliseconds until the animation starts.

This could be useful to delay the start on the initial page load like:

```javascript
$(document).ready(function() {
$('.progress .progress-bar').progressbar({
transition_delay: 1500
});
});
```

### refresh_speed

Is the time in milliseconds which will elapse between every text refresh, `aria-valuenow` attribute update and `update` callback call.

### display_text

Determines if and where to display text on the progressbar. Possible options:

* `none` __no text__
* `fill` __text on filled bar__
* `center` __text on center__ *(this mode changes css / html due to styling requirements)*

### use_percentage

If text will be displayed - this option determines whether to show the percentage value or the amount.

So if `use_percentage` is false and `aria-valuemin` and `aria-valuemax` are not set (or to `0` and `100`) the value will be the same but `amount_format` will be used to format the result.

Example:

`<div class="progress-bar" data-transitiongoal="75">`

with `use_percentage: true` is the final text: `75%`

with `use_percentage: false` is the final text: `75 / 100`

### percent_format

Is a function which returns the text format for progressbar with `use_percentage: true`.

It takes 1 argument which is the current percent value.

### amount_format

Is a function which returns the text format for progressbar with `use_percentage: false`.

It takes 3 argument which are the current-, the max- and the min-amount.

### update

Is a callback function which will be called while the progressbar is transitioning ;)

Depends on `refresh_speed`.

It takes 2 argument which is the current percent value and a reference to the attached progressbar element.

### done

Is a callback function which will be called when the transition process is done.

It takes 1 argument which is a reference to the attached progressbar element.

### fail

Is a callback function which will be called when an error occurs.

It takes 1 argument which is the error message.


## Customisation

### alignment
* to use a horizontal progressbar which is align to the right you have to add `right` to the `progress` element.

```html
<div class="progress right">
```
* to use a vertical progressbar you have to add `vertical` to the `progress` element.

```html
<div class="progress vertical">
```
* to use a vertical progressbar which is align to the bottom you have to add `vertical` and `bottom` to the `progress` element.

```html
<div class="progress vertical bottom">
```

### animation

to change the animation itself you have to overwrite either less or css

1. horizontal
* less

```css
.progress .bar {
.transition(width 2s ease-in-out);
}
```
* scss

```css
.progress.vertical .progress-bar {
@include transition(width 2s ease-in-out);
}
```
* css

```css
.progress .bar {
-webkit-transition: width 2s ease-in-out;
-moz-transition: width 2s ease-in-out;
-ms-transition: width 2s ease-in-out;
-o-transition: width 2s ease-in-out;
transition: width 2s ease-in-out;
}
```

1. vertical
* less

```css
.progress.vertical .bar {
.transition(height 2s ease-in-out);
}
```
* scss

```css
.progress.vertical .bar {
@include transition(height 2s ease-in-out);
}
```
* css

```css
.progress.vertical .bar {
-webkit-transition: height 2s ease-in-out;
-moz-transition: height 2s ease-in-out;
-ms-transition: height 2s ease-in-out;
-o-transition: height 2s ease-in-out;
transition: height 2s ease-in-out;
}
```

## Known Problems

* Looks like iOS Safari is flooring the width of the transition. So if you want to display text with a correct value you have to use a full bar width **greater or equal 100px**.

## Copyright and license

Copyright 2013-2015 Stephan Groß, under [MIT license](https://github.com/minddust/bootstrap-progressbar/blob/master/LICENSE).

Want to appreciate my work? [minddust at Gittip](https://www.gittip.com/minddust/)