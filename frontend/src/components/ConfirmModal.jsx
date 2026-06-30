import "./Modal.css";

function ConfirmModal({
  isOpen = false,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  onConfirm,
  onCancel,
  confirmText = "Yes",
  cancelText = "Cancel"
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay fade-up">

      <div className="modal-card card">

        <div className="modal-header">

          <h2>{title}</h2>

        </div>

        <div className="modal-body">

          <p>{message}</p>

        </div>

        <div className="modal-actions">

          <button className="btn btn-outline" onClick={onCancel}>
            {cancelText}
          </button>

          <button className="btn btn-danger" onClick={onConfirm}>
            {confirmText}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmModal;