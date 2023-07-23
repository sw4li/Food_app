import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'

export default function Payment({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
        alert("Payment Cancelled")
    }

// razorpay integration
    const launchRazorPay=()=>{
        let options={
            key:"rzp_test_6PSKdUifGuxJ1o",
            amount:"699"*100,
            currency:"INR",
            name:"Food Meal App",
            description:"Purchasing ordered Food",
            image:"https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo-768x432.png",
            handler:()=>{
                setIsOpen(false);
                alert("payment Succesfull")
            },
            theme:{color:"#FF8000"},
        }

        const RazorPay =new window.Razorpay(options);
        RazorPay.open();
        setIsOpen(false)
    }

    return (
        <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please make a payment.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                   Hello,Please click on the below button make a payment.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={launchRazorPay}
                    >
                      Pay Rs.699
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 ml-5 text-sm font-medium text-blue-900 hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    )
}
