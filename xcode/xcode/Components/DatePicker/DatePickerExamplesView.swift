
import SwiftUI

struct DatePickerExamplesView: View {
    @State private var selectedDate = Date()

    var body: some View {
        List {
            DatePicker("Select Date", selection: $selectedDate)
            DatePicker("Select Time", selection: $selectedDate, displayedComponents: .hourAndMinute)
            DatePicker("Select Date and Time", selection: $selectedDate, in: Date()..., displayedComponents: [.date, .hourAndMinute])
        }
        .navigationTitle("DatePicker Examples")
    }
}

struct DatePickerExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        DatePickerExamplesView()
    }
}
