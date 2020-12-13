# Width Styles

Sassyons uses the css `calc` function to arrive at 1/3 values.

| Class | Properties |
| ----- | ---------- |
| w-third | width: calc(100% / 3) |
| w-2third | width: calc((100% / 3) * 2) |
| vw-third | width: calc(100vw / 3) |
| vw-2third | width: calc((100vw / 3) * 2) |
| w-min-third | min-width: calc(100% / 3) |
| w-min-2third | min-width: calc((100% / 3) * 2) |
| vw-min-third | min-width: calc(100vw / 3) |
| vw-min-2third | min-width: calc((100vw / 3) * 2) |
| w-max-third | max-width: calc(100% / 3) |
| w-max-2third | max-width: calc((100% / 3) * 2) |
| vw-max-third | max-width: calc(100vw / 3) |
| vw-max-2third | max-width: calc((100vw / 3) * 2) |

# Unit-based Width Styles

You can achieve percent or vw width values for any multiple of 5 between 0 - 100:
* Example = the `w-min-55` class name will produce `min-width: 55%`
* Example = the `vw-50` class name will produce `width: 50vw`

| Class | Properties |
| ----- | ---------- |
| w-&lang;num&rang; { width: &lang;num&rang;% |
| w-min-&lang;num&rang; { min-width: &lang;num&rang;% |
| w-max-&lang;num&rang; { max-width: &lang;num&rang;% |
| vw-&lang;num&rang; { width: &lang;num&rang;vw |
| vw-min-&lang;num&rang; { min-width: &lang;num&rang;vw |
| vw-max-&lang;num&rang; { max-width: &lang;num&rang;vw |
