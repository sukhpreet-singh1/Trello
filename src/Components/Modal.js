import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
        
      <section className="modal-main">
        <div className='modalcloses'>
                  <button className="modalclose" type="button" onClick={handleClose}>
          Close
        </button>
        </div>

        {children}
        
      </section>
    </div>
  );
};

export default Modal;