
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

//integrate webpack with express
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//routing to root index file
app.get('/', (req, res) => {

  res.sendFile(path.join( __dirname, '../src/index.html'));

});

//testAPI
app.get('/images', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"imageName":"reduceImage","imageUrl":"./images/Large/reduce-greenfootprints-com.png","imageId":"reduceImage"},
    {"id": 2,"imageName":"recycleImage","imageUrl":"./images/Large/recycle-greenfootprints-com.png","imageId":"recycleImage"},
    {"id": 3,"imageName":"reuseImage","imageUrl":"./images/Large/reuse-greenfootprints-com.png","imageId":"reuseImage"},
    {"id": 4,"imageName":"homeIcon","imageUrl":"./images/Large/logo-greenfootprints-com.gif","imageId":"homeIcon"},
    {"id": 5,"imageName":"sliderImgOne","imageUrl":"./images/slider/slider-image2-greenfootprints-com.png","imageId":"sliderImgOne"},
    {"id": 6,"imageName":"sliderImgTwo","imageUrl":"./images/slider/slider-image3-greenfootprints-com.png","imageId":"sliderImgTwo"},
    {"id": 7,"imageName":"sliderImgThree","imageUrl":"./images/slider/slider-image4-greenfootprints-com.png","imageId":"sliderImgThree"},
    {"id": 8,"imageName":"paperBottles","imageUrl":"./images/Large/Recycling_image_1.gif","imageId":"paperBottles"},
    {"id": 9,"imageName":"flowChart","imageUrl":"./images/Large/recycling-flowchart.gif","imageId":"flowChart"},
    {"id": 10,"imageName":"wordSearch","imageUrl":"./images/Large/wordsearch.gif","imageId":"wordSearch"},
    {"id": 11,"imageName":"mainImageOne","imageUrl":"./images/Large/recycling-materials-greenfootprints-com.gif","imageId":"mainImageOne"},
    {"id": 12,"imageName":"mainImageTwo","imageUrl":"./images/Large/recylingbins-greenfootprints-com.png","imageId":"mainImageTwo"},
    {"id": 13,"imageName":"tenImageOne","imageUrl":"./images/Large/Image-glass.jpg","imageId":"tenImageOne"},
    {"id": 14,"imageName":"tenImageTwo","imageUrl":"./images/Large/house-greenfootprints-com.jpg","imageId":"tenImageTwo"},
    {"id": 15,"imageName":"tenImageThree","imageUrl":"./images/Large/Contact_image.gif","imageId":"tenImageThree"},
    {"id": 16,"imageName":"tenImageFour","imageUrl":"./images/Large/recycle-continuous-circle-greenfootprints-com.jpg","imageId":"tenImageFour"},
    {"id": 17,"imageName":"tenImageFive","imageUrl":"./images/Large/three-r-greenfootprints-com.png","imageId":"tenImageFive"},
    {"id": 18,"imageName":"tenImageSix","imageUrl":"./images/Large/house-in-leaf-greenfootprints-com.jpg","imageId":"tenImageSix"}
  ]);

});


//error handling
app.use(function (err, req, res) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

//opens browser
app.listen(PORT, function(err){

  if(err){

    console.log(err);

  } else{

    open('http://localhost:' + PORT);
  }

});
