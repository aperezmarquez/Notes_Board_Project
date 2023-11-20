import { MdDeleteForever } from 'react-icons/md'
import './Note.css'
import { useRef, useState } from 'react';

const Note = ({ id, tittle, text, handleDelete, handleEdit }) => {
    /*const [value, setValue] = useState({
        tittle: tittle,
        text: text
    });*/

    const tittleInput = useRef();
    const textInput = useRef();

    const changeToEditMode = () => {
        const header = document.getElementById(id + 'header');
        const editor = document.getElementById(id + 'editor');
        const boton = document.getElementById(id + 'boton');

        const hidden = header.getAttribute('hidden');

        if (hidden) {
            editor.setAttribute('hidden', 'hidden');
            header.removeAttribute('hidden');
            boton.innerHTML = 'EDITAR';
            handleEdit(id, tittleInput.current.value, textInput.current.value);
        } else {
            tittleInput.current.value = tittle;
            textInput.current.value = text;
            document.getElementById(id + 'text').innerHTML = "Texto || " + (120 - textInput.current.value.length) + " Restantes";
            header.setAttribute('hidden', 'hidden');
            editor.removeAttribute('hidden');
            boton.innerHTML = 'GUARDAR';
        }
    }

    const textCounter = () => {
        document.getElementById(id + 'text').innerHTML = "Texto || " + (120 - textInput.current.value.length) + " Restantes";

        if (textInput.current.value.length > 120) {
            document.getElementById(id + 'text').innerHTML = "Texto || " + 0 + " Restantes";
            textInput.current.value = textInput.current.value.substring(0, textInput.current.value.length - 1);
        }
    }

    const tittleCounter = () => {
        if (tittleInput.current.value.length > 20) {
            tittleInput.current.value = tittleInput.current.value.substring(0, tittleInput.current.value.length - 1);
        }
    }

    return (
        <div className="note">
            <div className="note-header" id={id + 'header'}>
                <h2 className="note-tittle">{tittle}</h2>
                <div className="note-text">{text}</div>
            </div>

            <div className="note-header-editor" id={id + 'editor'} hidden='hidden'>
                <label className='note-editor-label'>Título </label>
                <input type='text' ref={tittleInput} className='note-editor-tittle' id='tittle' placeholder='Título...' onChange={tittleCounter}></input>

                <label className='note-editor-label' id={id + 'text'}>Texto || 120 Restantes </label>
                <textarea ref={textInput} className='note-editor-text' id='text' placeholder='Contenido...' onChange={textCounter}></textarea>
            </div>

            <div className="note-footer" id='footer'>
                <button className='note-edit btn' id={id + 'boton'} onClick={changeToEditMode}>EDITAR</button>
                <MdDeleteForever className='note-delete' size='2em' onClick={() => handleDelete(id)}/>
            </div>
        </div>
    );
}

export default Note;