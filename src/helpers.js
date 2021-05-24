// This function allows us to insert commas into the right places in Numbers >= 1,000 with the help of regexs
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { numberWithCommas };