
import SwiftUI

struct SliderExamplesView: View {
    @State private var sliderValue = 0.5
    @State private var steppedSliderValue = 0.0

    var body: some View {
        List {
            VStack {
                Text("Default Slider Value: \(sliderValue, specifier: "%.2f")")
                Slider(value: $sliderValue)
            }
            
            VStack {
                Text("Stepped Slider Value: \(steppedSliderValue, specifier: "%.0f")")
                Slider(value: $steppedSliderValue, in: 0...10, step: 1)
            }
            
            VStack {
                Text("Styled Slider Value: \(sliderValue, specifier: "%.2f")")
                Slider(value: $sliderValue, in: 0...1, minimumValueLabel: Text("Min"), maximumValueLabel: Text("Max")) {
                    Text("Volume")
                }
                .accentColor(.red)
            }
        }
        .navigationTitle("Slider Examples")
    }
}

struct SliderExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        SliderExamplesView()
    }
}
