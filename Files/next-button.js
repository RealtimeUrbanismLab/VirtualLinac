import {modelDescriptions} from './data.js'
import {openPopup} from './popup.js'
import {selectcomponent, updateModelVisibility} from './selectcomponent.js'
import {getSelectedIndex, setSelectedIndex} from './data.js'

const updateButtonVisibility = () => {
  const nextButton = document.getElementById('nextbutton')
  const backButton = document.getElementById('backbutton')
  const currentIndex = getSelectedIndex()

  backButton.style.display = currentIndex > 0 ? 'inline-block' : 'none'
  nextButton.style.display = currentIndex < modelDescriptions.length - 1 ? 'inline-block' : 'none'
}

const nextButtonComponent = () => ({
  init() {
    let startButtonClicked = false

    const startButton = document.getElementById('startbutton')
    const placeButton = document.getElementById('placebutton')
    const message = document.getElementById('message')

    message.style.display = 'block'
    startButton.style.display = 'block'

    const enableExtraFeatures = () => {
      const modelElements = document.querySelectorAll('.cantap')
      const group = document.getElementById('group')

      modelElements.forEach((modelElement) => {
        const clonedModel = modelElement.cloneNode(true)
        group.appendChild(clonedModel)
        modelElement.remove()
      })
      group.setAttribute('xrextras-hold-drag', 'rise-height: 0')
      group.setAttribute('xrextras-two-finger-rotate', '')
    }

    startButton.onclick = () => {
      if (!startButtonClicked) {
        startButtonClicked = true
        startButton.style.display = 'none'
        placeButton.style.display = 'block'
        message.style.display = 'none'
        enableExtraFeatures()
      }
    }

    placeButton.onclick = () => {
      placeButton.style.display = 'none'
      // disableExtraFeatures()
      setSelectedIndex(0)
      selectcomponent()
      updateButtonVisibility()
    }

    const nextButton = document.getElementById('nextbutton')
    nextButton.onclick = () => {
      const currentIndex = getSelectedIndex()
      // console.log(`nextbutton, currIdx: ${currentIndex}  modeldesc: ${modelDescriptions.length}`)
      if (currentIndex < modelDescriptions.length - 1) {
        setSelectedIndex(currentIndex + 1)
        const nextModelId = modelDescriptions[currentIndex + 1].Modelname
        openPopup(getSelectedIndex(), modelDescriptions)
        updateButtonVisibility()
        updateModelVisibility(nextModelId)
      }
    }

    const backButton = document.getElementById('backbutton')
    backButton.onclick = () => {
      const currentIndex = getSelectedIndex()
      if (currentIndex < modelDescriptions.length) {
        // console.log('im working')
        setSelectedIndex(currentIndex - 1)
        const nextModelId = modelDescriptions[currentIndex - 1].Modelname
        openPopup(getSelectedIndex(), modelDescriptions)
        updateButtonVisibility()
        updateModelVisibility(nextModelId)
      }
    }
  },
})

export {nextButtonComponent, updateButtonVisibility}
