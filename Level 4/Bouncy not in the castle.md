y After some investigation of the sources in the demo, it seems that it is loading colors from a background.png.js file.

```
	function getRandomColor(x, z) {
	let pos = (x + z * 21) * 6;
	let val = parseInt(hex.substring(pos, pos + 6), 16);
	console.log("x:" + x + ", z: " + z + ", val: " + val )
	return val;
}
```

This function does not not look very random.
In the src/bouncy-not-in-the-castle folder, I have created a basic page to render the colors in a grid. This grid is 21x21 which is the same size as a version 1 QR.

After some basic investigations locally, I took a screenshot and went to 
https://stegonline.georgeom.net/image

There I loaded the image and investigated the different layers.
Eventually I found that blue 0, is a QR code. The other layers just seem to be random data.

Scanning the QR code gives us the code.
`he2023{n0_b0uNc}`