import Button from "./Button"

type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  title: string
  onClose: () => void
}

export default function Modal(props: ModalProps) {

  return (
    <div 
      className={`relative z-10 ${props.isOpen ? 'block' : 'hidden'}`}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{props.title}</h3>
                  <div className="mt-4">
                    {props.children}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Button
                type="button"
                textContent="Confirmar"
                className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm text-white shadow-sm sm:ml-3 sm:w-auto"
                onClick={props.onClose}
                color="success"
              />

              <Button
                type="button"
                textContent="Cancelar"
                className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto"
                onClick={props.onClose}
                color="warning"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}