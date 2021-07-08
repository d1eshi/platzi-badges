import Modal from '../Modal'

export default function DeleteBadgeModal ({ isOpen, onClose, onDeleteBadge }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='DeleteBadgeModal'>
        <h1>Are you sure</h1>
        <p>You are to delete this badge.</p>

        <div>
          <button onClick={onDeleteBadge} className='btn btn-danger mr-4'>Delete</button>
          <button onClick={onClose} className='btn btn-primary'>Cancel</button>
        </div>
      </div>
    </Modal>
  )
}
