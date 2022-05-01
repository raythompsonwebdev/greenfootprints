// page sliders
const sliderId = ['collection-box', 'contentbox', 'recycle-facts']
const sliderIndex = [1, 1, 1]

const multiSlider = (n, no) => {
  let i

  const x = document.getElementsByClassName(sliderId[no])

  if (n > x.length) {
    sliderIndex[no] = 1
  }
  if (n < 1) {
    sliderIndex[no] = x.length
  }
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }

  x[sliderIndex[no] - 1].style.display = 'block'
}

const singleSlider = (n, no) => {
  multiSlider((sliderIndex[no] += n), no)
}

export { multiSlider, singleSlider }
