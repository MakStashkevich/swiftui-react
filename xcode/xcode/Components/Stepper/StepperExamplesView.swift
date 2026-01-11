
import SwiftUI

struct StepperExamplesView: View {
    @State private var stepperValue = 0

    var body: some View {
        List {
            Stepper("Value: \(stepperValue)", value: $stepperValue, in: 0...10)
            Stepper("Increment by 2: \(stepperValue)", onIncrement: {
                stepperValue += 2
            }, onDecrement: {
                stepperValue -= 2
            })
        }
        .navigationTitle("Stepper Examples")
    }
}

struct StepperExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        StepperExamplesView()
    }
}
