function Modal(props) {

    // function cancelHandler() {
    //     props.onCancel();
    // }

    // function confirmHandler(){
    //     props.onCancel();
    // }
    return (
    <div className='modal'>
        <p>Are yous sure?</p>
        <button className='btn btn--alt' onClick={props.onCancel}>cancel</button>
        <button className='btn' onClick={props.onCancel}>confirm</button>
    </div>
    );
}

export default Modal;