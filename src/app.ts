import {createApp} from 'vue'
import './app.scss'
import interactiveVideo from './faceid-interactive-video-mpsdk/main'

//初始化SDK
const options = {
  livenessMode: 1,
  disableAuthPage: true
}
interactiveVideo.init(options)

const App = createApp({})

export default App
