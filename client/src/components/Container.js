import Barra from './Barra';


const Container = (props) => {
    const header = () => {
        return (
            <h1></h1>
        )
    }

    const footer = () => {
        return (
            <div>
                <h1>Footer</h1>
            </div>
        )
    }

    return (<>

        <div className='fondo2'>
            <Barra />
            <div style={{height:"90vh", overflow:"scroll"}}>
                {props.children}
            </div>
        </div>
    </>
    )
}



export default Container