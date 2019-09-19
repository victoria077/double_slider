# double_slider

double_slider — customizable range slider.

DEMO:
https://victoria077.github.io/slider__presentation/

USAGE:
Add the following libraries to the page:

* jQuery
* download the folder "dist" and include it in your project
* include in your html file:
    <link rel="stylesheet" href="./dist/style.e308ff8e.css">
    <script src="./dist/myFunc.66056626.js"></script>
    
INITIALISATION:

    <div class="wrapper">
        <div class="slider" id=""example_id"">
          <div class="slider__bar" id="slider__bar">
            <div class="slider__toggle" id="slider__toggle"></div>
          </div>
        </div>
      </div>
      
To initialise the slider:

     $("#example_id").Slider();
     
     
| Option | Type | Description |
| --- | --- | --- |
| minPos | number | Set slider minimum value |
| maxPos | number | Set slider maximum value |
| vertical	| boolean | Set slider in the vertical position|
| doublerange	| boolean | Add the second toggle |
| output	| boolean | Add the output, which show the position of the toggle |
| input	| boolean | Add the input, which show the position of the toggle |
| step	| number | Set the  step width of the toggle |

CREATING SLIDER (all params)
An example of a customised slider:

 $("#example_id").Slider({
     minPos: 0, maxPos: 700;  step: 10, vertical: true, doublerange: true, output: true, input: true;
});

