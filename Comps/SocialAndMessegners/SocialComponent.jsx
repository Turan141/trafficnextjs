import { useState } from 'react'

const SocialIcon = ({ elem, social, addExtra }) => {
  return (
    <div className="iconMapsDiv" key={elem.name}>
      <div
        className={
          social[elem.name] ? 'socialIconsActive' : 'socialIconsDeactive'
        }
      >
        <img
          src={elem.icon}
          alt={elem.name}
          onClick={() => {
            addExtra(elem)
          }}
        />
      </div>
      <div className="socialPrice">
        <p>{elem.price}</p>
      </div>
    </div>
  )
}

const SocialApps = ({ type, icons, addExtra }) => {
  const [social, setSocial] = useState({
    facebook: false,
    vkontakte: false,
    odnoklassniki: false,
    instagram: false,
    tiktok: false,
    whatsapp: false,
    discord: false,
    viber: false,
    wechat: false,
    telegram: false,
    vk: false,
  })

  const iconsMap = icons.map((elem) => {
    return (
      <SocialIcon
        key={elem.name}
        elem={elem}
        social={social}
        addExtra={addExtra}
      />
    )
  })

  return (
    <>
      <div className="socialMainDiv">
        <div className="leftColumn">
          <h1>{type}</h1>
          <h2>Выберите пожалуйста желаемые {type}</h2>
        </div>
        <div className="socialSecondaryDiv">{iconsMap}</div>
      </div>
    </>
  )
}

export default SocialApps
