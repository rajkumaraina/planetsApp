import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item
  return (
    <div className="planetContainer">
      <img src={imageUrl} alt={`planet ${name}`} className="planetImg" />
      <h1 className="planetName">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
