import './ListContainer.css'

const ListContainer = (props) => {
    return (
        <div className='text-center'>
        <h3 className='tit'> {props.greeting} </h3>
        </div>
    )
}

export default  ListContainer