import Navbar from '@/components/Navbar'
import BookingForm from '@/components/BookingForm'

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-stone-900">Book Your Appointment</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Schedule your treatment with our certified aesthetic practitioner
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BookingForm />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-2xl font-bold mb-4 text-stone-900">What Happens Next?</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="w-16 h-16 bg-stone-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-stone-900 mb-2">Submit Request</h4>
              <p className="text-stone-600 text-sm">Fill out the booking form with your preferred date and time</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-stone-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-stone-900 mb-2">We Confirm</h4>
              <p className="text-stone-600 text-sm">We&apos;ll review availability and confirm within 24 hours</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-stone-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-stone-900 mb-2">Attend Appointment</h4>
              <p className="text-stone-600 text-sm">Visit us at our London clinic for your treatment</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-stone-100 rounded-lg">
            <p className="text-stone-700 mb-2">
              <strong>Need immediate assistance?</strong>
            </p>
            <p className="text-stone-600">
              Call us at <a href="tel:07969488545" className="text-stone-800 font-semibold hover:underline">07969 488545</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}