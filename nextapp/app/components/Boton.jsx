// Si no usamos use-client no podemos usar un boton de esta forma
// "use-client" en la primera linea de codigo donde estemos usando el boton

export default function Boton() {
    const handleClick = () => {
        return(1);
    }

    return (
        <button onClick="handleClick()">CLICK</button>
    );
}