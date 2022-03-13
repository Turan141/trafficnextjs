import React from 'react'
import { useState, useEffect } from 'react'
import TrafficSlider from '../Comps/Sliders/TrafficSlider'
import MinuteSlider from '../Comps/Sliders/MinutesSlider'
import HeaderComponent from '../Comps/Header/Header'
import SMSSlider from '../Comps/Sliders/SMSSlider'
import TotalComponent from '../Comps/TotalComponent.jsx'
import SocialApps from '../Comps/SocialAndMessegners/SocialComponent'

function MainApp({ iconsData }) {
  const [payForTraffic, setPayForTraffic] = useState(0)
  const [payForSMS, setPayForSMS] = useState(0)
  const [payForMinutes, setPayForMinutes] = useState(0)
  const [payForSocial, setPayForSocial] = useState(0)
  const [icons, setIcons] = useState('')
  const [totalSum, setTotalSum] = useState(
    payForMinutes + payForSMS + payForTraffic + payForSocial
  )

  useEffect(() => {
    setIcons(iconsData)
    ;(function totalSumHandler() {
      setTotalSum(payForMinutes + payForSMS + payForTraffic + payForSocial)
    })()
  }, [payForSMS, payForMinutes, payForTraffic, payForSocial])

  const addExtra = (elem, elem2 = null) => {
    for (let item in social) {
      item === elem.name ? (social[elem.name] = !social[elem.name]) : null
    }
    social[elem.name]
      ? setPayForSocial((prev) => prev + Number(elem.price))
      : setPayForSocial((prev) => prev - Number(elem.price))
  }

  return (
    <div className="MainAppDiv">
      <HeaderComponent />
      <MinuteSlider setPayForMinutes={setPayForMinutes} />
      <TrafficSlider setPayForTraffic={setPayForTraffic} />
      <SMSSlider setPayForSMS={setPayForSMS} />
      <div className="socialSection">
        {icons && (
          <SocialApps
            type={'Соцсети'}
            icons={icons.social}
            setPayForSocial={setPayForSocial}
            addExtra={addExtra}
          />
        )}
        {icons && (
          <SocialApps
            type={'Мессенджеры'}
            icons={icons.messengers}
            setPayForSocial={setPayForSocial}
            addExtra={addExtra}
          />
        )}
      </div>
      <div style={{ height: '50px' }} />
      <TotalComponent totalSum={totalSum} />
    </div>
  )
}

export default MainApp
