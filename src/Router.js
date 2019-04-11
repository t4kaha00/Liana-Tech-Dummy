import React from 'react'
import { Switch, Route } from 'react-router-dom'
import News from './components/News'
import Home from './components/Home'
import DigitalMarketing from './components/pages/digital-marketing'
import GoogleDisplay from './components/pages/google-display'
import HigherEducation from './components/pages/higher-education'
import WebinarRecording from './components/pages/webinar-recording'
import AI from './components/pages/ai'
import MediaMonitor from './components/pages/media-monitor'
import EmailMarketing from './components/pages/email-marketing'
import EducationMarketing from './components/pages/education-marketing'

const Router = () => (
  <router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/news' component={News}/>
      <Route path='/pages/digital-marketing' component={DigitalMarketing}/>
      <Route path='/pages/google-display' component={GoogleDisplay}/>
      <Route path='/pages/higher-education' component={HigherEducation}/>
      <Route path='/pages/webinar-recording' component={WebinarRecording}/>
      <Route path='/pages/ai' component={AI}/>
      <Route path='/pages/media-monitor' component={MediaMonitor}/>
      <Route path='/pages/email-marketing' component={EmailMarketing}/>
      <Route path='/pages/education-marketing' component={EducationMarketing}/>

    </Switch>
  </router>
)

export default Router