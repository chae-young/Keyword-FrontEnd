import { MdClose } from '@react-icons/all-files/md/MdClose';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
}

const Modal = ({ children, title }: ModalProps) => (
  <dialog id="Modal" className="modal -z-10">
    <div className="modal-box w-11/12 max-w-default overflow-hidden">
      <header className="grid grid-cols-[1fr,30px]">
        <h2 className="text-h3 flex items-center">{title && title}</h2>
        <form method="dialog">
          <button type="submit">
            {' '}
            <MdClose className="text-3xl" />
          </button>
        </form>
      </header>
      {children}
    </div>
  </dialog>
);

export default Modal;
