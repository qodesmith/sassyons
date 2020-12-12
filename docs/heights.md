# Height Styles

Sassyons uses the css `calc` function to arrive at 1/3 values.

| Class | Properties |
| ----- | ---------- |
| h-third | height: calc(100% / 3) |
| h-2third | height: calc((100% / 3) * 2) |
| vh-third | height: calc(100vh / 3) |
| vh-2third | height: calc((100vh / 3) * 2) |
| h-min-third | min-height: calc(100% / 3) |
| h-min-2third | min-height: calc((100% / 3) * 2) |
| vh-min-third | min-height: calc(100vh / 3) |
| vh-min-2third | min-height: calc((100vh / 3) * 2) |
| h-max-third | max-height: calc(100% / 3) |
| h-max-2third | max-height: calc((100% / 3) * 2) |
| vh-max-third | max-height: calc(100vh / 3) |
| vh-max-2third | max-height: calc((100vh / 3) * 2) |

# Unit-based Height Styles

You can achieve percent or vh height values for any multiple of 5 between 0 - 100:
* Example = the `h-min-55` class name will produce `min-height: 55%`
* Example = the `vh-50` class name will produce `height: 50vh`

| Class | Properties |
| ----- | ---------- |
| h-&lang;num&rang; { height: &lang;num&rang;% |
| h-min-&lang;num&rang; { min-height: &lang;num&rang;% |
| h-max-&lang;num&rang; { max-height: &lang;num&rang;% |
| vh-&lang;num&rang; { height: &lang;num&rang;vh |
| vh-min-&lang;num&rang; { min-height: &lang;num&rang;vh |
| vh-max-&lang;num&rang; { max-height: &lang;num&rang;vh |
