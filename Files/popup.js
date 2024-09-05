import {resetModelOpacity, updateModelVisibility} from './selectcomponent.js'

function openPopup(modelIndex, modelDescriptions) {
  const popup = document.getElementById('popup')
  const popupTitle = document.getElementById('popup-title')
  const popupContent = document.getElementById('popup-content')
  const closePopupButton = document.getElementById('close-popup')

  if (modelIndex >= 0 && modelIndex < modelDescriptions.length) {
    const {Title, Subtitle, Description} = modelDescriptions[modelIndex]
    let htmlTitle = `
        <div class="title">${Title}</div>
    `
    if (Subtitle) {
      htmlTitle += `<div class="subtitle">${Subtitle}</div>`
    }
    popupTitle.innerHTML = htmlTitle

    const paragraphs = Description.split('\n\n')
    let htmlContent = ''
    htmlContent += '<div class="content">'
    paragraphs.forEach((paragraph) => {
      if (paragraph.trim() !== '') {
        htmlContent += `<p>${paragraph}</p>`
      }
    })
    htmlContent += '</div>'
    htmlContent += '</div>'
    popupContent.innerHTML = htmlContent
    popup.style.display = 'flex'
  }

  closePopupButton.onclick = () => {
    popup.style.display = 'none'
    resetModelOpacity()
  }
}

export {openPopup}
