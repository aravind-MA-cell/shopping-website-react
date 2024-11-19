import './Title.css'

const Title = (props) => {
    const {subtitle, title} = props;
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title