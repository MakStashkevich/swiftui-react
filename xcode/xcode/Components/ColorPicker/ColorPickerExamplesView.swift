
import SwiftUI

struct ColorPickerExamplesView: View {
    @State private var selectedColor = Color.red

    var body: some View {
        List {
            ColorPicker("Select Color", selection: $selectedColor)
            ColorPicker("Select Accent Color", selection: $selectedColor, supportsOpacity: false)
        }
        .navigationTitle("ColorPicker Examples")
    }
}

struct ColorPickerExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        ColorPickerExamplesView()
    }
}
