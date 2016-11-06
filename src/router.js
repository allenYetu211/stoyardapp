import TheContact from './view/TheContact'
import Information from './view/Information'
import Word from './view/word'

// import Mation from './components/Mation'

export default [{
  path: '/Word',
  name: 'Word',
  component: Word
}, {
  path: '/TheContact',
  name: 'TheContact',
  component: TheContact
}, {
  path: '/Information',
  name: 'Information',
  component: Information
}, {
  path: '/Information/mation/:id',
  name: 'mation',
  component: Information
}, {
  path: '*',
  redirect: '/Information'
}]
