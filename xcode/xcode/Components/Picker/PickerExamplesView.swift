
import SwiftUI

struct PickerExamplesView: View {
    @State private var selectedFruit = "Apple"
    let fruits = ["Apple", "Banana", "Orange", "Grape"]

    var body: some View {
        List {
            Picker("Select a fruit", selection: $selectedFruit) {
                ForEach(fruits, id: \.self) {
                    Text($0)
                }
            }
            .pickerStyle(MenuPickerStyle())
            Text("Selected: \(selectedFruit)")
            
            Picker("Select a fruit", selection: $selectedFruit) {
                ForEach(fruits, id: \.self) {
                    Text($0)
                }
            }
            .pickerStyle(SegmentedPickerStyle())
        }
        .navigationTitle("Picker Examples")
    }
}

struct PickerExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        PickerExamplesView()
    }
}
