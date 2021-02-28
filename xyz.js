// const btn = document.querySelector('.remove')
// const handleClick = () => {
//   console.log('clicked')
//   btn.parentElement.remove()
// }

// btn.onClick = handleClick

const clickFunc = () => {
  console.log('clicked')
}

document.getElementsByClassName('remove').addEventListener('click', clickFunc)
